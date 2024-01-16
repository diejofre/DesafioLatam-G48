import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

export default function Personaje() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setPersonaje(data));
  }, []);

  if (!personaje.name) return <h2>404</h2>;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={personaje.image} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>{personaje.species}</Card.Text>
        <Button variant="primary" onClick={handleButton}>
          Go home
        </Button>
      </Card.Body>
    </Card>
  );
}
