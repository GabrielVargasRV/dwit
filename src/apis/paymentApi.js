import {db} from '../firebase/index';

class Payment {

    constructor(buyer = null){
        this.buyer = buyer;
    }

    setBuyer(buyer){
        this.buyer = buyer;
    }

    async addNewOrder(product, total, user){
        if(!product || !total || !user) return null;
        const buyer = this.buyer;
        const date = Date.now();
        const res = await db.collection('orders').add({
            buyer: {
                ...buyer,
                uid: user.uid,
                name: user.name
            },
            uid: user.uid,
            cart: product,
            total: total,
            status: 'processing purchase',
            date: date
        });

        return res.id;
    }

    async getOrders(uid,callback){
        if(!uid) return null;

        let orders = [];
        const res = await db.collection('orders').where('uid', '==', uid).orderBy('date','desc').get();
        
        res.docs.forEach((order,index) => {
            orders.push({id: order.id, ...order.data()});
        })

        if(callback) callback(orders);
        return orders;
    }

    async cancelOrder(orderID, callback) {
        if(!orderID) return null;

        let isDelivered = false;

        //Check if the order is not delivered yet
        await db.collection('orders').doc(orderID).get().then((res) => {
            if (res.exists && res.data().status === 'delivered') isDelivered = true;
        })

        //cancel the order if it's no delivered
        if (!isDelivered) {
            await db.collection('orders').doc(orderID).update({ status: 'canceled' });
        }

        if (callback) callback();
        return
    }


    async pay(user,amount,product,callback){
        const availableMoney = parseFloat(user.money);

        if(amount > availableMoney) throw new Error({
            errorCode: 'invalid amount',
            message: `You don't have enough money for this purchase.`
        })

        let newMoney = user.money - amount;
        await db.collection('users').doc(user.uid).update({ money: newMoney });
        await user.updateUser();
        await this.addNewOrder(product,amount);
        const res = 'SUCCESS';
        if (callback) return callback(res);
        return res;
    }
}

export default Payment;