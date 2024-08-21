import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './Component/product/Product';
import Nav from './Component/NavBar/Nav';
import LandigPage from './Component/landigPage/LandigPage';
import Cart from './Component/cart/Cart';
import Users from './Component/users/Users';
import Photo from './Component/photo/Photo';
import SingleProduct from './Component/product/SingleProduct';
import SingleUser from './Component/users/SingleUser';
import SinglePhoto from './Component/photo/SinglePhoto';

function App() {
  return (
    <div>
      <BrowserRouter >
      <Nav />
      <Routes>
         <Route path='/' element={<LandigPage />} />
        <Route path='/Product' element={<Product />}/>
        <Route path='/Product/:id' element={<SingleProduct />}/>
        <Route path='/photo' element={<Photo />}/>
        <Route path='/photo/:id' element={<SinglePhoto />}/>
        <Route path='/Users' element={<Users />}/>
        <Route path='/Users/:id' element={<SingleUser />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
