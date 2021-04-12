import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("")
  const [itemsList, setItemsList]  = useState([...items])

  function onSearchChange(newSearch) {
    setSearchItem(newSearch)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onItemFormSubmit(newItem) {
    setItemsList([...itemsList, newItem])
  }



  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory === "All") {return item.name.includes(searchItem);
    } else {
    return item.category === selectedCategory;}
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} searchItem={searchItem}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
