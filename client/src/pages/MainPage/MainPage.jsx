import React from 'react';
import "./MainPage.css";
import NavbarLeft from "../../general-components/NavbarLeft/NavbarLeft.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";

const MainPage = () => {

    return (
        <div className={"MainPage"}>
            <NavbarLeft />

            <MainContent />
        </div>
    );
};

export default MainPage;
