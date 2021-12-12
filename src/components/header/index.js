import React from "react";
import { Navigate, Link } from "react-router-dom";
import { Field, Navbar, Control, Button, Icon } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTwitter, FaGithub } from "react-icons/fa";
import WeatherIcon from "../../assets/icons/weather-icon.png";

const Header = () => {
  return (
    <Navbar transparent>
      <Navbar.Brand>
        <Link to="/">
          <Navbar.Item>
            <img
              src={WeatherIcon}
              alt="Bulma: a modern CSS framework based on Flexbox"
              height="28"
            />
          </Navbar.Item>
        </Link>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="start">
          <Navbar.Item href="/">Home</Navbar.Item>
        </Navbar.Segment>
        <Navbar.Segment align="end">
          <Navbar.Item as="div">
            <Field kind="group">
              <Control>
                <Button
                  as="a"
                  color="black"
                  href="https://github.com/qalexandre"
                  target="blank"
                >
                  <Icon>
                    <FaGithub />
                  </Icon>
                  <span>GitHub</span>
                </Button>
              </Control>
            </Field>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
};

export default Header;
