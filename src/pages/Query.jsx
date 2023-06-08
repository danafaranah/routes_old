import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Query = () => {
  let [params] = useSearchParams();

  const [q, setQ] = useState("");

  useEffect(() => {
    setQ(params.get("q")) || "";
  }, [params]);

  return (
    <div>
      <h1>
        Resultados para:{" "}
        <strong className="text-secondary">{q}</strong>
      </h1>
    </div>
  );
};
