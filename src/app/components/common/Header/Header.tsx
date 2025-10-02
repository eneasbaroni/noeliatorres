"use client";
import { useState } from "react";
import Menu from "../Menu/Menu";
import MenuIcon from "../MenuIcon/MenuIcon";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    return (
        <header className="h-auto w-full">
            <MenuIcon toggleMenu={toggleMenu} isOpen={menuActive} />
            <Menu active={menuActive} closeMenu={toggleMenu} />
        </header>
    );
};
export default Header;
