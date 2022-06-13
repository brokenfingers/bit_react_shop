import { useContext } from "react"
import BackContext from "../../Contexts/BackContext"

function ProductLine({ product }) {

    const { setDeleteProduct } = useContext(BackContext)

    return (
        <li className='list-group-item'>
            <div className="product-line_content">
                <div className="product-line_content_top">
                    <div className="product-line_image">
                        <img src="https://picsum.photos/200/300" alt='random generated' />
                    </div>
                    <div className="product-line_title">
                        {product.title}
                    </div>
                    <div className="product-line_code">
                        {product.code}
                    </div>
                    <div className="product-line_price">
                        {product.price.toFixed(2) + 'EUR'}
                    </div>
                </div>
                <div className="product-line_content_bottom">
                    {product.description.slice(0, 80) + '...'}
                </div>
            </div>
            <div className="product-line_buttons">
                <button type="button" className="btn btn-success me-2">Redaguoti</button>
                <button type="button" className="btn btn-danger" onClick={() => setDeleteProduct(product)}>Trinti</button>
            </div>
        </li>
    )
}

export default ProductLine