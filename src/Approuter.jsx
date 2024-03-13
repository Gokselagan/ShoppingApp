import { Shop } from './Pages/Shop'
import { Cart } from './Pages/Cart';
import { Routes, Route } from 'react-router-dom';

export const Approuter = () => {
    return (
        <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
    )
}