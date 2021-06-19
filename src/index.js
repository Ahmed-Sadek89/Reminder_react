import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import Reducer from './Reducer/Reducer';
import './index.css'


const Store = createStore(Reducer);


ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
)