import React, { useState } from "react";

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="hamburger-menu">
            <button onClick={toggleMenu} className="hamburger-menu-button">
                <span className="hamburger-menu-icon"></span>
            </button>
            {menuOpen && (
                <ul className="hamburger-menu-list">
                    <li><a href="#">Menu Item 1</a></li>
                    <li><a href="#">Menu Item 2</a></li>
                    <li><a href="#">Menu Item 3</a></li>
                </ul>
            )}
        </div>
    );
}

export default HamburgerMenu;
