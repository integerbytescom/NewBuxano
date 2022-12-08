import React, {useState} from 'react';
//css
import "./NavbarLeft.css";
import MenuLeft from "./components/MenuLeft/MenuLeft.jsx";
import MenuPages from "./components/MenuPages/MenuPages.jsx";

const NavbarLeft = () => {

    //show content navbar state
    const [showNav,setShowNav] = useState(false);

    return (
        <div className={`NavbarLeft ${showNav ? "open" : ""}`}>

            {/*bg image*/}
            <img src={`/components/NavbarLeft/bg-lines${showNav ? "open" : ""}.svg`} alt="" className={"bg-lines"}/>

            {/*left menu*/}
            <MenuLeft open={showNav ? "open" : ""} />

            {/*pages in menu*/}
            {showNav && <MenuPages />}

            <div className="right" onClick={() => setShowNav(!showNav)}>
                <img
                    src="/components/NavbarLeft/arrow.svg"
                    alt=""
                    className={showNav ? "reverse" : ""}
                />
            </div>
        </div>
    );
};

export default NavbarLeft;
