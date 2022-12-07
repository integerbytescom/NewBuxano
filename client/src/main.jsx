import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import Router from "./Router.jsx";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//styles
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    </BrowserRouter>
)
