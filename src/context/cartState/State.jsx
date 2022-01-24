import React, { useState, useEffect } from 'react';
import Context from './Context'
import { useGetSubtotal } from '../../hooks/useGetSubtotal'

const State = (props) => {
    const initialState = {
        cart: [],
        subTotal: 0,
        cartFullInfo: [],
        buyer: null,
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
                cartFullInfo: products,
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

    return <Context.Provider value={{
        ...state,
        addProductToCart,
        setBuyer,
        removeProductFromCart,
    }} >
        {props.children}
    </Context.Provider>

}


export default State;
