import React from "react";
import ReactDOM from "react-dom";

// Styling
import "./index.css";
import "./App.css";

// Components
import App from "./App";

// Services
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import * as serviceWorker from "./serviceWorker";

// Reducer
import { rootReducer } from './reducers/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
