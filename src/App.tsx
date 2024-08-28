import './App.scss'

import { Routes, Route } from 'react-router-dom';

import Catalog from './components/catalog/Catalog';

import SingleProduct from './components/singleProduct/SingleProduct';


function App() {

  return (
    <>
      <Routes>
        <Route path='/ecosystems-alpha/' element={<Catalog />} />
        <Route path='/ecosystems-alpha/product/:id' element={<SingleProduct />} />
      </Routes>
    </>
  )
}

export default App
