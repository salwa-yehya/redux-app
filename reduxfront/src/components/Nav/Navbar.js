
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
  return (
    <div>
          <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          
            <Nav.Link to="/" activeClassName="active" exact>All Book</Nav.Link>
            <Nav.Link to="/add" activeClassName="active" >Add book</Nav.Link>
            <Nav.Link to="/profile" activeClassName="active" >profile</Nav.Link>
            <Nav.Link to="/logout" activeClassName="active" >logout</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-4"
              aria-label="Search"/>
            
            <Button variant="outline-success">Search</Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar;

