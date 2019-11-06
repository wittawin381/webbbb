import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'


// class Hello extends React.Component{
//   render(){
//     return(
//       <div className="hello">
//         hello
//       </div>
//     )
//   }
// }


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
