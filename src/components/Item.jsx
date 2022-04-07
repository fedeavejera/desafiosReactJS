import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button} from "reactstrap"

export default function Item({ id, nombre, marca, precio, stock, img, categoria}) {
    
    return(
        <div> 
    <Card key={id}>
        <CardImg
          alt="Card image cap"
          src= {img.url}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{nombre}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">{marca}</CardSubtitle>
          <CardText>${precio}</CardText>
          <Button>
            Add To Cart
          </Button>
        </CardBody>
      </Card></div>
    )
}