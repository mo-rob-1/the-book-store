import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "react-use-localstorage";

function Books() {
  const [data, setData] = useState([]);
  const [item, setItem] = useLocalStorage("name", "Initial Value");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("response.json")
      .then((res) => {
        setData(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const isSelected = (e) => {
    e.target.classList.toggle("active");
    setItem(e.target.innerText);
    localStorage.setItem("active", item);
  };

  if (isLoading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div>
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
    </div>
  );
}

export default Books;
