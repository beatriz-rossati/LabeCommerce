import { StyledProduct, StyledPriceTag, StyledDescription, StyledName } from "./Product.style"

export default function Product({ product, setCartItems, cartItems }) {

    function updateCart (product) {
        const productExist = cartItems.find((item)=> item.id === product.id)
        if (productExist) {
            const updatedCart = cartItems.map(item => 
                item.id=== product.id ? {...item, quantity: item.quantity + 1} : item
             )
            setCartItems (updatedCart)
        }else{
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }

    return (
        <StyledProduct>
                <img src={product.imageUrl} alt="asd"  />
                <StyledName>{product.name}</StyledName>   
                <StyledPriceTag>{`R$ ${product.price},00`}</StyledPriceTag>
            <button onClick={() => updateCart(product)} >Adicionar ao carrinho</button>
        </StyledProduct>
    );

}