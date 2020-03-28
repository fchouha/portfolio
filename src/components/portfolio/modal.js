import React from "react"
import PropTypes from "prop-types"
import { Modal } from "react-bootstrap"

import "./modal.scss"

const PortfolioModal = ({ show, onHide, children }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}

PortfolioModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default PortfolioModal
