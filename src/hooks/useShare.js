import {toast} from "react-toastify";

const UseShare = () => {

    const callback = async (title,text,url) => {
        if(!navigator.canShare) toast.error('Cannot be shared.');
        try{
            await navigator.share({
                title,
                text,
                url
            })
        }catch(error){
            toast.error('There was an error.');
        }
        
    }
    

    return callback;
}


export default UseShare;