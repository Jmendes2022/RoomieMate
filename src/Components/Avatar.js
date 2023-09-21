import AvatarPlaceholder from "../Images/AvatarPlaceholder.png";
import React, {useEffect, useState} from "react";

const Avatar = () => {
  const [userUrl, setUserUrl] = useState(null);

  useEffect(() => {
    function GetUrl() {
      const avatarUrl = localStorage.getItem("AvatarUrl");

      if (avatarUrl) {
        setUserUrl(avatarUrl);
      }
    }

    GetUrl();
  }, []);

  return <div>{userUrl != null ? <img className="avatar-Image" src={userUrl} /> : <img className="avatar-Image" src={AvatarPlaceholder} />}</div>;
};

export default Avatar;
