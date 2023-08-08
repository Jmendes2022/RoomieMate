import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const ImageSkeleton = ({className}) => {
  return (
    <div className={"aside-2-image-placeholder" + className}>
      <span>
        <ClipLoader />
      </span>
    </div>
  );
};

export default ImageSkeleton;
