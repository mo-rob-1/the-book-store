import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "react-use-localstorage";

function Featured() {
  const [featuredData, setFeaturedData] = useState([]);
  const [item, setItem] = useLocalStorage("name", "Initial Value");

  useEffect(() => {
    axios
      .get("response.json")
      .then((res) => {
        setFeaturedData(res.data.items.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const isSelected = (e) => {
    e.target.classList.toggle("is-selected");
    setItem(e.target.innerText);
    localStorage.setItem("is-selected", item);
  };

  return (
    <aside className="featured">
      <h2 className="featured__title">Featured</h2>
      <ul className="featured__list">
        {featuredData.slice(0, 2).map((item) => (
          <li key={item.etag} className="featured__list-item" onClick={isSelected}>
            <div className="featured__list-item-img">
              <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} />
            </div>
            <h3>{item.volumeInfo.title}</h3>
            {item.volumeInfo.subtitle ? (
              <h5 className="featured__item-subtitle">{item.volumeInfo.subtitle}</h5>
            ) : (
              <h5 className="featured__item-subtitle">No Subtitle</h5>
            )}
            <p className="author-name">{Object.values(item.volumeInfo.authors || {}).join(", ")}</p>
            <p className="number-of-pages">
              <b>Pages:</b> {item.volumeInfo.pageCount}
            </p>
            <p className="desc">{item.volumeInfo.description.substring(0, 140)}...</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Featured;
