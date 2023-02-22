/*import*/
import Item from "../item/Item";

const ItemList = ({ products }) => {
    return (
        <div>
            {products?.map((product) => (
                <Item
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    stock={product.stock}
                    category={product.category}
                />
            ))}
        </div>
    )
}

/*export*/
export default ItemList;