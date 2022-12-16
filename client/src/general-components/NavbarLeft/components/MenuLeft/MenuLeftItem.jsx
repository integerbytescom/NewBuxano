import React, {useState} from 'react';
import {setShow} from "../../../../redux-features/navbarLeftSlice.js";
import {useDispatch} from "react-redux";

const MenuLeftItem = ({link,open,setNavPage}) => {

    const dispatch = useDispatch();
    const [showMore, setShowMore] = useState(false);

    //если меню закрыто то вешаем счетчик на его открытие на ссылки
    if (!open){
        return (
            <div className={"MenuLeftItem"}>
                <p onClick={() => dispatch(setShow())}>
                    <img src={link.icon} alt={""} />
                </p>
            </div>
        );
    }

    //если меню открыто то ссылки работают нормально
    if (!link.innerLinks){
        return (
            <div className={"MenuLeftItem"}>
                <p onClick={() => setNavPage(link)}>
                    <img src={link.icon} alt={""} />
                    {link.text}
                </p>
            </div>
        );
    }else {
        return (
            <div className={"MenuLeftItem more"}>
                <p onClick={() => setShowMore(!showMore)}>
                    <img
                        src="/components/NavbarLeft/arrow.svg"
                        alt="arrow"
                        className={`arrow ${showMore ? "open" : ""}`}
                    />
                    <img src={link.icon} alt={""} />
                    {link.text}
                </p>
                {
                    showMore &&
                    <ul>
                        {
                            link.innerLinks.map(linkInner => (
                                <li key={linkInner.id} onClick={() => setNavPage(linkInner)}>
                                    {linkInner.text}
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>
        );
    }
};

export default MenuLeftItem;
