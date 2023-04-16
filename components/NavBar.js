import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;