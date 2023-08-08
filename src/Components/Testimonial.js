import React from "react";

const Testimonial = ({className, children}) => {
  return <div className={className + " card"}>{children}</div>;
};

export default Testimonial;
