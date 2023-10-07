import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";

function NavbarComponent() {

  const navigate = useNavigate();
  const isloggedIn = localStorage.getItem("jwt") ? true : false;

  function logout () {
    localStorage.removeItem("jwt");
    navigate("/login");
  }
  
  const beforeLogin = (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand as={Link} to ="/">Bank Management App</Navbar.Brand> */}
          <Navbar.Brand>Your Bank</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link as={Link} to ="/">Home</Nav.Link>
            <Nav.Link as={Link} to ="/register">Register</Nav.Link>
            <Nav.Link as={Link} to ="/login">Login</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );

  const afterLogin = (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Bank Management App</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to ="/updateuser">Profile</Nav.Link>
            <Nav.Link as={Link} to ="/loan">ApplyLoan</Nav.Link>
            <Nav.Link as={Link} to ="/viewloan">ViewLoan</Nav.Link>
            <Nav.Link as={Link} to ="/" onClick={logout}>Logout</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
    );

    if(isloggedIn) {
      return afterLogin;
    }
    else {
      return beforeLogin;
    }
}


export default NavbarComponent;