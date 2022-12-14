import React from 'react';
import MenuLeft from "./components/MenuLeft/MenuLeft.jsx";
import MenuPages from "./components/MenuPages/MenuPages.jsx";

//css
import "./NavbarLeft.css";
import {useDispatch, useSelector} from "react-redux";
import {setShow} from "../../redux-features/navbarLeftSlice.js";

const NavbarLeft = () => {

    //show value from redux
    const dispatch = useDispatch();
    const showNav = useSelector(state => state.navbarLeft.show);
    console.log("show nav: ",showNav)

    return (
        <div className={`NavbarLeft ${showNav}`}>

            {/*bg image*/}
            <img src={`/components/NavbarLeft/bg-lines${showNav}.svg`} alt="" className={"bg-lines"}/>

            {/*left menu*/}
            <MenuLeft open={showNav} />

            {/*pages in menu*/}
            {showNav && <MenuPages />}

            <div className="right" onClick={() => dispatch(setShow())}>
                <img
                    src="/components/NavbarLeft/arrow.svg"
                    alt=""
                    className={Boolean(showNav) ? "reverse" : ""}
                />
            </div>
        </div>
    );
};

export default NavbarLeft;
