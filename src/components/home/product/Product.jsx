import { StyledProduct } from "./Product.style"

export default function Product({ product }) {

    return (
        <StyledProduct>
            <figure>
                <img src={product.imageUrl} alt="asd" style={{ width: "180px", height: "100px"}} />
                <p>{product.name}</p>   
                <p>{`R$ ${product.price.toFixed(2)}`}</p>
            </figure>
            <button>Adicionar ao carrinho</button>
        </StyledProduct>
    );

}