import { useEffect, useState } from 'react'
import Home from './components/home/Home'
import Cart from './components/cart/Cart'
import Filter from './components/filter/Filter'
import { GlobalStyle } from './GlobalStyle'
import getProductList from './data/productList'

function App() {

  const [filter, setFilter] = useState({ minPrice: null, maxPrice: null })
  const [productList, setProductList] = useState(getProductList())
  const [cartItems, setCartItems] = useState ([])

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
    if (filter.textFilter) {
      filteredList = filteredList.filter((product) => product.name.includes(filter.textFilter))
    }
    setProductList(filteredList)

  }, [filter])

  const removeItem = (id) => {
    const filteredList = cartItems.filter ((item)=>{
      return item.id !== id
    })
    setCartItems (filteredList)
  }


  return (
    <main>
      <GlobalStyle />
      <Filter
        setFilter={setFilter}
        maxValue={maxValue+10}
      />
      <Home
        setProductList={setProductList}
        products={productList} 
        setCartItems = {setCartItems}
        cartItems = {cartItems}
      />
      <Cart 
      setCartItems = {setCartItems}
      cartItems = {cartItems}
      removeItem = {removeItem}
      />
    </main>

  )
}

export default App
