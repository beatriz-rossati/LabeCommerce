import {StyledCart} from "./Cart.style"
import Item from "./Item";
export default function Home() {

    return(
        <>
            <StyledCart>
                <h3>CARRINHO</h3>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <label>Valor total: {12}</label>
            </StyledCart>
        </>
    );
}