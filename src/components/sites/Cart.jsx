import React from 'react'
import Navbar from '../navbar'
import CartComponent from '../CartComponent'

function Cart({cartItems}) {
    return (
        <>
        <Navbar />
        <CartComponent cartItems={cartItems}/>
        </>
    )
}

export default Cart