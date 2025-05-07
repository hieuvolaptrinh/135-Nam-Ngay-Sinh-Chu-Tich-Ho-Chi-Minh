/* eslint-disable no-unused-vars */
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ReactPlayer from "react-player";
import { FaQuoteLeft, FaCalendarAlt } from "react-icons/fa";
import { Typography } from "@mui/material";
import { historicalEvents } from "../data/Historys";

const ShowDetail = ({ showModal, handleCloseModal, selectedYear }) => {
  return (
    <Modal
      style={{ paddingTop: "100px" }}
      show={showModal}
      onHide={handleCloseModal}
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{selectedYear?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <p className="text-muted">
            <FaCalendarAlt className="me-2" />
            {selectedYear?.date}
          </p>
          <p>{selectedYear?.description}</p>
        </div>

        {/* Video Player */}
        {selectedYear?.video && (
          <div className="ratio ratio-16x9 mb-3">
            <ReactPlayer
              url={selectedYear.video}
              width="100%"
              height="100%"
              controls
            />
          </div>
        )}

        {/* Quote */}
        <blockquote className="blockquote">
          <FaQuoteLeft className="text-primary" />
          <p className="mb-0">{selectedYear?.quote}</p>
        </blockquote>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
