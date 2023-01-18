import { UserProps } from "../types/user";
import { GITHUB_URL } from "../constants/url";

import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";

import React from "react";

const Home = () => {
  const [user, setUser] = React.useState<UserProps | null>(null);
  const [error, setError] = React.useState(false);

  const loadUser = async (userName: string) => {
    setError(false)
    setUser(null)
    
    const res = await fetch(`${GITHUB_URL}/${userName}`);
    const data = await res.json();

    if (res.status === 404) {
        setError(true)
        return
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error/>}
    </div>
  );
};

export default Home;
