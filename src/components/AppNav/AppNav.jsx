import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import {NavLink, Link} from "react-router-dom"
import NavDropdown from "react-bootstrap/NavDropdown";

const AppNav = () => {
    return <Navbar bg="dark" expand="lg" variant="dark">
        <NavLink className="navbar-brand" to="/">Quotes App</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <NavLink to="/quotes" className="nav-link">Quotes</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavDropdown title="Quotes Category" id="basic-nav-dropdown">
                    <Link className="dropdown-item" to="/quotes/humor">Humor</Link>
                    <Link className="dropdown-item" to="/quotes/motivation">Motivation</Link>
                    <Link className="dropdown-item" to="/quotes/star-wars">Star Wars</Link>
                    <NavDropdown.Divider/>
                    <Link className="dropdown-item" to="/quotes/saying">Saying</Link>
                    <Link className="dropdown-item" to="/quotes/famous-people">Famous People</Link>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}
export default AppNav