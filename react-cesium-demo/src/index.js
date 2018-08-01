import 'core-js/shim';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import "cesium/Source/Widgets/widgets.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import io from 'socket.io-client';
import reducer from './reducers/index.js';
import createSocketMiddleware from './middleware/cimsSocketMiddleware/index.js';
import buildModuleUrl from "cesium/Source/Core/buildModuleUrl";

buildModuleUrl.setBaseUrl('./cesium/');

var socket = io.connect('http://127.0.0.1:5566');
var socketMiddleware = createSocketMiddleware(socket);

const middleware = [socketMiddleware,thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducer, applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
console.log(store.getState());



//const render = Component => {   // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
    ReactDOM.render(
            <Provider store={store}>
                <App store={store} />
            </Provider>
        ,
        document.getElementById('root')
    );
//};

//ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
