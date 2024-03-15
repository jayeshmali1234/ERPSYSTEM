import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import DashBoard from './DashBoards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <DashBoard/>
    </BrowserRouter>
  // {/* </React.StrictMode> */}
);


// reportWebVitals();
