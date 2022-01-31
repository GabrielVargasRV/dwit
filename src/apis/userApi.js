import {db,auth, googleAuthProvider} from '../firebase/index';
import {toast} from 'react-toastify';


const AVATAR_DEFAULT_PHOTO = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';


class User {

    constructor(){
        this.user = null;
    }

    getUser(){
        return this.user;
    }

    setUser(user){
        this.user = user;
        return
    }

    async getUserData(uid,callback){
        if(!uid) return null;
        const res = await db.collection('users').doc(uid).get()
        if (callback) callback(res.data())
        return res.data()
    }

    async setUserData(user,callback){
        await db.collection('users').doc(user.uid).set({
            ...user,
            money: 5000
        })
        const res = await this.getUserData(user.uid)
        if (callback) callback(res)
        return res
    }

    async signOut() {
        await auth.signOut();
        return
    }

    async signInWithGoogle(){
        let response = null;
        await auth.signInWithPopup(googleAuthProvider).then((success) => {
            const u = success.user;
            const obj = {
                name: u.displayName,
                email: u.email,
                uid: u.uid,
                photo: u.photoURL,
            };
            response = obj;
        }).catch((error) => {
            toast.error('Something went wrong, please try again later.', { position: 'top-right' })
        })
        return response;
    }

    async signInWithEmailAndPassword(email,password){
        let response = null;
        await auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user
            const userObj = {
                email,
                uid: user.uid,
                name: user.displayName,
                photo: AVATAR_DEFAULT_PHOTO
            }
            response = userObj;
            // login(userObj)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/user-not-found') toast.error('User not found.', { position: 'top-right' })
            else toast.error('Something went wrong, please try again later.', { position: 'top-right' })
        });
        return response;
    }

    async createUserWithEmailAndPassword(email,password,name){
        let response = null;
        await auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user
            const userObj = {
                email,
                uid: user.uid,
                name,
                photo: AVATAR_DEFAULT_PHOTO
            }
            response = userObj;
            // logup(userObj)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            toast.error('Something went wrong, please try again later.', { position: 'top-right' })
        });
        return response;
    }

}

export default User;