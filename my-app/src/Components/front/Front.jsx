import '../../bootstrap.css';

import TopBar from "./TopBar";
import '../../front.scss'
import Products from "./Products";
import FrontContext from "../../Contexts/FrontContext";
import { useReducer } from "react";
import productReducer from "../../Reducers/productReducer";
import Loader from "./Loader";
import { useEffect } from "react";
import axios from "axios";
import getProductsFromServer from "../../Actions/products";

// import '../../bootstrap.css';

function Front() {
  const [products, dp] = useReducer(productReducer, null)

  useEffect(() => {
    axios.get('http://localhost:3003/products')
      .then(resp => dp(getProductsFromServer(resp.data)))
    // .then(resp => console.log('ssss'))
  }, [])
  return (
    <FrontContext.Provider value={{ products }}>

      <div id='shop'>
        <div className="shop-holder">
          <TopBar></TopBar>
          {
            products ? <Products products={products}></Products> : <Loader></Loader>
          }

        </div>
      </div>

    </FrontContext.Provider>
  );
}

export default Front;
