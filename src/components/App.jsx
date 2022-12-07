import './App.css';
import Navbar from './navbar/navbar';
import ItemListContainer from "./itemListContainer/itemListContainer";
import ItemDetailContainer from './itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Carrito from './carrito/carrito';
import React from 'react';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
      <Route path='/category/:category' element={<ItemListContainer/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
