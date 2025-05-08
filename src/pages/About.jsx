/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col, Accordion, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";
import HistoricalMessage from "../components/About/HistoricalMessage";
import Celebrate from "../components/About/Celebrate";
import LeaderMessage from "../components/About/LeaderMessage";
import AboutHCM from "../components/About/AboutHCM";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Row>
          <Col xs={12} sm={6} md={6} className="text-center mb-4">
            <AboutHCM />
          </Col>
          <Col xs={12} sm={6} md={6} className="text-center mb-4">
            {" "}
            <LeaderMessage />
          </Col>
        </Row>
      </motion.div>
      <HistoricalMessage />

      <Celebrate />
    </Container>
  );
};

export default About;
