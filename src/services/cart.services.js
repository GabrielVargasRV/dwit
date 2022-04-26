import { v4 as uuidv4 } from 'uuid';
import store from "../redux/store";
import Payment from "./payment.services";
import ProductsServices from "./products.services";

class Cart {
    constructor(){
        this.cart = [];
        this.favorites = [];
        this.subTotal = 0;

        this.init();
    }

    init(){
        //get cart from local storage
        let cart = window.localStorage.getItem('dwit-cart');
        if(cart) this.cart = JSON.parse(cart);
        //get favorites from local storage
        let favorites = window.localStorage.getItem('dwit-favorites');
        if(favorites) this.favorites = JSON.parse(favorites);

        store.dispatch({type: "SET_FAVORITES",content: this.favorites});
        store.dispatch({type: "SET_CART",content: this.cart});

        ProductsServices.getSubTotal(this.cart,({subTotal,products}) => {
            store.dispatch({type: "SET_FULLCART",content: products});
            store.dispatch({type: "SET_SUBTOTAL",content: subTotal});
        });
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
        let {products, subTotal} = await ProductsServices.getSubTotal(this.cart);
        const response = {cart: this.getCart(), cartFullInfo: products, subTotal};
        store.dispatch({type: "SET_CART",content:[]});
        store.dispatch({type: "SET_FULLCART",content:[]});
        return response;
    }

    async removeFromCart(id, callback){
        let newCart = this.cart.filter((product) => product.idInCart !== id);
        this.setCart(newCart);
        let {products, subTotal} = await ProductsServices.getSubTotal(newCart);
        const response = {cart: newCart, cartFullInfo: products, subTotal};
        
        store.dispatch({type: "SET_SUBTOTAL",content: subTotal});
        store.dispatch({type: "SET_FULLCART",content: response.cartFullInfo});
        store.dispatch({type: "SET_CART",content: response.cart});

        if(callback) callback({cart: newCart, cartFullInfo: products, subTotal});
        return response;
    }

    addToFavorites(productId,callback){
        const newFavorites = [...this.favorites,productId];
        this.favorites = newFavorites;
        window.localStorage.setItem('dwit-favorites',JSON.stringify(newFavorites));
        /*set state of new favorites*/
        store.dispatch({type: "SET_FAVORITES",content: newFavorites});
        if(callback) callback(newFavorites);
        return newFavorites;
    }

    removeFromFavorites(productID,callback) {
        const newFavorites = this.favorites.filter(favorite => favorite !== productID);
        this.favorites = newFavorites;
        window.localStorage.setItem('dwit-favorites',JSON.stringify(newFavorites));
        /*set state of new favorites*/
        store.dispatch({type:'SET_FAVORITES',content: newFavorites});
        if(callback) callback(newFavorites);
        return newFavorites;
    }

    async addToCart(productID, productSize,callback = null){
        let newProduct = {
            id: productID,
            size: productSize,
            idInCart: uuidv4(),
        }
        const newCart = [...this.getCart(), newProduct];
        this.setCart(newCart);
        store.dispatch({type:'SET_CART',content: newCart}); 

        let {products, subTotal} = await ProductsServices.getSubTotal(newCart);
        store.dispatch({type: "SET_SUBTOTAL",content: subTotal});
        store.dispatch({type: "SET_FULLCART",content: products});

        if(callback) callback(newCart);
        return newCart;        
    }

    async payment(callback){
        const user = store.getState().user;
        const updateUser = store.getState().updateUser;
        const amount = parseFloat(this.subtotal);
        const response = await Payment.pay({...user,updateUser},amount);
        if(callback) callback(response);
        return response;
    }
}

const cart = new Cart();

export default cart;