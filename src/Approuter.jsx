import { Shop } from './Pages/Shop'
import { Cart } from './Pages/Cart';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

export const Approuter = ({count, setCount}) => {

    const [carts, setCarts] = useState([]);
   

    return (
        <Routes>
            <Route path='/' element={<Shop carts={carts} setCarts={setCarts} count={count} setCount={setCount} />}/>
            <Route path='/cart' element={<Cart  carts={carts} setCarts={setCarts} count={count} setCount={setCount}/>}/>
        </Routes>
    )
}