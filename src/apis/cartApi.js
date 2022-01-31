import getSubTotal from "../utils/getSubTotal";

class Cart {
    constructor(){
        let cart = window.localStorage.getItem('dwit-cart');
        if(cart) this.cart = JSON.parse(cart);
        else this.cart = [];
    }

    getCart(){
        return this.cart;
    } 

    setCart(newCart){
        if(!newCart) return;
        this.cart = newCart;
        window.localStorage.setItem('dwit-cart', JSON.stringify(newCart));
        return this.cart;
    }

    async clearCart(){
        this.setCart([]);
        let {products, subTotal} = await getSubTotal(this.cart);
        const response = {cart: this.getCart(), cartFullInfo: products, subTotal};
        return response;
    }

    async removeFromCart(id, callback){
        let newCart = this.cart.filter((product) => product.idInCart !== id);
        this.setCart(newCart);
        let {products, subTotal} = await getSubTotal(newCart);
        const response = {cart: newCart, cartFullInfo: products, subTotal};
        
        if(callback) callback({cart: newCart, cartFullInfo: products, subTotal});
        return response;
    }

    async addToCart(productID, productSize,callback = null){
        const date = Date.now();
        const newCart = [...this.getCart(), {id: productID, size: productSize, idInCart: `${productID}-${productSize}-${date}`}];
        this.setCart(newCart);

        let {products, subTotal} = await getSubTotal(newCart);

        const response = {cart: this.getCart(), cartFullInfo: products, subTotal};

        if(callback) callback(response);
        return response;        
    }
}


export default Cart;