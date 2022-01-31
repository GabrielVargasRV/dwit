//@ts-check
import Cart from './cartApi';

class Products{

    constructor(){
        this._cart = new Cart();
        this.cart = this._cart.getCart();
        let favorites = window.localStorage.getItem('dwit-favorites');

        if(favorites) this.favorites = JSON.parse(favorites);
        else this.favorites = [];
    }

    async removeFromCart(id,callback = null){
        const response = await this._cart.removeFromCart(id,callback);
        return response;
    }

    async addToCart(productId,productSize,callback = null){
        const response = await this._cart.addToCart(productId,productSize,callback);
        return response;
    }

};


export default Products;