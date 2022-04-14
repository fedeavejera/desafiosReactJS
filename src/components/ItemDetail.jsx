import React from 'react';
import Item from './Item';
import ItemCount from './ItemCount';
import { Container, Row} from "reactstrap";
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button} from "reactstrap"

 const ItemDetail = ({ productos }) => {
 
    return(
        <>
        <Container>
            <Row>
            <div> 
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
          <ItemCount stock={productos.stock} initial={1}/>
        </CardBody>
      </Card></div>
      
            </Row>
        </Container>
        </>
    )
}


export default ItemDetail;