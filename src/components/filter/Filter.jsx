import { useState } from "react";
import { StyledFilter } from "./Filter.style"

export default function Filter({setFilter, maxValue}) {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(maxValue);

    const applyFilter = () => {
        setFilter({minPrice: Number(minPrice), maxPrice: Number(maxPrice) })
        console.log("applyFilter")
        console.log({minPrice: Number(minPrice), maxPrice: Number(maxPrice) })
    }

    return (
        <>
            <StyledFilter>
                <h3>FILTROS</h3>
                <input 
                    type="range"
                    min="0"
                    max={maxValue}
                    step="10"
                    onChange={(event) => setMinPrice(event.target.value)}
                />
                <p>Valor minimo: {minPrice},00 <output id="minPrice"></output></p>

                <input 
                    type="range"
                    min="0"
                    max={maxValue}
                    step="10"
                    onChange={(event) => setMaxPrice(event.target.value)}
                />
                <p>Valor minimo: {maxPrice},00 <output id="minPrice"></output></p>

                <button type="submit" onClick={applyFilter}>Aplicar filtro</button>

            </StyledFilter>
        </>
    );

}