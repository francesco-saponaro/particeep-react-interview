import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// We import the reducers to be passed into the reducer variable
import { moviesReducer } from "./redux/reducers/moviesReducers";

// This variable contains all reducers combined
// The reducers update the store with whatever action was dispatched
const reducers = combineReducers({
  movies: moviesReducer,
});

let initialState = {};

// We need to pass thunk into the store to be able to perform async requests when
// dispatching actions to the reducer, like for example grabbing data from the backend or API
const middleware = [thunk];

// We associated the reducer with the store
// We pass thunk as a middleware to the store
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
