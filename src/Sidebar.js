import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import banner from "./assets/banner.jpg";
import me from "./assets/me.jpg";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={banner} alt="banner" />
                <Avatar className="sidebar__avatar" src={me} />
                <h2>Nicolas LOUIS</h2>
                <h4>Développeur web</h4>
            </div>
            <div className="sidebar__stats">
                <p>Relations</p>
                <p className="sidebar__statNumber">4</p>
            </div>

            <div className="sidebar__bottom">
                <p></p>
            </div>
        </div>
    );
}

export default Sidebar;
