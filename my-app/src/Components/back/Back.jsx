import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import Navbar from './Navbar';
import { useState } from 'react';
import ProductList from './ProductList'
import { useEffect } from 'react';
import axios from 'axios';
function Back() {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:3003/admin/products')
      .then(res => setProducts(res.data))
  }, [])
  return (
    <BackContext.Provider value={{ products }}>
      <div className="container">
        <div className="row">

          <Navbar></Navbar>
          <div className='col-5'>
            Create
          </div>
          <ProductList></ProductList>
        </div>
      </div>
    </BackContext.Provider>
  );
}

export default Back;
