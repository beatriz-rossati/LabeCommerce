import { StyledItem } from "./Item.style";
export default function Item() {

    return (
        <>
            <StyledItem>
                <span>Produto</span>
                <span>Quantidade: {"2"} <span> + </span> <span> - </span></span>
                <button> Remover </button>
            </StyledItem>
        </>
    );

}