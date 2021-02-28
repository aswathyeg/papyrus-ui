import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
ReactDOM.render(
      <BrowserRouter>
        <div>

              <App /> 
             <Login />   
              </div>
     </BrowserRouter>,
    document.getElementById('root')
);
reportWebVitals();
