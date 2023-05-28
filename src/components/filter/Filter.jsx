import { useState } from "react";
import { StyledFilter } from "./Filter.style"

export default function Filter({ setFilter, maxValue }) {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(maxValue);
    const [textFilter, setTextFilter] = useState("");

    const applyFilter = () => {
        setFilter({ minPrice: Number(minPrice), maxPrice: Number(maxPrice), textFilter: textFilter })
    }

    const clearFilter = () => {
        setMinPrice(0);
        setMaxPrice(maxValue)
        setTextFilter("")
        setFilter({ minPrice: Number(0), maxPrice: Number(maxValue), textFilter: "" })
    }

    return (
        <>
            <StyledFilter>
                <h3>FILTROS</h3>
                <form>
                    <input
                        id="minValueRange"
                        type="range"
                        min="0"
                        max={maxValue}
                        value={minPrice}
                        step="10"
                        onChange={(event) => setMinPrice(event.target.value)}
                    />
                    <p>Valor minimo: {minPrice},00 </p>
                </form>
                <form>
                    <input
                        type="range"
                        min="0"
                        max={maxValue}
                        value={maxPrice}
                        step="10"
                        onChange={(event) => setMaxPrice(event.target.value)}
                    />
                    <p>Valor minimo: {maxPrice},00 <output id="minPrice"></output></p>
                </form>
                <form>
                    <p>Buscar por nome:</p>
                    <input
                        type="text"
                        onChange={(event) => setTextFilter(event.target.value)}
                        value={textFilter}
                    />
                </form>

                <button type="submit" onClick={applyFilter}>Filtrar</button>

                <button type="submit" onClick={clearFilter}>Limpar filtro</button>

            </StyledFilter>
        </>
    );

}