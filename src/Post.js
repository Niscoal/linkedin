import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import InputOption from "./InputOption";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={photoUrl} alt={`Photo de profil de ${name}`}>
                    {name[0]}
                </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption
                    Icon={ThumbUpOutlinedIcon}
                    title="J'aime"
                    color="gray"
                />
                <InputOption
                    Icon={ChatOutlinedIcon}
                    title="Commenter"
                    color="gray"
                />
                <InputOption
                    Icon={ShareOutlinedIcon}
                    title="Republier"
                    color="gray"
                />
                <InputOption
                    Icon={SendOutlinedIcon}
                    title="Envoyer"
                    color="gray"
                />
            </div>
        </div>
    );
}

export default Post;
