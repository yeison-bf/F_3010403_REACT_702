import axios from "axios"
const url = 'http://localhost:3030/'

// Listar todos los datos
export const GetDataProducts = async () => {
    try {
        const response = await axios.get(url+'products')
        console.log("------------ ",response)
        return response
    } catch (error) {
        return {status: false, message : "Pailas, no tengo la api : ", error}
    }
}

// Listar los datos de un regitro
export const postDataProducts = async (data) => {
    try {
        const response = await axios.post(url+'products', data)
        return response
    } catch (error) {
        return {status: false, message : "Pailas, no tengo la api : ", error}
    }
}