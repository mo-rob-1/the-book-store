import { useState, useEffect } from "react";
import axios from "axios";

function Books() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState(localStorage.getItem("active") === "true");
  const [isLoading, setIsLoading] = useState(true);
  const [reverse, setReverse] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=HTML5")
      .then((res) => {
        setData(res.data.items);
        setIsLoading(false);
        setReverse(res.data.items.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("active", item);
  }, [item]);

  const isSelected = (e) => {
    e.target.classList.toggle("active");
    setItem(e.target.innerText);
    localStorage.getItem("active", item);
    setItem(!item);
  };

  if (isLoading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="two-col">
      <ul className="books">
        {data.map((item) => (
          <li key={item.etag} className="books__item" onClick={isSelected}>
            <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} className="books__item-img" />
            <div className="books__item-text-wrapper">
              <h3 className="books__item-title">{item.volumeInfo.title}</h3>
              <p className="books__item-author">{Object.values(item.volumeInfo.authors || {}).join(", ")}</p>
              <p className="books__item-pages">
                <b>Pages:</b> {item.volumeInfo.pageCount}
              </p>
              <p className="books__item-desc">{item.volumeInfo.description.substring(0, 140)}...</p>
            </div>
          </li>
        ))}
      </ul>
      <aside className="featured">
        <h2 className="featured__title">Featured</h2>
        <ul className="featured__list">
          {reverse
            .reverse()
            .slice(0, 2)
            .map((item) => (
              <li key={item.etag} className="featured__list-item" onClick={isSelected}>
                <div className="featured__list-item-img">
                  <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} />
                </div>
                <h3>{item.volumeInfo.title}</h3>
                <p className="author-name">{Object.values(item.volumeInfo.authors || {}).join(", ")}</p>
                <p className="number-of-pages">
                  <b>Pages:</b> {item.volumeInfo.pageCount}
                </p>
                <p className="desc">{item.volumeInfo.description.substring(0, 140)}...</p>
              </li>
            ))}
        </ul>
      </aside>
    </div>
  );
}

export default Books;
