import React from "react";
import "./DropDownMenu.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const DropDownMenu = (props, ref) => {
    const user = useSelector(selectUser);

    return (
        <div className="dropDownMenu">
            <div className="dropDownMenu__header">
                <Avatar
                    className="dropDownMenu__header--avatar"
                    src={user.photoUrl}
                >
                    {user.displayName[0]}
                </Avatar>
                <div className="dropDownMenu__header--userInfos">
                    <h1>{user.displayName}</h1>
                    <p>{user.email}</p>
                </div>
            </div>
            <div className="dropDownMenu__border"></div>
            <div className="dropDownMenu__content--1">
                <h2>Compte</h2>
                <p>Préférences</p>
            </div>
            <div className="dropDownMenu__border"></div>
            <div className="dropDownMenu__content--2">
                <p>Déconnexion</p>
            </div>
        </div>
    );
};

export default DropDownMenu;
