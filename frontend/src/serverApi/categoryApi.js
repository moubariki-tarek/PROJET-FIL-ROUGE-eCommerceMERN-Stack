import axios from 'axios'
import {
    BASE_URL,
    USERS_URL,
    CATEGORY_URL,
    PRODUCT_URL,
    UPLOAD_URL,
    ORDERS_URL,
} from './constants'

export const useFetchCategoriesQuery = async () => {
    return await axios.get(`${BASE_URL}${CATEGORY_URL}/categories`)
}
// export const useGetTopProductsQuery = async () => {
//     return await axios.get(`${BASE_URL}${PRODUCT_URL}/top`)
// } 