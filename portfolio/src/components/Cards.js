import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Morpion from "/home/lako/document/site_portfolio/portfolio/src/images/morpion.png";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function BasicExample() {
  return (
    <div id="projets">
      <div className="car">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Morpion} className="projetImg" />
          <Card.Body>
            <Card.Title>Morpion</Card.Title>
            <Card.Text>
              Réplique du jeu "Tic Tac Toe" en JavaScript fait à l'occasion d'un
              examen.
            </Card.Text>
            <Button
              variant="primary"
              href="https://github.com/Laconi-tech/Morpion"
              target="_blank"
            >
              Voir sur Github
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;
