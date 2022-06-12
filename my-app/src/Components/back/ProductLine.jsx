function classNameName({ product }) {

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
                        {product.price}
                    </div>
                </div>
                <div className="product-line_content_bottom">
                    {product.description}
                </div>
            </div>
            <div className="product-line_buttons">

            </div>
        </li>
    )
}

export default classNameName