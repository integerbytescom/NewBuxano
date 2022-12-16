import React from 'react';
import MenuLeft from "./components/MenuLeft/MenuLeft.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setShow} from "../../redux-features/navbarLeftSlice.js";
import {setPage} from "../../redux-features/selectNavbarPageSlice.js";

//css
import "./NavbarLeft.css";

const NavbarLeft = () => {

    //show value from redux
    const dispatch = useDispatch();
    const showNav = useSelector(state => state.navbarLeft.show);
    const showPage = useSelector(state => state.selectPage.page);
    console.log("show nav: ",showNav);
    console.log("show page: ",showPage);

    //если закрываем меню то и страницу показа убираем
    const handleOpenMenu = () => {
        if (showNav && showPage.link){
            dispatch(setPage({}));
        }
        dispatch(setShow())
    }

    return (
        <div className={`NavbarLeft ${showNav}`}>

            {/*bg image*/}
            <img src={`/components/NavbarLeft/bg-lines${showNav}.svg`} alt="" className={"bg-lines"}/>

            {/*left menu*/}
            <MenuLeft open={showNav} showPage={showPage} />

            <div className="right" onClick={() => handleOpenMenu()}>
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
