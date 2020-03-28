import React from "react"
import Img from "gatsby-image"

const Company = ({ company: { name, url, logo } }) => {
  return (
    <div className="col-lg-3 col-md-6 text-center">
      <div className="mt-4 mb-4">
        <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
          {logo && <Img fixed={logo} />}
        </a>
      </div>
    </div>
  )
}

export default Company
