import {db,auth, googleAuthProvider} from '../firebase/index';
import {toast} from 'react-toastify';
import store from "../redux/store";

const AVATAR_DEFAULT_PHOTO = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';

class User {
    constructor(){
        this.user = null;
        this.unsubscribe = null;
        this.init();
    }

    init(){
        this.unsubscribe = auth.onAuthStateChanged((u) => {
            if (u) {
                this.getUserData(u.uid, (user) => {
                    if (user) {
                        store.dispatch({type: "SET_USER",content: user});
                        store.dispatch({type: "SET_ISLOGGED",content: true});
                    }else{
                        store.dispatch({type: "SET_USER",content: null});
                        store.dispatch({type: "SET_ISLOGGED",content: false});
                    }
                })
            }
        })
    }

    stop(){
        if(this.unsubscribe) this.unsubscribe();
    }

    getUser(){
        return this.user;
    }

    setUser(user){
        if(!user) return;
        this.user = user;
        //get user data
        this.getUserData(user.uid,(res) => {
            store.dispatch({type: "SET_USER",content: user});
            store.dispatch({type: "SET_ISLOGGED",content: true});
        });
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
        store.dispatch({type: "SET_USER",content: res});
        store.dispatch({type: "SET_ISLOGGED",content: true});
        if (callback) return callback(res)
        return res;
    }

    async signOut(){
        store.dispatch({type: "SET_USER",content: null});
        store.dispatch({type: "SET_ISLOGGED",content: false});
        await auth.signOut();
        return;
    }

    async signInWithGoogle() {
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
            this.setUser(obj);
        }).catch((error) => {
            toast.error('Something went wrong, please try again later.', { position: 'top-right' })
        })
        return response;
    }

    async signInWithEmailAndPassword(email,password) {
        let response = null;
        if(!email || !password) {
            response = 'Invalid email or password';
            return response;
        }


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
            this.setUser(userObj);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/user-not-found') toast.error('User not found.', { position: 'top-right' })
            else toast.error('Something went wrong, please try again later.', { position: 'top-right' })
        });
        return response;
    }

    async createUserWithEmailAndPassword(email,password,name) {
        let response = null;
        if(!email || !password || !name) {
            response = 'Invalid email or password';
            return response;
        }


        await auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user
            const userObj = {
                email,
                uid: user.uid,
                name,
                photo: AVATAR_DEFAULT_PHOTO
            }
            this.setUserData(userObj);
            response = userObj;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error('Something went wrong, please try again later.', { position: 'top-right' })
        });
        return response;
    }

    async update() {
        if(!store.getState().isLogged && !store.getState().user) return;
        const res = await this.getUserData(store.getState().user.uid);
        store.dispatch({type: "SET_USER",content: res});
    }

}

const user = new User();

export default user;