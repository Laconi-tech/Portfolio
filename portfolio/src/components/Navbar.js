import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pdp from '../pdp.jpg';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" style={{ margin: "0px 0px 30px 0px", position: "fixed", zIndex: "4" , width: "100%"}}>
      <Container>

        <Navbar.Brand href="#home">GOMIS Nicolas Portfolio</Navbar.Brand>
        {/* <Navbar.Brand href=""><img width="100" height="100" src={pdp} alt="github"/></Navbar.Brand> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#profil">Profil</Nav.Link>
            <Nav.Link href="#projets">Projets</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;