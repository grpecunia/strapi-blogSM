import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo192.png"


import CATEGORIES_QUERY from "../../queries/category/categories";

const Navigation = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <React.Fragment>
              <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                style={{ backgroundColor: "black", zIndex: "100" }}
                className="nav"
              >
                <Navbar.Brand as={Link} to="/">
                  <img
                    alt="Strategic Management"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  StrategicManagement.io
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">

                    {categories.map((category, i) => {
                      return (
                        <NavDropdown.Item key={category.id}>
                            <Link
                              to={`/category/${category.id}`}
                              className="uk-link-reset"
                            >
                              {category.name}
                            </Link>
                        </NavDropdown.Item>
                      );
                    })}
                    </NavDropdown>
                    <Nav.Link>
                      About
                    </Nav.Link>
                    <Nav.Link >
                        Contact
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </React.Fragment>
          );
        }}
      </Query>
    </div>
  );
};

export default Navigation;
