import React, { useEffect, useState } from "react";
import "../../App.css";
import { useParams } from "react-router-dom";

const PagePost = () => {
  const [listItems, setListItems] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setListItems(json));
  }, []);

  return (
    <div className="App">
      <header className="App-header">ПИКАССО Virtual List</header>
      <div className="App-container">
        <a href="/">Назад</a>
        <h3>{listItems.title}</h3>
        <p>{listItems.body}</p>
      </div>
    </div>
  );
};

export default PagePost;
