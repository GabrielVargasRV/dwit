import {useGetProductById} from './useGetProductById'

export const useGetProductsById = async (IDs,callback) => {
    const products = [];

    for(let i = 0; i < IDs.length; i++){
        const res = await useGetProductById(IDs[i])
        if(res){
            products.push(res)
        }
    } 

    if(callback) callback(products)
    return products
}