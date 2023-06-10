import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Morpion from '../morpion.png';
import Puissance4 from '../puissance4.png';
import Skycrapper from '../skycrapper.png';

function MyProjets() {
    return (
      <>
      <h1 id="h1Profil">Certain de mes projets:</h1>
      <div id="projets">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Morpion} className='projetImg' />
        <Card.Body className="carte">
          <Card.Title>Morpion</Card.Title>
          <Card.Text>
            Réplique du jeu "Tic Tac Toe" en JavaScript fait à l'occasion d'un examen.
          </Card.Text>
          <Button variant="primary"  href="https://github.com/Laconi-tech/Morpion" target="_blank">Voir sur Github</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Puissance4} className='projetImg' />
        <Card.Body className="carte">
          <Card.Title>Puissance4</Card.Title>
          <Card.Text>
          Projet développé dans le cadre d'un projet scolaire pour créer une version du jeu "Puissance 4" avec une grille modulable.
          </Card.Text>
          <Button variant="primary"  href="https://github.com/Laconi-tech/Puissance4" target="_blank">Voir sur Github</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Skycrapper} className='projetImg' />
        <Card.Body className="carte">
          <Card.Title>Skycrapper</Card.Title>
          <Card.Text>
          Solveur du jeu de puzzle "SkyScrapers" développé en langage C. Il résoud des grilles de SkyScrapers en utilisant du "backtracking".
          </Card.Text>
          <Button variant="primary"  href="https://github.com/Laconi-tech/Puissance4" target="_blank">Voir sur Github</Button>
        </Card.Body>
      </Card>
      </div>
      </>
    );
}

export default MyProjets;