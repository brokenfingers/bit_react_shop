import { useContext, useState, useRef } from "react"
import BackContext from "../../Contexts/BackContext"

const empty = {
    title: '',
    price: '',
    code: '',
    description: ''
}

function ProductCreate() {
    const button = useRef()

    const { setCreatedData } = useContext(BackContext)

    const [inputs, setInputs] = useState(empty)

    const handleInputs = (ev, targ) => {
        setInputs(inp => ({ ...inp, [targ]: ev.target.value }))
    }

    const handleSubmit = (e) => {
        console.log(inputs)
        setCreatedData(inputs)
        setInputs(empty)
        button.current.blur()
    }


    return (
        <div className="card">
            <div className="card-header">
                <h2>Naujas produktas</h2>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Pavadinimas</label>
                    <input type="text" className="form-control" onChange={(e) => handleInputs(e, 'title')} />
                </div>
                <div className="form-group">
                    <label>Kaina</label>
                    <input type="text" className="form-control" onChange={(e) => handleInputs(e, 'price')} />
                </div>
                <div className="form-group">
                    <label>Kodas</label>
                    <input type="text" className="form-control" onChange={(e) => handleInputs(e, 'code')} />
                </div>
                <div className="form-group">
                    <label>Aprašymas</label>
                    <input type="text" className="form-control" onChange={(e) => handleInputs(e, 'description')} />
                </div>

                <button ref={button} type="submit" className="btn btn-primary" onClick={handleSubmit}>Sukurti</button>
            </div>
        </div>
    )
}

export default ProductCreate