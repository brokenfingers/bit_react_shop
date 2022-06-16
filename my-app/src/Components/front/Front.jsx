import TopBar from "./TopBar";
import '../../front.scss'
import Products from "./Products";
import FrontContext from "../../Contexts/FrontContext";
import { useReducer } from "react";
import productReducer from "../../Reducers/productReducer";
import Loader from "./Loader";

// import '../../bootstrap.css';

function Front() {
  const [products, dp] = useReducer(productReducer, null)
  return (
    <FrontContext.Provider value={{}}>

      <div id='shop'>
        <div className="shop-holder">
          <TopBar></TopBar>
          {
            products ? <Products></Products> : <Loader></Loader>
          }

        </div>
      </div>

    </FrontContext.Provider>
  );
}

export default Front;
