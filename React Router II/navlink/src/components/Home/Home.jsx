import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const irAPersonajes = () => {
    navigate(`/personajes/${id}`);
  };

  return (
    <div className="mt-5">
      <h1>React Router II</h1>
      <select value={id} onChange={({ target }) => setId(target.value)}>
        {[...Array(10)].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <button onClick={irAPersonajes}>buscar</button>
    </div>
  );
}
