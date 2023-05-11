import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption
                        Icon={ImageIcon}
                        title="Photo"
                        color="#70B5F9"
                    />
                    <InputOption
                        Icon={SmartDisplayIcon}
                        title="Vidéo"
                        color="#E7A33E"
                    />
                    <InputOption
                        Icon={EventNoteIcon}
                        title="Evénement"
                        color="#C0CBCD"
                    />
                    <InputOption
                        Icon={ArticleIcon}
                        title="Rédiger un article"
                        color="#7FC15E"
                    />
                </div>
            </div>

            {/* Posts */}
        </div>
    );
}

export default Feed;
