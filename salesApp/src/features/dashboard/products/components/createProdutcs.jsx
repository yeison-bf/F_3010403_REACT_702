import React, { useState } from "react";
import { postDataProducts } from "../services/serives.products";
import { useNavigate } from "react-router-dom";

export const CreateProdutcs = () => {

    const navigate = useNavigate()
    // Objeto de recolección de datos
    const [formData, setFormData] = useState({
        name: "",
        count: "",
        price: "",
    });




    // Funci´pn para recolectar los datos
    const changeData = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        const response = await postDataProducts(formData)
        console.log(response)

        if(response){
            navigate('/home/products')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Nombre del producto
                    </label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={changeData}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                    />
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Cantidad
                            </label>
                            <input
                                name="count"
                                value={formData.count}
                                onChange={changeData}
                                type="number"
                                className="form-control"
                                id="exampleFormControlInput1"
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Precio
                            </label>
                            <input
                                name="price"
                                value={formData.price}
                                onChange={changeData}
                                type="number"
                                className="form-control"
                                id="exampleFormControlInput1"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <input
                        type="submit"
                        value="Guardar"
                        className="btn btn-primary col-12"
                        id="exampleFormControlInput1"
                    />
                </div>
            </form>
        </>
    );
};
