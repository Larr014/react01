import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header>
        <Nav
      activeKey="/"
      
    >
      <Nav.Item>
        <Nav.Link>
          <NavLink to="/"  >Home</NavLink>
        </Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link>
          <NavLink to="/section1">
            Pagina1
          </NavLink>
        </Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link>
          <NavLink to="/section2">Pagina2</NavLink>
        </Nav.Link>
      </Nav.Item>
      
      
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </header>
  )
}
