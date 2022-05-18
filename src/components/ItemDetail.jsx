import React from 'react';
import Item from './Item';
import {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { Container, Row} from "reactstrap";
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button} from "reactstrap"
import CheckOut from './ChekOut';
import { CartContext } from './CartContext';

 const ItemDetail = ({ productos }) => {
   const [itemCount, setItemCount] = useState(0);
   const test = useContext(CartContext);

   const onAdd = (quantity) => {
     alert("You have selected" + quantity + "products.");
     setItemCount(quantity);
     test.addToCart(productos, quantity);
   }

    return(
        <>
        {
          productos && productos.img
          ?
        <Container>
            <Row>
             
    <Card key={productos.id}>
        <CardImg
          alt="Card image cap"
          src= {productos.img}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{productos.nombre}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">{productos.marca}</CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">{productos.description}</CardSubtitle>
          <CardText>${productos.precio}</CardText>
          <CardSubtitle className="mb-2 text-muted" tag="h6">Unidades disponibles:{productos.stock}</CardSubtitle>
         
        </CardBody>
      </Card>
           
            </Row>
        </Container>
        : <p>Cargando...</p>
      }
        {  
          itemCount === 0        
          ? <ItemCount stock={productos.stock} initial={itemCount} onAdd={onAdd} />
          : <CheckOut />
          }
          
        </>
    );
}


export default ItemDetail;