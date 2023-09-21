import React from "react";
import "../../App.css";
import Button from "../../shared/button";

const Post = ({ data, virtualItem }) => {
  const item = data[virtualItem.i];

  return (
    <div
      style={{
        top: 0,
        position: "absolute",
        transform: `translateY(${virtualItem.offsetTop}px)`,
      }}
      className="Post"
    >
      <span>{item.id}</span>
      <div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
      <Button text={"Просмотр"} id={item.id} />
    </div>
  );
};

export default Post;
