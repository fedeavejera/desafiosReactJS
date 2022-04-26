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
               test.cartList.map( productos => 

                <Card key={productos.idItem}>
                   <CardImg
                     alt="Card image cap"
                     src= {productos.imgItem}
                     top
                     width="100%"
                   />
                   <CardBody>
                     <CardTitle tag="h5">{productos.nameItem}</CardTitle>
                     <CardSubtitle className="mb-2 text-muted" tag="h6">{productos.brandItem}</CardSubtitle>
                     <CardText>$ {productos.priceItem}</CardText> 
                     <CardText>{productos.qtyItem}</CardText>    
                     <Button onClick={() => test.removeItem(productos.idItem)}>Delete</Button>                
                   </CardBody>
                </Card>

               )
               :<h1></h1>
            }
    </div>
    <div>
           {
               test.cartList.length > 0 &&
               <Card>               
               <CardBody>
                 <CardTitle tag="h5">Your Order</CardTitle>
                 <CardSubtitle className="mb-2 text-muted" tag="h6">Subtotal</CardSubtitle>
                 <CardText>{test.calcSubTotal()}</CardText> 
                 <CardText>IVA</CardText>
                 <CardText>{test.calcIVA()}</CardText>
                 <CardText>Total</CardText>
                 <CardText>{test.calcTotal()}</CardText>                       
                 <Button>Finish</Button>                
               </CardBody>
            </Card>
           }
    </div>
        </>
    );
}

export default Cart;




