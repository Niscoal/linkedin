import React from "react";
import "./DropDownMenu.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const DropDownMenu = /*React.forwardRef(*/ (props, ref) => {
    const user = useSelector(selectUser);

    return (
        <div /*ref={ref}*/ className="dropDownMenu">
            <div className="dropDownMenu__header">
                <Avatar
                    className="dropDownMenu__header--avatar"
                    src={user.photoUrl}
                >
                    {user.displayName[0]}
                </Avatar>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
            </div>
            <div className="dropDownMenu__content--1">
                <h2>Compte</h2>
                <p>Préférences</p>
            </div>
            <div className="dropDownMenu__content--2">
                <p>Déconnexion</p>
            </div>
        </div>
    );
}; /*)*/

export default DropDownMenu;
