import React, { useState, useEffect,useContext } from 'react';
import Context from './Context'
import { useGetSubtotal } from '../../hooks/useGetSubtotal'
import {db} from '../../firebase/index'
import UserContext from '../userState/Context'


const getOrders = async (uid,callback) => {
    let orders = []
    const res = await db.collection('orders').where('uid','==',uid).get()
    res.docs.forEach((order,index) => {
        orders.push({id:order.id,...order.data()})
    })
    if(callback) callback(orders)
    return orders
}

const State = (props) => {
    const {user,updateUser} = useContext(UserContext)
    const initialState = {
        cart: [],
        subTotal: 0,
        cartFullInfo: [],
        buyer: null,
        orders:[]
    }
    const [state, setState] = useState(initialState)



    useEffect(() => {
        let cart = window.localStorage.getItem('dwit-cart')
        if (cart) cart = JSON.parse(cart)
        else cart = []
        useGetSubtotal(cart, ({ subTotal, products }) => {
            if(user) {
                getOrders(user.uid,(res) => {
                    console.log(res)
                    setState({
                        ...state,
                        orders: res,
                        cart: cart,
                        subTotal: subTotal,
                        cartFullInfo: products,
                    })
                })
            }else {
                setState({
                    ...state,
                    cart: cart,
                    subTotal: subTotal,
                    cartFullInfo: products,
                })
            }
        })
    }, [user])


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

    const addNewOrder = async (buyer,product,total) => {
        const res = await db.collection('orders').add({
            buyer: {
                ...buyer,
                uid: user.uid,
                name:user.name
            },
            uid: user.uid,
            cart: product,
            total: total,
            state:'processing purchase'
        })

        return res.id
    }

    const clearCart = async () => {
        window.localStorage.removeItem('dwit-cart')
        const newCart = []
        await useGetSubtotal(newCart,({subTotal,products}) => {
            setState({
                ...state,
                cart: newCart,
                subTotal: subTotal,
                cartFullInfo: products
            })
        })

        return
    }

    const payment = async (callback) => {
        const amount = parseFloat(state.subTotal)
        const availableMoney = parseFloat(user.money)
        if(amount > availableMoney) throw new Error({
            errorCode:'invalid amount',
            message:`You don't have enough money for this purchase.`
        })
        let newMoney = user.money - amount
        await db.collection('users').doc(user.uid).update({money:newMoney})
        await updateUser()
        const res = 'SUCCESS'
        if(callback) return callback(res)
        return res
    }

    return <Context.Provider value={{
        ...state,
        addProductToCart,
        setBuyer,
        removeProductFromCart,
        addNewOrder,
        clearCart,
        payment
    }} >
        {props.children}
    </Context.Provider>

}


export default State;
