import React from "react";
import "./DropDownMenu.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const DropDownMenu = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        signOut(auth);
    };

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
                <p onClick={logoutOfApp}>Déconnexion</p>
            </div>
        </div>
    );
};

export default DropDownMenu;
