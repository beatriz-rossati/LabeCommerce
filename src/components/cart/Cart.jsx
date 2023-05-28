import {StyledCart} from "./Cart.style"
import Item from "./item/Item";

import { useState, useEffect } from "react";

export default function Cart({cartItems, removeItem}) {

    const renderCartItems = 
        cartItems.map(item => 
            <Item
            cartItem = {item}
            removeItem = {removeItem}
            /> 
        )
    
    const [totalPrice, setTotalPrice] = useState (0)

    useEffect (
        () => {
            const sumPrice = cartItems.reduce((sum, item) => item.price * item.quantity + sum, 0)
            setTotalPrice (sumPrice)
        },
        [cartItems]
     )

    return(
        <>
            <StyledCart>
                <h3>Carrinho</h3>
                {renderCartItems}
                <p> Total: R$ {totalPrice},00</p>
            </StyledCart>
        </>
    );
}