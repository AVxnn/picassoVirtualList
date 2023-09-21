import { useEffect, useState } from "react";
import "./App.css";
import PostList from "./widgets/postList";

// Используя React, RTK Query, React Router DOM 6, JSON Placeholder и FSD-архитектуру сделайте простое приложение:
// 1. главная страница - список постов (бесконечный скролл + виртуализация)
// 2. каждый пост в списке - это строка: номер + заголовок + описание обрезанное "...", если не влезает + кнопка "просмотр"
// 3. кнопка "просмотр" ведет на отдельный роут, где отображается полная информация о посте в произвольной форме + кнопка "назад"

function App() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setListItems(json));
  }, []);
  return (
    <div className="App">
      <header className="App-header">ПИКАССО Virtual List</header>
      <div className="App-container">
        <PostList data={listItems} />
      </div>
    </div>
  );
}

export default App;
