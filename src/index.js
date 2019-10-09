import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App.js';

import '../css/bootstrap.css';


ReactDOM.render(
	<App />,
	document.getElementById('app')
);


module.hot.accept();