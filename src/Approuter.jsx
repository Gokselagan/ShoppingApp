import { Shop } from './Pages/Shop'
import { Cart } from './Pages/Cart';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

export const Approuter = () => {

    const [carts, setCarts] = useState([]);

    return (
        <Routes>
            <Route path='/' element={<Shop carts={carts} setCarts={setCarts} />}/>
            <Route path='/cart' element={<Cart  carts={carts} setCarts={setCarts} />}/>
        </Routes>
    )
}