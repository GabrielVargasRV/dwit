import {db} from '../firebase/index';
import Cart from "./cart.services";
import UserServices from "./user.services";
import store from "../redux/store";

class Payment {

    constructor(buyer = null){
        this.buyer = buyer;
    }

    setBuyer(buyer){
        this.buyer = buyer;
        store.dispatch({type:"SET_BUYER",content: buyer});
    }

    async addNewOrder(products, total, user){
        if(!products || !total || !user) return null;
        const buyer = this.buyer;
        const date = Date.now();
        const res = await db.collection('orders').add({
            buyer: {
                ...buyer,
                uid: user.uid,
                name: user.name
            },
            uid: user.uid,
            cart: products,
            total: total,
            status: 'processing purchase',
            date: date
        });

        UserServices.update();

        return res.id;
    }

    async getOrders(uid,callback){
        if(!uid) return null;

        let orders = [];
        const res = await db.collection('orders').where('uid', '==', uid).orderBy('date','desc').get();
        
        res.docs.forEach((order,index) => {
            orders.push({id: order.id, ...order.data()});
        })

        store.dispatch({type: "SET_ORDERS",content: orders});

        if(callback) callback(orders);
        return orders;
    }

    async cancelOrder(orderID, callback) {
        if(!orderID || !store.getState().user) return null;

        let isDelivered = false;

        //Check if the order is not delivered yet
        await db.collection('orders').doc(orderID).get().then((res) => {
            if (res.exists && res.data().status === 'delivered') isDelivered = true;
        })

        //cancel the order if it's no delivered
        if (!isDelivered) {
            await db.collection('orders').doc(orderID).update({ status: 'canceled' });
        }

        //get orders
        let newOrders = await this.getOrders(store.getState().user.uid);
        store.dispatch({type:"SET_ODERS",content: newOrders});

        if (callback) callback(newOrders);
        return newOrders;
    }


    async pay(user,amount,products,callback){
        let res = null;

        try{
            const availableMoney = parseFloat(user.money);
    
            if(amount > availableMoney) throw new Error({
                errorCode: 'invalid amount',
                message: `You don't have enough money for this purchase.`
            })
    
            let newMoney = user.money - amount;
            await db.collection('users').doc(user.uid).update({ money: newMoney });
            await this.addNewOrder(products,amount,user);
            await Cart.clearCart();
            res = 'SUCCESS';
        }catch(error){
            res = null;
        }
        if (callback) callback(res);
        return res;
    }
}

const payment = new Payment();
export default payment;