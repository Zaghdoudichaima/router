import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Card className="Card" style={{ width: "19rem"}}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description} </Card.Text>
        <Card.Text>{"⭐".repeat(movie.rate)} </Card.Text>
        <Link to={`/Details/${movie.id}`}>
          <Button variant="outline-secondary" >Watch Trailer</Button>
          </Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
