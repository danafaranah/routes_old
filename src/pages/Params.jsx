import React from "react";
import { useParams } from "react-router-dom";

export const Params = () => {
  const { n } = useParams();
  return (
    <div className="container col-12 text-align-center">
      <h1>
        Resultados para el parametro{" "}
        <strong className="text-secondary">{n}</strong>
      </h1>
    </div>
  );
};
