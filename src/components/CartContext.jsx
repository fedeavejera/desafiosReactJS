import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantity) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.img,
                    nameItem: item.nombre,
                    brandItem: item.marca,
                    priceItem: item.precio,
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
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clear, removeItem}}>
             {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;