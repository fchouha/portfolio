import React from "react"

import "./contact.scss"

const Contact = () => (
  <section className="page-section bg-light" id="contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="mt-0">{`Let's Get In Touch!`}</h2>
          <hr className="divider mt-4 mb-5" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
          <a className="icon-link" href="mailto:chouha.fadi@gmail.com">
            <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
          </a>
          <a className="d-block" href="mailto:chouha.fadi@gmail.com">
            {"chouha.fadi@gmail.com"}
          </a>
        </div>
        <div className="col-lg-4 mr-auto text-center">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/fadi-chouha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-3x mb-3 text-muted"></i>
          </a>
          <a
            className="d-block"
            href="https://www.linkedin.com/in/fadi-chouha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"www.linkedin.com/in/fadi-chouha"}
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
