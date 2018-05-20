import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const MyApp = ()=>(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>

);


ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
