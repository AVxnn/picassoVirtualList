import React from "react";

const Button = ({ text, callback, id }) => {
  return <a href={`/post/${id}`}>{text}</a>;
};

export default Button;
