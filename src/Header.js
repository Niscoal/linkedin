import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://img.icons8.com/fluency/48/000000/linkedin.png"
                    alt="linkedin_icon"
                />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right"></div>
        </div>
    );
}

export default Header;
