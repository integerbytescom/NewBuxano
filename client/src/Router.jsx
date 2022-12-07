import React from 'react';
import MainPage from "./pages/MainPage/MainPage.jsx";
import {Route,Routes} from "react-router-dom";

const Router = () => {
    return (
        <div className={"Router"}>

            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>

        </div>
    );
};

export default Router;
