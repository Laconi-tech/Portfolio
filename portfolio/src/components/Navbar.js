import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CV from '/home/lako/document/site_portfolio/portfolio/src/CV GOMIS Nicolas.pdf'

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" style={{ margin: "0px 0px 30px 0px", position: "fixed", zIndex: "4" , width: "100%"}}>
      <Container>
        <Navbar.Brand href="#home">GOMIS Nicolas Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#profil">Profil</Nav.Link>
            <Nav.Link href="#projets">Projets</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://github.com/Laconi-tech">Github</Nav.Link>
            {/* <Nav.Link href={CV} download={CV} ><img width="40" height="40" src="https://img.icons8.com/stickers/100/parse-resumes.png" alt="parse-resumes"/></Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;