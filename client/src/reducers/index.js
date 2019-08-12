import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth'
import itineraryReducer from './itinerary';

export default combineReducers ({
    form: formReducer,
    auth: authReducer,
    itin: itineraryReducer
});