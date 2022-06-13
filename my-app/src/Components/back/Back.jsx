import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import Navbar from './Navbar';
import { useState } from 'react';
import ProductList from './ProductList'
import { useEffect } from 'react';
import axios from 'axios';
import ProductCreate from './ProductCreate';

function Back() {
  const [products, setProducts] = useState(null)
  const [createdData, setCreatedData] = useState(null)

  useEffect(() => {
    if (!createdData) return

    console.log(createdData)
    axios.post('http://localhost:3003/admin/products', JSON.stringify(createdData))
      .then(res => console.log(res.data))
  }, [createdData])

  useEffect(() => {
    axios.get('http://localhost:3003/admin/products')
      .then(res => setProducts(res.data))
  }, [])
  return (
    <BackContext.Provider value={{ products, setCreatedData }}>
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
