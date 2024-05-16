import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "../components/Button";
import "../assets/styles/Pages.css";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    nom: "",
    prenom: "",
    password: "",
    dateanniv: "",
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
      const response = await fetch("http://127.0.0.1:8000/inscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          roles: ["ROLE_USER"], // Ajout du rôle par défaut
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      const result = await response.json();
      console.log("Inscription réussie:", result);
      console.log(formData);

      // Rediriger l'utilisateur vers la page de connexion après inscription réussie
      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="registerPage">
        <div className="registerContainer">
          <form onSubmit={handleSubmit} className="formRegister">
            <h1 className="titleRegister">S'inscrire</h1>
            <div className="divRegister">
              <label htmlFor="userName">Nom</label>
              <input
                type="text"
                id="userName"
                name="nom"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
              <label htmlFor="userFirstname">Prénom</label>
              <input
                type="text"
                id="userFirstname"
                name="prenom"
                placeholder="Prénom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
              <label htmlFor="userEmail">Email</label>
              <input
                type="email"
                id="userEmail"
                name="email"
                placeholder="exemple@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="userPassword">Mot de passe</label>
              <input
                type="password"
                id="userPassword"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="userPasswordConfirm">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="userPasswordConfirm"
                placeholder="********"
                required
              />
              <label htmlFor="userBirthDate">Date de Naissance</label>
              <input
                type="date"
                id="userBirthDate"
                name="dateanniv"
                value={formData.dateanniv}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              type="submit"
              label={"S'inscrire"}
              color="primary"
              className="btnRegister"
              disabled={loading}
            />
            {loading && (
              <p className="mt-2 text-sm text-gray-600">Envoi des données...</p>
            )}
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default SignIn;
