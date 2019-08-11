import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
