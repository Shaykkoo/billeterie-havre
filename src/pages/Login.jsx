import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Fragment } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import "./Pages.css";

function Login() {
  return (
    <Fragment>
      <Header />
      <div className="loginContainer">
        <form action="" className="formLogin">
          <h1 className="titleLogin">Se Connecter</h1>
          <div className="divLogin">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="exemple@gmail.com" />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" placeholder="********" />
          </div>
          <Button label={"Se connecter"} color="primary" className="btnLogin" />
        </form>

        <div className="divRegister">
          <p>
            Pas encore de compte?{" "}
            <text className="loginLinkRegister">
              <Link to="/signin">Inscrivez-vous !</Link>
            </text>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
