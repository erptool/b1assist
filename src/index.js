import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from "react-router-dom";
import App from './App';
import Navbar from '../src/components/topNavbar';
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);


