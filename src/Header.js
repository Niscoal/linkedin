import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import linkedinLogo from "./assets/linkedinLogo.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function Header({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        signOut(auth);
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div className="header">
            <div className="header__left">
                <img src={linkedinLogo} alt="linkedinLogo" />
                <div className="header__search">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Rechercher"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Accueil" />
                <HeaderOption Icon={SupervisorAccountIcon} title="Réseau" />

                <HeaderOption
                    Icon={BusinessCenterIcon}
                    title="Offres d'emploi"
                />
                <HeaderOption Icon={SmsIcon} title="Messagerie" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption
                    avatar={true}
                    title="Vous"
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    );
}

export default Header;
