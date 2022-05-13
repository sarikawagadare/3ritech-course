import React, { Component } from 'react'
import{Nav,NavDropdown,Navbar}from 'react-bootstrap'
import {ButtonToolbar,InputGroup,FormControl } from 'react-bootstrap'
export default class NavbarCompo extends Component {
  render() {
    return (
      <div style={{background:"#fa601f"}}>
        <Navbar bg="gray" expand="lg">
 
    <Navbar.Brand href="#home">
    <img
    className="d-block w-100"
    src="/../Images/logo.jpg"
     alt="First slide"
     />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">about</Nav.Link>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>

     {/* search button */}
     <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
    <InputGroup>
      {/* <InputGroup.Text id="btnGroupAddon">Serch Here</InputGroup.Text> */}
      <FormControl
        type="text"
        placeholder="search your products"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>
  </ButtonToolbar>

</Navbar>


     


      </div>
    )
  }
}
