import React, { useState, useEffect } from 'react'
import Context from './Context'
import Welcome from '../../components/modals/welcome/index'

const State = (props) => {
    const initialState = {
        modal: <Welcome/>
    }
    const [state, setState] = useState(initialState)

    const setModal = (modal) => {
        setState({modal: modal})
    }

    const closeModal = (callback) => {
        setState({modal:null})
        if(callback) callback()
    }
 
    return (
        <Context.Provider value={{
            ...state,
            setModal,
            closeModal
        }} >
            {props.children}
        </Context.Provider>
    )
}

export default State