import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import fetchItemsReducer from "./CoffeeShop/store/reducers/fetchItems";
import fetchOrdersReducer from "./CoffeeShop/store/reducers/fetchOrders";
import reducer from "./Covid/store/reducer/reducer";
import allCountriesData from "./Covid/store/reducer/allCountriesData";
import authReducer from './AuthorisationTodos/Authorisation/store/reducers/auth';
import todosReducer from './AuthorisationTodos/Todos/store/reducers/reducer';

const rootReducer = combineReducers({
  fetchItems: fetchItemsReducer,
  fetchOrders: fetchOrdersReducer,
  countriesReducer: reducer,
  allCountriesDataReducer: allCountriesData,
  auth: authReducer,
  todos: todosReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers:   https://bit.ly/CRA-PWA
serviceWorker.unregister();
