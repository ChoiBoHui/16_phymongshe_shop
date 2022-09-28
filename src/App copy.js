import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import Cart from './shop/Cart';
import Itm from './shop/Itm';
import List from './shop/List';
//https://desipossa.github.io/shop_cra/assets/data.json
const App = () => {
    const [cart, addCart] = useState([]);

    return (
        <>
            <Header cart={cart} />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/cart' element={<Cart cart={cart} addCart={addCart} />} />
                <Route path='/itm/:url' element={<Itm cart={cart} addCart={addCart} />} />
            </Routes>
            <List />

            <Footer />
        </>
    )
}

export default App