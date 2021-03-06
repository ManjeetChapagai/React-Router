//This works like restaurantDetai
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    console.log(item.data);
    setItem(item.data);
  };
  return (
    <div>
      {Object.keys(item).length > 0 ? (
        <div>
          <h1> {item.item.name}</h1>
          <img src={item.item.images.background} />
        </div>
      ) : null}
    </div>
  );
}
export default Item;
