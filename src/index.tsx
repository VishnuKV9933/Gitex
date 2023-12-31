import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {store} from "./Redux/Store";
import { Provider } from 'react-redux';
import '../src/assets/styles/common.css'
import '../src/assets/styles/aicommon.css'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode >
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>
);

