import React from 'react'
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  const productsFilter = products.filter((product) => product.id == id);

  return (
    <>
      {productsFilter.map((product) => (
        <div key={product.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
               <ItemCount
               stock={product.stock}
               id={product.id}
               price={product.price}
               name={product.name} 
               />
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  )
}

export default ItemDetail;