import { db } from '../firebase/index'

export const useGetProductsByCategory = async (category, callback,limit) => {
    const items = []
    if (category) {
        if(limit){
            await db.collection('items').where('category', 'array-contains', category).limit(limit).get().then(snapshot => {
                snapshot.docs.forEach((doc) => items.push({ id: doc.id, ...doc.data() }))
            })
        }else{
            await db.collection('items').where('category', 'array-contains', category).get().then(snapshot => {
                snapshot.docs.forEach((doc) => items.push({ id: doc.id, ...doc.data() }))
            })
        }
        return callback(items)
    }
    await db.collection('items').get().then(snapshot => {
        snapshot.forEach(doc => { items.push({ id: doc.id, ...doc.data() }) })
    })

    return callback(items)
}