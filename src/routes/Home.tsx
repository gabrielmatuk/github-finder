import { UserProps } from "../types/user";
import { GITHUB_URL } from "../constants/url";

import Search from "../components/Search";

import React from "react";

const Home = () => {
  const [user, setUser] = React.useState<UserProps | null>(null);
    
  const loadUser = async(userName: string) => {
    const res = await fetch(`${GITHUB_URL}/${userName}`)
    const data = await res.json();

    console.log(data)
  }

  return (
    <div>
      <Search loadUser={loadUser}/>
    </div>
  );
};

export default Home;
