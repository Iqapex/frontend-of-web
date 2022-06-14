import React from 'react'
import Front from './Front/Front';
import Product from './Products/Product';

import Story from './Story/Story';
import Companies from './Companies/Companies';
import Footer from './Footer/Footer';
import Tree from "./tree/Tree";
import "./Home.css";


function Home() {
  return (
    <div className='main_home'>
    
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