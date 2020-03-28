import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from "./scroller"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  }

  render() {
    return (
      <>
        <Navbar
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <div className="container">
            <a
              className="navbar-brand js-scroll-trigger"
              href="#page-top"
              onClick={Scroller.handleAnchorScroll}
            >
              {"Fadi Chouha"}
            </a>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy
                  className="navbar-nav"
                  items={["technologies", "companies", "projects", "contact"]}
                  currentClassName="active"
                  rootEl={"#mainNav"}
                  offset={-75}
                >
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#technologies"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      {"Technologies"}
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#companies"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      {"Companies"}
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#projects"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      {"Projects"}
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#contact"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      {"Contact"}
                    </Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">
                  {"Welcome to my portfolio!"}
                </h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">
                  {`My name is Fadi. I am a full-stack software engineer based in
                  Montreal. During my 10 years journey in web development, I've
                  built web apps for various kinds of businesses. I'm passionate
                  about creating modern-looking, responsive and performant web
                  apps that make users lives easier.`}
                </p>
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#technologies"
                  onClick={Scroller.handleAnchorScroll}
                >
                  {"More about me"}
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
