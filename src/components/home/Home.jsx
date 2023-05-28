import { useEffect, useState } from "react";
import { StyledHome } from "./Home.style"
import Product from "./product/Product"; //esse não vem como props? precisa ser importado?

export default function Home({ setProductList, products, setCartItems, cartItems}) {

    const [selectedOrder, setSelectedOrder] = useState("")
    const [sortedProducts, setSortedProducts] = useState([])

    const applySort = (event) => {
        setSelectedOrder(event.target.value)
    }

    useEffect( () => {
        const sortingProducts = [...products]
        switch (selectedOrder) {
            case "az":
                sortingProducts.sort((a, b) => a.name > b.name ? 1 : -1);
                break;
            case "za":
                sortingProducts.sort((a, b) => a.name < b.name ? 1 : -1);
                break;
            case "asc":
                sortingProducts.sort((a, b) => Number(a.price) - Number(b.price));
                break;
            case "desc":
                sortingProducts.sort((a, b) => Number(b.price) - Number(a.price));
                break;
        }
        setSortedProducts(sortingProducts)
    },
        [selectedOrder, products]
    )

    const renderList = sortedProducts.map(
        product => 
        <>
            <Product
            product={product} 
            setCartItems = {setCartItems}
            cartItems ={cartItems}
            />
        </>
    )

    return (
        <>
            <StyledHome>
                <header>
                    <h3>Quantidade de produtos: {products.length}</h3>
                    <div><label for="order">Ordenar:</label>
                        <select id="order" onChange={applySort}>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                            <option value="asc">Preço crescente</option>
                            <option value="desc">Preço decrescente</option>
                        </select>
                    </div>
                </header>
                {renderList}
            </StyledHome>
        </>
    );

}