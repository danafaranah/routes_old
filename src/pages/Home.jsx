import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [params, setParams] = useState("");

  const handleQuery = () => {
    navigate(`/query?q=${query}`);
  };

  const handleParams = () => {
    navigate(`/params/${params}`);
  };

  return (
    <div className="container">
      <h1 className="mt-3">HomePage</h1>
      {/* Querys */}
      <p>Buscar usuarios por query</p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search By Query"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-outline-info" onClick={() => handleQuery()}>
          Send
        </button>
      </div>

      {/* Parametros */}
      <p>Buscar usuarios por parametro</p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search By Parameters"
          onChange={(e) => setParams(e.target.value)}
        />
        <button className="btn btn-outline-info" onClick={() => handleParams()}>
          Send
        </button>

        {/* LINKS */}

        <div className="container mt-5 p-1">
          <Link to={"/about"} className="btn btn-outline-success">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};
