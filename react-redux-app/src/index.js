import React from 'react';
import ReactDOM from 'react-dom';

// Styling
import './index.css';
import './App.css';

// Components
import App from './App';

// Services
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
