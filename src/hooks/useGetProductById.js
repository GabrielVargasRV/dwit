import { db } from '../firebase/index'

export const useGetProductById = async (id, callback) => {
    let response = null;
    if(!id) return response
    await db.collection('items').doc(id).get().then(res => {
        if(callback){
            callback(res.data())
        }
        response = res.data()
    })

    return response
}