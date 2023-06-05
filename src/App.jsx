import { Routes, Route } from 'react-router-dom'
import Index from './components/sites'
import Cart from './components/sites/Cart'
import { useState } from 'react'

function App() {

    const [cart, setCart] = useState([])

    function addToCart(id) {
        setCart(prevCart => {
            return [id, ...prevCart]
        })
    }
    console.log(cart);

    return (
        // <>
        // <Navbar />
        // <Slideshow />
        // <Cards contentSection={content.bestseller} id={"bestsellers"}/>
        // <Cards contentSection={content.new} id={"new-games"}/>
        // <Gallery />
        // <Feedback />
        // <Imprint />
        // <Footer />
        // </>

        <Routes>
            <Route path='/' element={<Index addToCart={addToCart}/>} />
            <Route path='/cart' element={<Cart cartItems={cart}/>} />
        </Routes>
    )
}

export default App
