import React, { useState, useEffect } from 'react';
import Context from './Context'
import { useGetSubtotal } from '../hooks/useGetSubtotal'
import { auth, db } from '../firebase/index'

const getUserData = async (uid, callback) => {
    const res = await db.collection('users').doc(uid).get()
    if (callback) callback(res.data())
    return res.data()
}

const setUserData = async (user, callback) => {
    await db.collection('users').doc(user.uid).set(user)
    const res = await getUserData(user.uid)
    if (callback) callback(res)
    return res
}

const State = (props) => {
    const initialState = {
        cart: [],
        subTotal: 0,
        cartFullInfo: [],
        buyer: null,
        notifications: [],
        isLogged: false,
        user: null
    }
    const [state, setState] = useState(initialState)


    useEffect(() => {

        let cart = window.localStorage.getItem('dwit-cart')
        if (cart) cart = JSON.parse(cart)
        else cart = []
        useGetSubtotal(cart, ({ subTotal, products }) => {
            setState({
                ...state,
                cart: cart,
                subTotal: subTotal,
                cartFullInfo: products
            })
            auth.onAuthStateChanged((u) => {
                if (u) {
                    getUserData(u.uid, (user) => {
                        if (user) {
                            setState({
                                ...state,
                                isLogged: true,
                                user: user,
                                cart: cart,
                                subTotal: subTotal,
                                cartFullInfo: products
                            })
                        }
                    })
                }
    
            })
        })

    }, [])


    const removeProductFromCart = (idInCart, callback) => {
        const newCart = state.cart.filter((product) => product.idInCart !== idInCart)
        useGetSubtotal(newCart, ({ subTotal, products }) => {
            setState({
                ...state,
                cart: newCart,
                subTotal: subTotal,
                cartFullInfo: products
            })
        })
        window.localStorage.setItem('dwit-cart', JSON.stringify(newCart))
        if (callback) callback(newCart)
        return newCart
    }

    const setBuyer = (buyer) => {
        setState({
            ...state,
            buyer: buyer
        })
    }


    const addProductToCart = async (productId, productSize, callback) => {
        const date = Date.now()
        const newCart = [...state.cart, { id: productId, size: productSize, idInCart: `${productId}-${productSize}-${date}` }]
        await useGetSubtotal(newCart, ({ subTotal, products }) => {
            setState({
                ...state,
                cart: newCart,
                subTotal: subTotal,
                cartFullInfo: products
            })
        })
        window.localStorage.setItem('dwit-cart', JSON.stringify(newCart))
        if (callback) callback(newCart)
        return newCart
    }

    const login = async (user) => {
        let res = await getUserData(user.uid)
        if (!res) res = await setUserData(user)
        setState({
            ...state,
            user: res,
            isLogged: true
        })
    }

    const logup = async (user) => {
        const res = setUserData(user)
        setState({
            ...state,
            user: res,
            isLogged: true
        })
    }

    const logout = () => {
        setState({
            ...state,
            isLogged:false,
            user:null
        })
        auth.signOut()
    }

    return <Context.Provider value={{
        ...state,
        addProductToCart,
        setBuyer,
        removeProductFromCart,
        login,
        logup,
        logout
    }} >
        {props.children}
    </Context.Provider>

}


export default State;
