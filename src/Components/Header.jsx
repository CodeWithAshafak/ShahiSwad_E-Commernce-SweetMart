import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Importing icons
import "../CSS/Header.css"


const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Shahi <span>Swad</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/sweets">Sweets</Nav.Link>
            <Nav.Link as={Link} to="/namkeen">Namkeen</Nav.Link>
            <Nav.Link as={Link} to="/dryfruits">Dry Fruits</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/explore">Explore</NavDropdown.Item>
            </NavDropdown>
          </Nav>



            {/* Right side icons */}
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart size={20} /> {/* Cart Icon */}
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              <FaUser size={20} /> {/* User Icon */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Importing icons
// import "../CSS/Header.css";

// const Header = () => {
//   return (
//     <Navbar expand="lg" className="navbar fixed-top"> {/* Add fixed-top for sticky effect */}
//       <Container>
//         <Navbar.Brand as={Link} to="/">Shahi <span>Swad</span></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/home">Home</Nav.Link>
//             <Nav.Link as={Link} to="/sweets">Sweets</Nav.Link>
//             <Nav.Link as={Link} to="/namkeen">Namkeen</Nav.Link>
//             <Nav.Link as={Link} to="/dryfruits">Dry Fruits</Nav.Link>
//             <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
//             <NavDropdown title="More" id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to="/explore">Explore</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           {/* Right side icons */}
//           <Nav className="nav-icons">
//             <Nav.Link as={Link} to="/cart">
//               <FaShoppingCart size={22} />
//             </Nav.Link>
//             <Nav.Link as={Link} to="/profile">
//               <FaUser size={22} />
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

