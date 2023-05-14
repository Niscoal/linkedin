import React, { useState } from "react";
import "./Login.css";
import linkedin from "./assets/linkedin.svg";
import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profileUrl: userAuth.user.photoURL,
                    })
                );
            })
            .catch((error) => alert(error));
    };
    const register = () => {
        if (!name) {
            return alert("Merci d'indiquer le nom");
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                const user = userAuth.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: profilePic,
                }).then(() => {
                    dispatch(
                        login({
                            email: user.email,
                            uid: user.uid,
                            displayName: name,
                            photoUrl: profilePic,
                        })
                    );
                });
            })
            .catch((error) => alert(error));
    };
    return (
        <div className="login">
            <img src={linkedin} alt="Linkedin logo" />
            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom complet"
                    type="text"
                />
                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder="Photo de profil"
                    type="text"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    type="password"
                />
                <button type="submit" onClick={loginToApp}>
                    Se connecter
                </button>
            </form>

            <p>
                Nouveau sur Linkedin?{" "}
                <span className="login__register" onClick={register}>
                    S'inscrire
                </span>
            </p>
        </div>
    );
}

export default Login;
