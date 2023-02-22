/*import*/
import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList.jsx";
import Data from "../../data.json";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const { category } = useParams();
  const catFilter = Data.filter((products) => product.category === category);
  return (
    <div>
      <h2>Prueba</h2>
      {category ? <ItemList products={catFilter} /> : <ItemList products={Data} />}
    </div>
  );
};

/*export*/
export default ItemListContainer;