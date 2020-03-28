import React from "react"
import PropTypes from "prop-types"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"

import "./carousel.scss"

const PortfolioCarousel = ({ images }) => {
  const carouselItems = images.map((image, index) => (
    <Carousel.Item key={index}>
      <figure>
        <Img fluid={image.childImageSharp.fluid} />
        <figcaption>
          <div className="bottom-bar">
            <div className="counter">
              {index + 1} of {images.length}
            </div>
          </div>
        </figcaption>
      </figure>
    </Carousel.Item>
  ))

  return (
    <Carousel interval={null} indicators={false} slide={false}>
      {carouselItems}
    </Carousel>
  )
}

PortfolioCarousel.propTypes = {
  images: PropTypes.array.isRequired,
}

export default PortfolioCarousel
