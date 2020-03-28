import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import Company from "../components/company"
import Contact from "../components/contact"

const IndexPage = ({ data }) => {
  const [openedProject, setOpenedProject] = useState()

  const handlePortfolioClick = (project, e) => {
    e.preventDefault()
    setOpenedProject(project)
  }

  const { allCompaniesJson, allSkillsJson } = data

  const companies = allCompaniesJson.edges.map(
    ({ node: { projects, ...company } }) => ({
      ...company,
      projects: projects || [],
      logo: data[`${company.id}Logo`].childImageSharp.fixed,
    })
  )

  return (
    <Layout>
      <SEO />
      <section className="page-section bg-dark text-white" id="technologies">
        <div className="container">
          <h2 className="text-center mb-4">{"I'm experienced in"}</h2>
          <hr className="divider my-4" />
          <div className="row">
            {allSkillsJson.edges.map(({ node }, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6 d-flex flex-column align-items-center mt-4"
              >
                {/* <div> */}
                <h4>{node.title}</h4>
                <ul className="p-0">
                  {node.skills.map((skill, j) => (
                    <li key={j}>{skill}</li>
                  ))}
                </ul>
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" id="companies">
        <div className="container">
          <h2 className="text-center mt-0">{"Companies I worked for"}</h2>
          <hr className="divider my-4" />
          <div className="row align-items-center">
            {companies.map(company => (
              <Company key={company.id} company={company} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            {companies.map(company =>
              company.projects.map((project, projIndex) => (
                <div key={projIndex} className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/6.jpg"
                    onClick={e => {
                      handlePortfolioClick(project, e)
                    }}
                  >
                    <Img
                      sizes={{
                        ...project.thumb.childImageSharp.fluid,
                        aspectRatio: 9 / 5,
                      }}
                    />
                    <div className="portfolio-box-caption p-3">
                      <div className="project-category text-white-50">
                        {project.name}
                      </div>
                    </div>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Contact />

      <PortfolioModal
        show={openedProject !== undefined}
        onHide={() => setOpenedProject(undefined)}
      >
        {openedProject && (
          <>
            <PortfolioCarousel images={openedProject.images} />
            <h4 className="text-primary text-uppercase">
              {openedProject.name}
            </h4>
            <p>{openedProject.description}</p>
            <div>
              <strong>{"Techs: "}</strong>
              {openedProject.techs.join(", ")}
            </div>
          </>
        )}
      </PortfolioModal>
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  query {
    allCompaniesJson {
      edges {
        node {
          id
          name
          url
          projects {
            id
            name
            description
            roles
            techs
            url
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            images {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    doremiLogo: file(relativePath: { eq: "logos/doremi.png" }) {
      childImageSharp {
        fixed(height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dolbyLogo: file(relativePath: { eq: "logos/dolby.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    klickjamLogo: file(relativePath: { eq: "logos/klickjam.png" }) {
      childImageSharp {
        fixed(height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tbcoLogo: file(relativePath: { eq: "logos/tbco.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allSkillsJson {
      edges {
        node {
          title
          skills
        }
      }
    }
  }
`
