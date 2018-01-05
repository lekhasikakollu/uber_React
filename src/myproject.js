import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from "redux-logger";
import thunk from 'redux-thunk';

import App from './js/components/App.jsx';
import Header from "./js/components/Header.jsx";



import InitialState from './js/reducers/intial-state.js';
import navReducer from './js/reducers/navigation-reducer.js';
import initialReducer from './js/reducers/initial-reducer.js';



const store = createStore(combineReducers({
    viewControl: initialReducer,
    navControl: navReducer
}), InitialState, applyMiddleware(logger, thunk));

ReactDOM.render(<Provider store={store}>
    <div>
        <div className="jumbotron">
            <App />
        </div>
    </div>
</Provider>, document.getElementById("main"));
