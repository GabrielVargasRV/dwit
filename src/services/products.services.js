//@ts-check
import { db } from "../firebase/index";

class Products{
    async getById(id,callback){
        let response = null;
        if(!id) return response;

        await db.collection('items').doc(id).get().then((snapshot) => {
            if(callback){
                callback({id: snapshot.id,...snapshot.data()});
            }
            response = {id: snapshot.id,...snapshot.data()};
        })
        return response;
    }

    async getByIds(ids,callback){
        const products = [];
        for(let id of ids){
            const res = await this.getById(id);
            if(res) products.push(res);
        }

        if(callback) callback(products);
        return products;
    }

    async getByTitle(title,callback){
        let products = [];
        const res = await db.collection('items').where("title",">=",title).get();
        res.docs.forEach((doc) => products.push({id:doc.id,...doc.data()}));
        if(callback) callback(products);
        return products;
    }

    async getByCategory(category,callback,limit){
        const items = [];
        if(category){
            if(limit){
                await db.collection('items').where('category','array-contains', category).limit(limit).get().then((snapshot) => {
                    snapshot.docs.forEach((doc) => items.push({id: doc.id,...doc.data()}));
                })
            }else{
               await db.collection('items').where('category', 'array-contains', category).get().then(snapshot => {
                    snapshot.docs.forEach((doc) => items.push({ id: doc.id, ...doc.data() }))
                });
            }
            
            if(callback) callback(items);
            return items;
        }

        await db.collection('items').get().then((snapshot) => {
            snapshot.forEach((doc) => items.push({id: doc.id,...doc.data()}));
        });

        if(callback) callback(items);
        return items;
    }

    async getSubTotal(cart, callback){
        if(!cart) return null;
        let subTotal = 0;
        let products = [];
        for(let i = 0; i < cart.length; i++){
            const res = await this.getById(cart[i].id)
            if(res){
                let price = res.sizes.filter((e) => e.size === cart[i].size)[0].price;
                price = parseFloat(price);
                subTotal += price;
                products.push({
                    ...res,
                    size: cart[i].size,
                    price: price
                });
            };
        }

        if(callback) callback({subTotal,products})

        return {subTotal,products}
    }
};

const products = new Products();

export default products;