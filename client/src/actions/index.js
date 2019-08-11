import axios from 'axios';

//ActionCreators -> create/reaturn actions ({}) -> dispatched -> middleware -> reducers
export const signUp = data => {
    return async dispatch => {
        //use form data to make call to server
        try {
            const res = await axios.post('http://localhost:3001/users/signup', data)
            console.log("res", res)
        } catch (err) {
            console.log('err', err)
        }
        //take server response (jwt arrives)

        //dispatch message to reducer using payload(jwt)

        //save token into local storage

    }
}