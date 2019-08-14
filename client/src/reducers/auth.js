import { 
    AUTH_SIGN_UP, 
    AUTH_SIGN_OUT, 
    AUTH_SIGN_IN, 
    AUTH_ERROR } from '../actions/types';
  
  const DEFAULT_STATE = {
    isAuthenticated: false,
    errorMessage: ''
  }
  

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case AUTH_SIGN_UP: 
            console.log("auth reducer got an auth signup action")
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '', email: action.payload.email, id: action.payload.id, name: action.payload.name}
        case AUTH_SIGN_IN:
            console.log("auth reducer got an auth signin action")
            return { ...state, isAuthenticated: true, errorMessage: '', email: action.payload.email, id: action.payload.id, name: action.payload.name }
        case AUTH_SIGN_OUT:
            console.log("auth reducer got an auth signout action")
            return { ...state, isAuthenticated: false, errorMessage: '' }
        case AUTH_ERROR:
            console.log("auth reducer got an auth error action")
            return { ...state, errorMessage: action.payload}
        default:
            return state
    }
}