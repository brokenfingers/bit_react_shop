import { useContext } from 'react'
import { useState, useRef, useEffect } from 'react'
import BackContext from '../../Contexts/BackContext'
import getBase64 from '../../Functions/getBase64'

const empty = {
    title: '',
    price: '',
    code: '',
    description: '',
    photo: ''
}

function Modal() {



    const { selectedData, setModalData, setSelectedData } = useContext(BackContext)
    const [inputs, setInputs] = useState(empty)
    const save = useRef()
    const fileInputModal = useRef()
    const handleInputs = (ev, targ) => {
        setInputs(inp => ({ ...inp, [targ]: ev.target.value }))
    }
    useEffect(() => {
        if (!selectedData) return
        setInputs(selectedData)
    }, [selectedData])


    const closeModal = () => {
        setSelectedData(null)
    }



    const inputFileChange = () => {
        const file = fileInputModal.current.files[0]
        if (file) {
            getBase64(file).then(photo => {
                setInputs(data => ({ ...data, photo }))
            })
            // fileInputModal.current.value = null;
        }
    }

    const handleSave = () => {
        setModalData(data => ({ ...inputs, photo: inputs.photo || null }))
        closeModal()
    }



    return (
        <div className={'modal ' + (selectedData ? 'visible' : '')} tabIndex="1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Redaguoti produkta</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">

                        <div className="card-body">
                            <div className="form-group">
                                <label>Pavadinimas</label>
                                <input type="text" className="form-control" value={inputs.title} onChange={(e) => handleInputs(e, 'title')} />
                            </div>
                            <div className="form-group">
                                <label>Kaina</label>
                                <input type="text" className="form-control" value={inputs.price} onChange={(e) => handleInputs(e, 'price')} />
                            </div>
                            <div className="form-group">
                                <label>Kodas</label>
                                <input type="text" className="form-control" value={inputs.code} onChange={(e) => handleInputs(e, 'code')} />
                            </div>
                            <div className="form-group">
                                <label>Aprašymas</label>
                                <input type="text" className="form-control" value={inputs.description} onChange={(e) => handleInputs(e, 'description')} />
                            </div>
                            <div className="form-group">
                                <label>Nuotrauka</label>
                                <input type="file" ref={fileInputModal} onChange={inputFileChange} className="form-control custom-file-input" defaultValue={inputs.photo} />
                            </div>
                            <div className="product-line_image">

                                {
                                    inputs.photo && <>
                                        <img src={inputs.photo} alt={inputs.title} />
                                        <button type="button" className="btn btn-danger" onClick={() => setInputs(data => ({ ...data, photo: null }))}>Ištrinti nuotrauką</button>
                                    </>
                                }
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                        <button ref={save} type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal