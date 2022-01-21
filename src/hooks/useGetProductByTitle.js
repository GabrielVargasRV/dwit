import {db} from '../firebase/index'

export const useGetProductByTitle = async (title,callback) => {
    let products = []
    const res = await db.collection('items').where("title",">=",title).get()
    res.docs.forEach((doc) => products.push({id:doc.id,...doc.data()}))
    if(callback)callback(products)
    return products
}