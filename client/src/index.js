import 'dotenv/config';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerServiceWorker } from './serviceWorker';

registerServiceWorker();
ReactDOM.render(<App />, document.getElementById('root'));
