import AvatarPlaceholder from "../Images/AvatarPlaceholder.png";
import React from "react";

const Avatar = ({className, avatarUrl}) => {
  return <div>{avatarUrl != null ? <img className={className} src={avatarUrl} /> : <img className={className} src={AvatarPlaceholder} />}</div>;
};

export default Avatar;
