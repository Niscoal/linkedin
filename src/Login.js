import React from "react";
import "./Login.css";
import linkedin from "./assets/linkedin.svg";

function Login() {
    const register = () => {};
    return (
        <div className="login">
            <img src={linkedin} alt="Linkedin logo" />
            <form>
                <input placeholder="Nom complet" type="text" />
                <input placeholder="Photo de profil" type="text" />
                <input placeholder="Email" type="email" />
                <input placeholder="Mot de passe" type="password" />
                <button>Se connecter</button>
            </form>

            <p>
                Nouveau sur Linkedin?
                <span className="login__register" onClick={register}>
                    S'inscrire
                </span>
            </p>
        </div>
    );
}

export default Login;
