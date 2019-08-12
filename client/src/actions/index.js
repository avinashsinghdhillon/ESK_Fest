import axios from 'axios';
import { AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT, 
    AUTH_SIGN_IN, ITINERARY_GET_DATA } from './types';

//ActionCreators -> create/reaturn actions ({}) -> dispatched -> middleware -> reducers
export const signUp = data => {
    return async dispatch => {
        //use form data to make call to server
        try {
            console.log("action sign up was called")
            await axios.post('http://localhost:3001/users/signup', data);
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
        await axios.post('http://localhost:3001/users/signin', data);
  
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
        await axios.get('http://localhost:3001/users/status');
  
        dispatch({
          type: AUTH_SIGN_IN
        });
  
        console.log('user is auth')
      } catch(err) {
        console.log('error', err)
      }
    };
}

export const getItinerary= () => {
    return async dispatch => {
      try {
        const res = await axios.get('http://localhost:3001/itinerary')
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
      await axios.get('http://localhost:5000/users/signout');
  
      dispatch({
        type: AUTH_SIGN_OUT
      })
    };
}