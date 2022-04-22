import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (productos, quantity) => {
        console.log(productos, quantity);
        let found = cartList.find(product => product.idItem === productos.id);
        console.log(cartList);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: productos.id,
                    imgItem: productos.img,
                    nameItem: productos.nombre,
                    brandItem: productos.marca,
                    priceItem: productos.precio,
                    qtyItem: quantity
                }
            ]);
        } else {
            found.qtyItem += quantity;
        }        
    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        let result = cartList.filter(product => product.idItem != id);
        setCartList(result);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clear, removeItem}}>
             {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;



