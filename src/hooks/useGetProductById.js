import { db } from '../firebase/index'

export const useGetProductById = async (id, callback) => {
    let response = null;
    if(!id) return response
    await db.collection('items').doc(id).get().then(res => {
        if(callback){
            callback({id:res.id,...res.data()})
        }
        response = {id:res.id,...res.data()}
    })

    return response
}