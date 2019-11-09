import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './scrollToTop'

import App from './App';
import './index.css';
// import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    {/* <Navbar /> */}
    <ScrollToTop />
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
