import { useState, useEffect } from "react";
import axios from "axios";

function Featured() {
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=HTML5")
      .then((res) => {
        setFeaturedData(res.data.items.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="featured">
      <h2 className="featured__title">Featured</h2>
      <ul className="featured__list">
        {featuredData.slice(0, 2).map((item) => (
          <li key={item.etag} className="featured__list-item">
            <img src={item.volumeInfo.imageLinks.thumbnail} alt="" />
            <h3>{item.volumeInfo.title}</h3>
            <p className="author-name">{item.volumeInfo.authors[0]}</p>
            <p className="number-of-pages">
              <b>Pages:</b> {item.volumeInfo.pageCount}
            </p>
            <p>{item.volumeInfo.description.substring(0, 140)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Featured;
