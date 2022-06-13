import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import Navbar from './Navbar';
import { useState } from 'react';
import ProductList from './ProductList'
import { useEffect } from 'react';
import axios from 'axios';
import ProductCreate from './ProductCreate';
import { useRef } from 'react';

function Back() {
  const [products, setProducts] = useState(null)
  const [createdData, setCreatedData] = useState(null)
  const [lastProductUpdate, setLastProductUpdate] = useState(Date.now())


  useEffect(() => {
    if (!createdData) return
    axios.post('http://localhost:3003/admin/products', createdData)
      .then(res => {
        setLastProductUpdate(Date.now())
        setCreatedData(null)
      })
  }, [createdData])


  useEffect(() => {
    axios.get('http://localhost:3003/admin/products')
      .then(res => setProducts(res.data))
  }, [lastProductUpdate])

  return (
    <BackContext.Provider value={{ products, setCreatedData, setProducts }}>
      <div className="container">
        <div className="row">

          <Navbar></Navbar>
          <div className='col-5'>
            <ProductCreate></ProductCreate>
          </div>
          <ProductList></ProductList>
        </div>
      </div>
    </BackContext.Provider>
  );
}

export default Back;
