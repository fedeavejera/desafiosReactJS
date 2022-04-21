import {useContext} from 'react';
import {CartContext} from './CartContext';
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button} from "reactstrap"
import {Link} from 'react-router-dom';


const Cart = () => {
    const test = useContext(CartContext);
    return(
        <>
        <h1>Shopping Cart</h1>
        <Link to='/'><Button variant='contained'>Continue Shopping</Button></Link>
        {
            (test.cartList.length > 0)
            ? <Button onClick={test.clear}>Delete All Products</Button>
            : <h3>Your Cart is Empty</h3>
        }
        <div>
            {
               test.cartList.length > 0 ?
               test.cartList.map( item => 

                <Card key={item.idItem}>
                   <CardImg
                     alt="Card image cap"
                     src= {item.imgItem}
                     top
                     width="100%"
                   />
                   <CardBody>
                     <CardTitle tag="h5">{item.nameItem}</CardTitle>
                     <CardSubtitle className="mb-2 text-muted" tag="h6">{item.brandItem}</CardSubtitle>
                     <CardText>$ {item.priceItem}</CardText> 
                     <CardText>{item.qtyItem}</CardText>    
                     <Button onClick={() => test.removeItem(item.idItem)}>Delete</Button>                
                   </CardBody>
                </Card>

               )
               :<h1></h1>
            }
    </div>
        </>
    );
}

export default Cart;