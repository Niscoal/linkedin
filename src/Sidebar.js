import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import banner from "./assets/banner.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={banner} alt="banner" />
                <Avatar className="sidebar__avatar" src={user.photoUrl}>
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <p>Relations</p>
                <p className="sidebar__statNumber">4</p>
            </div>

            <div className="sidebar__bottom">
                <p>Récent</p>
                {recentItem("reactjs")}
                {recentItem("developpeur")}
                {recentItem("creativedeveloper")}
                {recentItem("design")}
            </div>
        </div>
    );
}

export default Sidebar;
