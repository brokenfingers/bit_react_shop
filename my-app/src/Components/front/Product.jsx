import { useState } from "react"

function Product({ product }) {
    const [count, setCount] = useState(0)

    return (

        <div className='product'>
            <div className='product_top'>
                <h2>{product.title}</h2>
                <p>{product.code}</p>

            </div>
            <div className='product_middle'>
                <img src={product.photo || './no-image.jpg'} alt={product.title} />
                <p>{product.description}</p>
            </div>
            <div className='product_bottom'>
                <button type="button" className="btn btn-success" >BUY</button>
                <input type="number" value={count} min='0' onChange={(e) => setCount(e.target.value)} />
                <h3>{product.price.toFixed(2) + 'EUR'}</h3>
            </div>

        </div>

    )
}
export default Product