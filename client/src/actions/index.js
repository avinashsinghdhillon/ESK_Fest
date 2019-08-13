import axios from 'axios';
import { AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT, 
    AUTH_SIGN_IN, ITINERARY_GET_DATA } from './types';

//ActionCreators -> create/reaturn actions ({}) -> dispatched -> middleware -> reducers
export const signUp = data => {
    return async dispatch => {
        //use form data to make call to server
        try {
            console.log("action sign up was called")
            await axios.post('/users/signup', data);
            console.log("action dispatch was called")
            dispatch({
                type: AUTH_SIGN_UP,
            });
        } catch (err) {
            dispatch({
            type: AUTH_ERROR,
                payload: 'Email already in use.'
            })
        }
    };
}

export const signIn = data => {
    return async dispatch => {
      try {
        console.log("action sign in was called")
        await axios.post('/users/signin', data);
        console.log("action signin dispatch was called")
        dispatch({
          type: AUTH_SIGN_IN
        });
      } catch(err) {
        dispatch({
          type: AUTH_ERROR,
          payload: 'Email and password combination isn\'t valid'
        })
      }
    };
}
export const checkAuth = () => {
    return async dispatch => {
      try {
        console.log("checking auth status")
        await axios.get('/users/status');
        console.log("checking auth dispatch")
        dispatch({
          type: AUTH_SIGN_IN
        });
  
        
      } catch(err) {
        console.log('error', err)
      }
    };
}

export const getItinerary= () => {
    return async dispatch => {
      try {
        console.log("action get itinerary called")
        const res = await axios.get('/itinerary')
        console.log("action get itinerary dispatch")
        dispatch({
          type: ITINERARY_GET_DATA,
          payload: res.data
        })
  
      } catch(err) {
        console.error('err', err)
      }
    }
}

export const signOut = () => {
    return async dispatch => {
        console.log("action signout got called")
      await axios.get('/users/signout');
        console.log("action signout dispatch")
      dispatch({
        type: AUTH_SIGN_OUT
      })
    };
}