import { useState } from 'react'
import Home from './home/Home'
import Cart from './cart/Cart'
import Filter from './filter/Filter'
import {GlobalStyle} from './GlobalStyle'
import getProductList from './assets/productList'

function App() {

  console.log(getProductList());
  const productList = getProductList();

  return (
    <main> 
      <GlobalStyle/>
      <Filter></Filter>
      <Home products = {productList}></Home>
      <Cart></Cart>
    </main>

  )
}

export default App
