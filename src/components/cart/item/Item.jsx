import { StyledItem, StyledItemName } from "./Item.style";
export default function Item({cartItem, removeItem}) {

    return (
        <>
            <StyledItem>
                <StyledItemName>{cartItem.name}</StyledItemName>
                <span>Quantidade: {cartItem.quantity} </span>
                <span>{`R$ ${cartItem.price.toFixed(2)}`}</span>
                <button onClick ={() => removeItem(cartItem.id)}> Excluir Produto </button>
            </StyledItem>
        </>
    );

}