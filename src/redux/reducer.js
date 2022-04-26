const INITIAL_STATE = {
    user: null,
    subTotal: 0,
    orders: [],
    cart: [],
    favorites: [],
    cartFullInfo: [],
    isLogged: false,
    modal: null,
    cartLoading: false,
    buyer: null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.content
            }

        case "SET_ISLOGGED":
            return{
                ...state,
                isLogged: action.content
            }

        case "SET_CART":
            return{
                ...state,
                cart: action.content
            }

        case "SET_FAVORITES":
            return{
                ...state,
                favorites: action.content
            }

        case "SET_FULLCART":
            return{
                ...state,
                cartFullInfo: action.content
            }

        case "SET_SUBTOTAL":
            return{
                ...state,
                subTotal: action.content
            }

        case "SET_ORDERS":
            return{
                ...state,
                orders: action.content
            }

        case "SET_BUYER":
            return{
                ...state,
                buyer: action.content
            }

        default:
            return state;
    }
}