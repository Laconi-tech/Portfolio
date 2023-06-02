import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Morpion from "/home/lako/document/site_portfolio/portfolio/src/images/morpion.png";
import Puissance4 from '/home/lako/document/site_portfolio/portfolio/src/images/puissance4.png'

function MyProjets() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id='carousel'>
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      <Carousel.Item>
      <img
          className="carouselpics"
          src={Morpion}
          alt="First slide"
          width={"40%"}
        />
        <Carousel.Caption>
        <h3 id='projetTitle'>Ce projet consiste à recréer le jeu du
                  Morpion en utilisant JavaScript.</h3>
                  <Button
                  variant="primary"
                  href="https://github.com/Laconi-tech/Morpion"
                  target="_blank"
                >
                  Voir sur Github
                </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="carouselpics"
          src={Puissance4}
          alt="First slide"
          width={"600rem"}
        />
        <Carousel.Caption>
        <h3 id='projetTitle'>Ce projet consiste à recréer le jeu du
                  Morpion en utilisant JavaScript.</h3>
                  <Button
                  variant="primary"
                  href="https://github.com/Laconi-tech/Puissance4"
                  target="_blank"
                >
                  Voir sur Github
                </Button>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default MyProjets;