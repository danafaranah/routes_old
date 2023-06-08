import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const { setIsLogin } = useUser();

  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const loginUser = (e) => {
    e.preventDefault();

    if (
      userForm.email === "faranahcarrillo50@gmail.com" &&
      userForm.password === "1234"
    ) {
      alert("Bienvenido");
      localStorage.setItem("login",true)
      setIsLogin(true);
      navigate("/home");
    } else {
      alert("Usuario o Contraseña incorrectos");
    }
  };
  return (
    <div className="container">
      <h1 className="text-center mt-3">Login</h1>

      <div className="d-flex justify-content-center">
        <div className="col-6">
          <form onSubmit={loginUser}>
            {/* Input para capturar Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                required
                className="form-control"
                autoFocus
                name="email"
                // onChange={(e)=>setEmail(e.target.value)}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* Input para capturar contraseña */}

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                required
                className="form-control"
                name="password"
                // onChange={(e)=>setPassword(e.target.value)}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* Botón para enviar */}

            <button className="btn btn-info mt-3" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
