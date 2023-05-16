import {StyledFilter} from "./Filter.style"
export default function Home() {

    return(
        <>
            <StyledFilter>
                <h3>FILTROS</h3>
                <input type="range" id="price" name="price" min="200" max="3000" step="50"/>
                        <p>Valor: <output id="value"></output></p>
            </StyledFilter>
        </>
    );

}