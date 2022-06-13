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
import Modal from './Modal';

function Back() {
  const [products, setProducts] = useState(null)
  const [createdData, setCreatedData] = useState(null)
  const [selectedData, setSelectedData] = useState(null)
  const [modalData, setModalData] = useState(null)
  const [lastProductUpdate, setLastProductUpdate] = useState(Date.now())
  const [deleteProduct, setDeleteProduct] = useState(null)

  useEffect(() => {
    if (!selectedData) return


    // axios.delete('http://localhost:3003/admin/products/' + deleteProduct.id)
    //   .then(res => {
    //     setLastProductUpdate(Date.now())
    //     setDeleteProduct(null)
    //   })
  }, [selectedData])

  useEffect(() => {
    if (!deleteProduct) return
    axios.delete('http://localhost:3003/admin/products/' + deleteProduct.id)
      .then(res => {
        setLastProductUpdate(Date.now())
        setDeleteProduct(null)
      })
  }, [deleteProduct])

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
    <BackContext.Provider value={{
      products,
      setCreatedData,
      setDeleteProduct,
      setSelectedData,
      selectedData,
      setModalData

    }}>
      <div className="container">
        <div className="row">
          <Modal></Modal>
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
