import { useContext } from "react"
import BackContext from "../../Contexts/BackContext"
import Loader from './Loader'
import ProductLine from './ProductLine'
import ProductLineEmpty from './ProductLineEmpty'

function ProductList() {
    const { products } = useContext(BackContext)
    return (
        <div className='col-7'>
            <div className="card">
                <div className="card-header">
                    <h2>Produktų sarašas</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            products === null ? <Loader /> :
                                products.length ? products.map(p => <ProductLine key={p.id} product={p}></ProductLine>) : <ProductLineEmpty />

                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductList