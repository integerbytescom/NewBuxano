import React from 'react';
import "./MenuLeftFooter.css";

const MenuLeftFooter = ({open}) => {
    return (
        <footer className={`MenuLeftFooter ${open}`}>
            <button>
                <img src="/components/NavbarLeft/icons/but-vopros.svg" alt=""/>
                {open && <p>Help</p>}
            </button>
            <button>
                <img src="/components/NavbarLeft/icons/but-chat.svg" alt=""/>
                {open && <p>Chat</p>}
            </button>
        </footer>
    );
};

export default MenuLeftFooter;
