import axios from "axios";

export function getProducts(params={}){
    return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`,{
        params : {
            page: params.page,
            limit : params.limit
        }
    })
}