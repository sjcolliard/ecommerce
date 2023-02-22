/*import*/
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const Item = ({ id, name, stock }) => {
  return (
    <div>
      <div key={id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="product" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Stock: {stock}</Card.Text>
            <Link to={`/item/${id}`}><Button variant="primary">Detalles</Button></Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}


/*export*/
export default Item;