import { useEffect, useState } from 'react'
import Home from './components/home/Home'
import Cart from './components/cart/Cart'
import Filter from './components/filter/Filter'
import { GlobalStyle } from './GlobalStyle'
import getProductList from './assets/productList'

function App() {

  const [filter, setFilter] = useState({ minPrice: null, maxPrice: null })

  const [productList, setProductList] = useState(getProductList())
  //.sort((a, b) => a.name > b.name ? 1 : -1)
  const [maxValue] = useState(Math.max( ...getProductList().map((product) => product.price) ))

  useEffect(() => {
    console.log(filter)
    console.log(getProductList())
    let filteredList = [...getProductList()]
    if (filter.minPrice) {
      filteredList = filteredList.filter((product) => product.price > filter.minPrice)
    }
    if (filter.maxPrice) {
      filteredList = filteredList.filter((product) => product.price < filter.maxPrice)
    }
    setProductList(filteredList)

  }, [filter])


  return (
    <main>
      <GlobalStyle />
      <Filter
        setFilter={setFilter}
        maxValue={maxValue+10}
      />
      <Home
        //filter = {filter}
        setProductList={setProductList}
        products={productList}
      />
      <Cart />
    </main>

  )
}

export default App
