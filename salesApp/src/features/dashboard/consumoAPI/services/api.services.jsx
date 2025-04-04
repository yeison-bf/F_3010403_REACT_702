import axios from "axios"

// Listar todos los datos
export const GetDataApi = async () => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/')
        return response
    } catch (error) {
        return {status: false, message : "Pailas, no tengo la api : ", error}
    }
}

// Listar los datos de un regitro
export const GetOneDataApi = async (id) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/'+id)
        return response
    } catch (error) {
        return {status: false, message : "Pailas, no tengo la api : ", error}
    }
}