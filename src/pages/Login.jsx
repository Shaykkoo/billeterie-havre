import React, { useState, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import Button from "../components/Button";
import "../assets/styles/Pages.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error("Erreur lors de la connexion");
      }

      const result = await response.json();
      console.log("Connexion réussie:", result);
      // Stocker le token ou les informations de l'utilisateur si nécessaire
      localStorage.setItem("token", result.token);

      // Rediriger l'utilisateur après une connexion réussie
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="loginContainer">
        <form onSubmit={handleSubmit} className="formLogin">
          <h1 className="titleLogin">Se Connecter</h1>
          <div className="divLogin">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemple@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button
            type="submit"
            label={"Se connecter"}
            color="primary"
            className="btnLogin"
            disabled={loading}
          />
          {loading && (
            <p className="mt-2 text-sm text-gray-600">Envoi des données...</p>
          )}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </form>

        <div className="divRegister">
          <p>
            Pas encore de compte?{" "}
            <span className="loginLinkRegister">
              <Link to="/signin">Inscrivez-vous !</Link>
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
