import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";

import { Link } from "react-router-dom";
import classes from "./User.module.css";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.stats}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div>
        <p>Seguidores:</p>
        <p className={classes.number}>{followers}</p>
      </div>
      <div>
        <p>Seguindo:</p>
        <p className={classes.number}>{following}</p>
      </div>
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  );
};

export default User;
