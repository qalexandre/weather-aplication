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
          <Navbar.Item href="https://bulma.io/">Home</Navbar.Item>
          <Navbar.Item dropdown hoverable>
            <Navbar.Link href="https://bulma.io/documentation/overview/start/">
              Docs
            </Navbar.Link>
            <Navbar.Dropdown boxed>
              <Navbar.Item href="https://bulma.io/documentation/overview/start/">
                Overview
              </Navbar.Item>
              <Navbar.Item href="https://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </Navbar.Item>
              <Navbar.Item href="https://bulma.io/documentation/columns/basics/">
                Columns
              </Navbar.Item>
              <Navbar.Item href="https://bulma.io/documentation/layout/container/">
                Layout
              </Navbar.Item>
              <Navbar.Item href="https://bulma.io/documentation/form/general/">
                Form
              </Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item href="https://bulma.io/documentation/elements/box/">
                Elements
              </Navbar.Item>
              <Navbar.Item
                active
                href="https://bulma.io/documentation/components/breadcrumb/"
              >
                Components
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Segment>
        <Navbar.Segment align="end">
          <Navbar.Item as="div">
            <Field kind="group">
              <Control>
                <Button as="a" color="info" href="https://twitter.com">
                  <Icon>
                    <FontAwesomeIcon icon={FaTwitter} />
                  </Icon>
                  <span>Tweet</span>
                </Button>
              </Control>
              <Control>
                <Button
                  as="a"
                  color="primary"
                  href="https://github.com/dfee/rbx"
                >
                  <Icon>
                    <FontAwesomeIcon icon={FaGithub} />
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
