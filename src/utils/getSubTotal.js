import getProductById from './getProductById';

const getSubTotal = async (cart, callback) => {
    if(!cart) return null;
    let subTotal = 0;
    let products = [];
    for(let i = 0; i < cart.length; i++){
        const res = await getProductById(cart[i].id)
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


export default getSubTotal;