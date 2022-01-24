import React,{useState,useEffect} from 'react';
import Context from './Context';
import {auth,db} from '../../firebase/index'

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
        user: null,
        isLogged: false
    }
    const [state,setState] = useState(initialState)

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

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if(u){
                getUserData(u.uid, (user) => {
                    if(user){
                        setState({
                            ...state,
                            user:user,
                            isLogged: true
                        })
                    }
                })
            }
        })
        return () => unsubscribe()
    },[])

    return(
        <Context.Provider 
            value={{
                ...state,
                login,
                logout,
                logup
            }}
            >
            {props.children}
        </Context.Provider>
    )
}

export default State