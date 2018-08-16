import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Game from './game/Game';
import Products from './products/Products';
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Products />, document.getElementById('root'));

registerServiceWorker();
