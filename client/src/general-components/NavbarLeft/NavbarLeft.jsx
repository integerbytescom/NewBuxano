import React from 'react';
import MenuLeft from "./components/MenuLeft/MenuLeft.jsx";

//css
import "./NavbarLeft.css";
import {useDispatch, useSelector} from "react-redux";
import {setShow} from "../../redux-features/navbarLeftSlice.js";
import NavbarPages from "../../components/NavbarPages/NavbarPages.jsx";

const NavbarLeft = () => {

    //show value from redux
    const dispatch = useDispatch();
    const showNav = useSelector(state => state.navbarLeft.show);
    const showPage = useSelector(state => state.selectPage.page);
    console.log("show nav: ",showNav);
    console.log("show page: ",showPage);

    return (
        <div className={`NavbarLeft ${showNav}`}>

            {/*bg image*/}
            <img src={`/components/NavbarLeft/bg-lines${showNav}.svg`} alt="" className={"bg-lines"}/>

            {/*left menu*/}
            <MenuLeft open={showNav} showPage={showPage} />

            <div className="right" onClick={() => dispatch(setShow())}>
                <img
                    height={25}
                    src="/components/NavbarLeft/arrow.svg"
                    alt=""
                    className={Boolean(showNav) ? "reverse" : ""}
                />
            </div>
        </div>
    );
};

export default NavbarLeft;
