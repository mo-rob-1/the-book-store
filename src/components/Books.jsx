import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "react-use-localstorage";

function Books() {
  const [data, setData] = useState([]);
  const [item, setItem] = useLocalStorage("name", "Initial Value");

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=HTML5")
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // toggle li element border on click and change the value of the local storage
  const handleClick = (e) => {
    e.target.classList.toggle("active");
    setItem(e.target.innerText);
  };

  return (
    <ul className="books">
      {data.map((item) => (
        <li key={item.etag} className="books__item" onClick={handleClick}>
          <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} className="books__item-img" />
          <div className="books__item-text-wrapper">
            <h3 className="books__item-title">{item.volumeInfo.title}</h3>
            <p className="books__item-author">{item.volumeInfo.authors[0]}</p>
            <p className="books__item-pages">
              <b>Pages:</b> {item.volumeInfo.pageCount}
            </p>
            <p className="books__item-desc">{item.volumeInfo.description.substring(0, 140)}...</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Books;