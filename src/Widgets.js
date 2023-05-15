import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn Actualités</h2>
                <InfoIcon />
            </div>

            {newsArticle(
                "De retour",
                "Elon Musk envoie un utilisateur Twitter dans l'espace - 166 lecteurs"
            )}
            {newsArticle(
                "Sciences",
                "Une IA prend l'initiative de créer une IA - 69 lecteurs"
            )}
            {newsArticle(
                "Sciences",
                "Une lampe à energie solaire pour vous éclairer en plein soleil - 728 lecteurs"
            )}
        </div>
    );
}

export default Widgets;
