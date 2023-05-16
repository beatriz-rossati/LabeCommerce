import { useState } from "react";
import { StyledHome } from "./Home.style"
import Product from "./Product";

export default function Home({ products }) {

    const [list, setList] = useState(products.sort((a, b) => a.name > b.name ? 1 : -1));

    const applySort = (event) => {

        const sortedProducts = [...list]
        const selectedOption = event.target.value

        switch (selectedOption) {
            case "az":
                sortedProducts.sort((a, b) => a.name > b.name ? 1 : -1);
                break;
            case "za":
                sortedProducts.sort((a, b) => a.name < b.name ? 1 : -1);
                break;
            case "asc":
                sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
                break;
            case "desc":
                sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
                break;
        }
        setList([...sortedProducts]);
    }

    const rendeList = list.map(
        product => <>
            <Product product={product} />
        </>
    )


    return (
        <>
            <StyledHome>
                <header>
                    <h3>Quantidade de produtos</h3>
                    <div><label for="order">Ordenar:</label>
                        <select id="order" onChange={applySort} onLoad={applySort}>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                            <option value="asc">Preço crescente</option>
                            <option value="desc">Preço decrescente</option>
                        </select>
                    </div>
                </header>
                {rendeList}
            </StyledHome>
        </>
    );

}