import axios from 'axios'
import {
    BASE_URL,
    USERS_URL,
    CATEGORY_URL,
    PRODUCT_URL,
    UPLOAD_URL,
    ORDERS_URL,
} from './constants'

export const useGetProductsQuery = async () => {
    return await axios.get(`${BASE_URL}${PRODUCT_URL}`)
}
export const useGetTopProductsQuery = async () => {
    return await axios.get(`${BASE_URL}${PRODUCT_URL}/top`)
}
export const useGetProductDetailsQuery = async (productId) => {
    return await axios.get(`${BASE_URL}${PRODUCT_URL}/${productId}`)
} 