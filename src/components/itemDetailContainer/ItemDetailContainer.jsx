/*import*/
import ItemDetail from "../itemDetail/ItemDetail";
import Data from "../../data.json";

const ItemDetailContainer = () => {
  return <ItemDetail products={Data} />;
};

/*export*/
export default ItemDetailContainer;