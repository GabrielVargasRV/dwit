import React, { useState, useEffect } from 'react'
import Context from './Context'
import { auth } from '../../firebase/index'
import User from '../../apis/userApi';


const _user = new User();

const State = (props) => {
    const initialState = {
        user: null,
        isLogged: false
    }
    const [state, setState] = useState(initialState)

    const login = async (user) => {
        if(!user) return
        let res = await _user.getUserData(user.uid);
        if (!res) res = await _user.setUserData(user);
        setState({
            ...state,
            user: res,
            isLogged: true
        })
    }

    const logup = async (user) => {
        if(!user) return
        const res = await _user.setUserData(user);
        setState({
            ...state,
            user: res,
            isLogged: true
        })
    }

    const logout = () => {
        setState({
            ...state,
            isLogged: false,
            user: null
        })
        _user.signOut();
    }

    const signinWithGoogle = async () => {
        const res = await _user.signInWithGoogle();
        if(res) login(res);
        return
    }

    const signinWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;
        const user = await _user.signInWithEmailAndPassword(email,password);
        if(user) await login(user)
        return user
    }

    const createUserWithEmailAndPassword = async (email, password, name) => {
        if(!email || !password || !name) return;
        const user = await _user.createUserWithEmailAndPassword(email,password, name);
        if(user) await logup(user)
        return user
    }

    const updateUser = async (callback) => {
        if (!state.isLogged && !state.user) return
        const res = await _user.getUserData(state.user.uid);
        _user.setUser(res);
        setState({
            ...state,
            user:res
        })
        if(callback) return callback(res);
        return res;
    }
    const init = () => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if (u) {
                _user.getUserData(u.uid, (user) => {
                    if (user) {
                        setState({
                            ...state,
                            user: user,
                            isLogged: true
                        })
                    }
                })
            }
        })
        return unsubscribe;
    }

    useEffect(() => {
        const unsubscribe = init();
        return () => unsubscribe()
    }, [])

    return (
        <Context.Provider
            value={{
                ...state,
                login,
                logout,
                logup,
                signinWithGoogle,
                signinWithEmailAndPassword,
                createUserWithEmailAndPassword,
                updateUser
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default State