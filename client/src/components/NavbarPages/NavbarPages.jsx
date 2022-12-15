import React from 'react';
import "./NavbarPages.css";
import {Button} from "react-bootstrap";

const NavbarPages = ({page,setNavPage}) => {
    return (
        <div className={"NavbarPages"}>
            <Button size={"sm"} onClick={() => setNavPage("")}>Back</Button>
            <h1>{page}</h1>
        </div>
    );
};

export default NavbarPages;
