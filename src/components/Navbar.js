import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/cjs/Navbar";
import {Link} from "react-router-dom";
export default function Navibar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Navbar.Brand>Excercise Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ">
                    <Nav.Link><Link to="/" className="nav-link">Exercises</Link></Nav.Link>
                    <Nav.Link ><Link to="/create" className="nav-link">Create Exercise</Link></Nav.Link>
                    <Nav.Link><Link to="/user" className="nav-link">Create User</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};