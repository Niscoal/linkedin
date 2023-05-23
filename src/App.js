import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Widgets from "./Widgets";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");

    // Maintenir l'utilisateur actuel connecté si refresh
    useEffect(() => {
        onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                // Utilisateur est connecté
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL,
                    })
                );
            } else {
                // Utilisateur est déconnecté
                dispatch(logout());
            }
        });
    }, []);

    function handleSearch(query) {
        setSearchQuery(query);
    }

    return (
        <div className="app">
            <Header onSearch={handleSearch} />

            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <Sidebar />
                    <Feed searchQuery={searchQuery} />
                    <Widgets />
                </div>
            )}
        </div>
    );
}

export default App;
