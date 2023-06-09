import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import linkedinLogo from "./assets/linkedinLogo.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropDownMenu from "./DropDownMenu";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Header({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");

    const sendQueryFieldToParent = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const dropDownRef = useRef(null);
    useEffect(() => {
        const handleCickOutside = (e) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleCickOutside);
        return () => {
            document.removeEventListener("click", handleCickOutside);
        };
    }, []);

    const user = useSelector(selectUser);

    return (
        <div className="header">
            <div className="header__left">
                <img src={linkedinLogo} alt="linkedinLogo" />
                <div className="header__search">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Recherche"
                        value={searchQuery}
                        onChange={sendQueryFieldToParent}
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
                <div className="header__rightRef" ref={dropDownRef}>
                    <HeaderOption
                        avatar={true}
                        title={"Vous"}
                        onClick={toggleMenu}
                        iconOnTitle={<ArrowDropDownIcon />}
                    />
                    {isOpen && user && <DropDownMenu />}
                </div>
            </div>
        </div>
    );
}

export default Header;
