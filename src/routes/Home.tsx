import { UserProps } from "../types/user";
import { GITHUB_URL } from "../constants/url";

import Search from "../components/Search";
import User from "../components/User";

import React from "react";

const Home = () => {
  const [user, setUser] = React.useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`${GITHUB_URL}/${userName}`);
    const data = await res.json();

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData)
  };

  return (
    <div>
      <Search loadUser={loadUser} />
     {user && <User {...user}/>}
    </div>
  );
};

export default Home;
