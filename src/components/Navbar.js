import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class NavHeader extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">React-Pagination</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ color: "white" }}>
            Page: {this.props.totalPages}/{this.props.currentPage}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
