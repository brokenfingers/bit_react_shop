import TopBar from "./TopBar";
import '../../front.scss'
import Products from "./Products";

// import '../../bootstrap.css';
function Front() {
  return (
    <div id='shop'>
      <div className="shop-holder">
        <TopBar></TopBar>
        <Products></Products>
      </div>
    </div>
  );
}

export default Front;
