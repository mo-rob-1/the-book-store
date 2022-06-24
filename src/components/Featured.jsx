import { useState, useEffect } from "react";
import useLocalStorage from "react-use-localstorage";
import axios from "axios";

function Featured() {
  const [featuredData, setFeaturedData] = useState([]);
  const [setItem] = useLocalStorage("name", "Initial Value");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=HTML5")
      .then((res) => {
        setFeaturedData(res.data.items.reverse());
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const isSelected = (e) => {
    e.target.classList.toggle("active");
    setItem(e.target.innerText);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

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
