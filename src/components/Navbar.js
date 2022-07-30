import React from 'react'
import '../App.css'
import Products from './Products'
const Navbar = (props) => {
  
  return (
    <div className='navbar'>
        <h1>Shopping App</h1>
        <h2>CART:{props.david}</h2>
    </div>
  )
}

export default Navbar