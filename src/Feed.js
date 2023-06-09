import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import { db } from "./firebase";
import {
    collection,
    onSnapshot,
    serverTimestamp,
    addDoc,
    query,
    orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Feed({ searchQuery }) {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postsCollection = collection(db, "posts");
        onSnapshot(
            query(postsCollection, orderBy("timestamp", "desc")),
            (snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
        );
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.data.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sendPost = (e) => {
        e.preventDefault();

        addDoc(collection(db, "posts"), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: serverTimestamp(),
        });

        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Commencer un post"
                        />
                        <button onClick={sendPost} type="submit">
                            Envoyer
                        </button>
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
            {filteredPosts.map(
                ({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                )
            )}
        </div>
    );
}

export default Feed;
