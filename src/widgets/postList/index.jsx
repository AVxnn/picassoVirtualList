import React, { useState, useEffect, useRef, useMemo } from "react";
import "../../App.css";
import Post from "../../entities/post";

const conteinerHeight = 1000;
const itemHeight = 157;
const overScan = 3;

const PostList = ({ data }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const scrollElementRef = useRef(null);

  const allItemsHeight = data.length * itemHeight;

  useEffect(() => {
    const scrollElement = scrollElementRef.current;

    if (!scrollElement) {
      return;
    }

    const handlerScroll = () => {
      const scrollTop = scrollElement.scrollTop;

      setScrollTop(scrollTop);
    };

    scrollElement.addEventListener("scroll", handlerScroll);

    return () => scrollElement.removeEventListener("scroll", handlerScroll);
  }, []);

  const virtualItems = useMemo(() => {
    const rangeStart = scrollTop;
    const rangeEnd = scrollTop + conteinerHeight;

    let startIndex = Math.floor(rangeStart / itemHeight);
    let endIndex = Math.ceil(rangeEnd / itemHeight);

    startIndex = Math.max(0, startIndex - overScan);
    endIndex = Math.min(data.length - 1, endIndex + overScan);

    const virtualItems = [];

    for (let i = startIndex; i <= endIndex; i++) {
      virtualItems.push({
        i,
        offsetTop: i * itemHeight,
      });
    }

    return virtualItems;
  }, [scrollTop, data.length]);

  //   const itemsToRender = data.slice(startIndex, endIndex + 1)

  return (
    <div ref={scrollElementRef} className="App-list">
      <div style={{ height: `${allItemsHeight}px`, position: "relative" }}>
        {virtualItems.map((virtualItem, index) => (
            <div key={index}>
                <Post data={data} virtualItem={virtualItem} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
