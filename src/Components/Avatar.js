import AvatarPlaceholder from "../Images/AvatarPlaceholder.png";
import React, {useEffect, useState} from "react";

const Avatar = ({className, avatarUrl}) => {
  // const [userUrl, setUserUrl] = useState("");

  // useEffect(() => {
  //   setUserUrl(avatarUrl);
  // }, []);

  return <div>{avatarUrl != null ? <img className={className} src={avatarUrl} /> : <img className={className} src={AvatarPlaceholder} />}</div>;
};

export default Avatar;
