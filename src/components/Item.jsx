import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button} from "reactstrap"
import { Link } from "react-router-dom";

const Item = ({ id, nombre, marca, precio, stock, img, categoria, description}) => {
    
    return(
        <div>
    <Card key={id}>
        <CardImg
          alt="Card image cap"
          src= {img}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{nombre}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">{marca}</CardSubtitle>
          <CardText>${precio}</CardText>
          <Link to={`/item/${id}`}><Button>
            Detalle
          </Button></Link>
        </CardBody>
      </Card></div>
    );
}

export default Item;