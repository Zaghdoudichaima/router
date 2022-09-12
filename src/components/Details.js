import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Details({ movies}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const movie = movies.find(movie=> movie.id == id);
  return (
    <div>
        <h1>{movie.title}</h1>
        <h2>{movie.description}</h2>
        <iframe width="560" height="315" 
        src={movie.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen>
         </iframe> <br/>
      <Button variant="outline-secondary" onClick={() => navigate(-1)}>
            Go Back
          </Button>
    </div>
  )
}

export default Details