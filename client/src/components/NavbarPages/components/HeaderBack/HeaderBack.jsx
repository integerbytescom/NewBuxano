import React from 'react';
import "./HeaderBack.css";
import {Button} from "react-bootstrap";

const HeaderBack = ({page,setNavPage}) => {
    return (
        <header className={"HeaderBack w-100"}>
            <Button size={"sm"} onClick={() => setNavPage({})}>
                <img src="/components/NavbarLeft/arrow.svg" alt=""/>
                Back to menu
            </Button>
            
            <h4 className={"w-100 m-0"}>
                {page.title}
            </h4>
        </header>
    );
};

export default HeaderBack;
