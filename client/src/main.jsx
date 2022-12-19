import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import Router from "./Router.jsx";
import {reduxStore} from "./redux-store/reduxStore";
import {Provider} from "react-redux";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//styles
import './styles/index.css';
import './styles/components/inputs.css';
import './styles/components/buttons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={reduxStore}>
                    <Router />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
)
