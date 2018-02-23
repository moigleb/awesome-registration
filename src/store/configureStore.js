import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from "redux";
import { reducer as form } from "redux-form";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    form

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;