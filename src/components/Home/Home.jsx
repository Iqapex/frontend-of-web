import React from 'react'
import Front from './Front/Front';
import Product from './Products/Product';
/* import Domain from './Domains/Domain'; */
import Story from './Story/Story';
import Companies from './Companies/Companies';
import Footer from './Footer/Footer';
import Tree from "./tree/Tree"


function Home() {
  return (
    <div>
    
      <Front/>
      <Tree/>
      <Product/>
      <Story/>
      <Companies/>
      <Footer/>
    </div>
  )
}

export default Home;