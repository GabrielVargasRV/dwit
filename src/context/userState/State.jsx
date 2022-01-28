import React, { useState, useEffect } from 'react'
import Context from './Context'
import { auth, db, googleAuthProvider } from '../../firebase/index'
import { toast } from 'react-toastify'
const AVATAR_DEFAULT_PHOTO = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'

const getUserData = async (uid, callback) => {
    const res = await db.collection('users').doc(uid).get()
    if (callback) callback(res.data())
    return res.data()
}

const setUserData = async (user, callback) => {
    await db.collection('users').doc(user.uid).set({
        ...user,
        money: 5000
    })
    const res = await getUserData(user.uid)
    if (callback) callback(res)
    return res
}

const State = (props) => {
    const initialState = {
        user: null,
        isLogged: false
    }
    const [state, setState] = useState(initialState)

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
        const res = await setUserData(user)
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
        auth.signOut()
    }

    const signinWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider).then((success) => {
            const u = success.user;
            const obj = {
                name: u.displayName,
                email: u.email,
                uid: u.uid,
                photo: u.photoURL,
            };
            login(obj);
        }).catch((error) => {
            toast.error('Something went wrong, please try again later.', { position: 'top-right' })
        })
    }

    const signinWithEmailAndPassword = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user
                const userObj = {
                    email,
                    uid: user.uid,
                    name: user.displayName,
                    photo: AVATAR_DEFAULT_PHOTO
                }
                login(userObj)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/user-not-found') toast.error('User not found.', { position: 'top-right' })
                else toast.error('Something went wrong, please try again later.', { position: 'top-right' })
            });
        return
    }

    const createUserWithEmailAndPassword = async (email, password, name) => {
        await auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user
                const userObj = {
                    email,
                    uid: user.uid,
                    name,
                    photo: AVATAR_DEFAULT_PHOTO
                }
                logup(userObj)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error('Something went wrong, please try again later.', { position: 'top-right' })
            });
        return
    }

    const updateUser = async (callback) => {
        if (!state.isLogged && !state.user) return
        const res = await getUserData(state.user.uid)
        setState({
            ...state,
            user:res
        })
        if(callback) return callback()
        return
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if (u) {
                getUserData(u.uid, (user) => {
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