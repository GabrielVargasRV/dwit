import {db} from '../firebase/index';

const getProductById = async (id,callback) => {
    let response = null;
    if(!id) return response;

    let ref = await db.collection('items').doc(id);
    let snapshot = await ref.get();

    if(snapshot.exists) {
        response = {id: snapshot.id, ...snapshot.data()};
    }

    if(callback) callback(response);
    return response;
}


export default getProductById;