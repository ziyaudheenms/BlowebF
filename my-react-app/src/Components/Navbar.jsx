import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from './Logo.png'
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
function Bar() {
  const [User, SetUser] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("access-token");
  const Del = () => {
    localStorage.setItem("access-token","")
    localStorage.setItem("UserName","")
    window.location.reload();
  }

  const GetUser = () => {
    axios
      .get("http://localhost:8000/api/v1/blog/view/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        SetUser(res.data.message)
       
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetUser()
  })
  return (
    <Navbar expand="lg" className="bg-white">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light jersey-25-regular">
          <h1 className="Head fs-1 text-center" style={{
            color:'blue'
          }}>Bloweb</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to='/home' style={{
            textDecoration:'none'
          }}>
            <Nav.Link href="/" className="fs-5 text-dark fw-lighter" style={{
              textDecoration:'none'
            }}>
              Home
            </Nav.Link>
            </Link>
            <Link to='/Users' style={{
            textDecoration:'none'
          }}>
            <Nav.Link href="/Users" className="fs-5 text-dark fw-lighter" style={{
              textDecoration:'none'
            }}>
              Users
            </Nav.Link>
            </Link>
            <NavLink to='/Profile' style={{
            textDecoration:'none'
          }}>
            <Nav.Link href="/Profile" className="fs-5 text-dark fw-lighter">
              Profile
            </Nav.Link>
            </NavLink>
            <NavLink to='/Create' style={{
            textDecoration:'none'
          }}>
            <Nav.Link href="/Create" className="fs-5 text-dark fw-lighter">
              Create
            </Nav.Link>
           
            </NavLink>
            <NavLink to='/Users' style={{
            textDecoration:'none'
          }}>
           
            </NavLink>
          </Nav>
          {User ?(
            <NavLink to='/' style={{
              textDecoration:'none'
            }}>
               <Button variant="outline-danger" className="mx-2 fs-5 btn" onClick={() => Del()}>
              Logout
            </Button>
            </NavLink>
          ):(
            <NavLink to='/' style={{
              textDecoration:'none'
            }}>
               <Button variant="outline-danger" className="mx-2 fs-5 btn">
              Login
            </Button>
            </NavLink>
          )}
         

          

          <NavLink to='/SignUp' style={{
            textDecoration:'none'
          }}>
          <Button variant="outline-primary" className="fs-5 btn">
            SignUp
          </Button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;
