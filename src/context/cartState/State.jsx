import React, { useState, useEffect, useContext } from 'react';
import Context from './Context';
import UserContext from '../userState/Context';
import Cart from '../../apis/cartApi';
import Payment from '../../apis/paymentApi';
import getSubTotal from '../../utils/getSubTotal';

const _cart = new Cart();
const _payment = new Payment();

const State = (props) => {
    const { user, updateUser } = useContext(UserContext)
    const initialState = {
        cart: [],
        subTotal: 0,
        cartFullInfo: [],
        buyer: null,
        orders: [],
        favorites: []
    }
    const [cartLoading, setCartLoading] = useState(true)
    const [state, setState] = useState(initialState)

    const removeProductFromCart = async (idInCart, callback) => {
        _cart.setCart(state.cart)
        await _cart.removeFromCart(idInCart,({cart,cartFullInfo,subTotal}) => {
            console.log(cart)
            setState({...state,cart,subTotal,cartFullInfo});
        });
        const newCart = _cart.getCart();
        if (callback) callback(newCart)
        return newCart
    }

    const addProductToCart = async (productId, productSize, callback) => {
        await _cart.addToCart(productId, productSize,({cart,cartFullInfo,subTotal}) => {
            setState({...state,cart,subTotal,cartFullInfo});
        })
        const newCart = _cart.getCart();
        if (callback) callback(newCart)
        return newCart
    }


    const setBuyer = (buyer) => {
        _payment.setBuyer(buyer)
        setState({...state,buyer: buyer});
    }



    const addToFavorites = (productID, callback) => {
        const newFavorites = [...state.favorites, productID];
        setState({
            ...state,
            favorites: newFavorites
        });
        window.localStorage.setItem('dwit-favorites', JSON.stringify(newFavorites));
        if (callback) callback(newFavorites);
        return newFavorites;
    }

    const removeFromFavorites = (productID, callback) => {
        const newFavorites = state.favorites.filter(favorite => favorite !== productID);
        setState({
            ...state,
            favorites: newFavorites
        });
        window.localStorage.setItem('dwit-favorites', JSON.stringify(newFavorites));
        if (callback) callback(newFavorites);
        return newFavorites;
    }

    const addNewOrder = async (product, total) => {
        const response = await _payment.addNewOrder(product, total, user);
        await updateUser();
        return response;
    }

    const clearCart = async () => {
        const response = await _cart.clearCart();
        return response;
    }

    const payment = async (callback) => {
        const amount = parseFloat(state.subTotal)
        const res = await _payment.pay({...user,updateUser},amount);
        if (callback) return callback(res)
        return res
    }

    const cancelOrder = async (orderID, callback) => {
        await _payment.cancelOrder(orderID)
        if (user.uid) {
            let newOrders = await _payment.getOrders(user.uid);
            setState({
                ...state,
                orders: newOrders
            });
        }

        if (callback) callback();
        return
    }
    
    const init = async () => {
        let favorites = window.localStorage.getItem('dwit-favorites')
        if (favorites) favorites = JSON.parse(favorites)
        else favorites = []
        const cart = _cart.getCart();
        const {subTotal,products} = await getSubTotal(cart);
        const orders = user ? await _payment.getOrders(user.uid) : [];
        setState({
            ...state,
            orders: orders,
            cart: cart,
            subTotal: subTotal,
            cartFullInfo: products,
            favorites: favorites
        })
        setCartLoading(false)
    }

    useEffect(() => {
        init()
    }, [user])

    return <Context.Provider value={{
        ...state,
        cartLoading,
        addProductToCart,
        setBuyer,
        removeProductFromCart,
        addNewOrder,
        clearCart,
        payment,
        cancelOrder,
        addToFavorites,
        removeFromFavorites
    }} >
        {props.children}
    </Context.Provider>

}


export default State;
