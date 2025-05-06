/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Accordion, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";

const Celebrate = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const timelineSteps = [
    {
      year: "2020",
      event: "Kỷ niệm 130 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
    {
      year: "2015",
      event: "Kỷ niệm 125 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
    {
      year: "2010",
      event: "Kỷ niệm 120 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
    {
      year: "2005",
      event: "Kỷ niệm 115 năm ngày sinh Chủ tịch Hồ Chí Minh",
    },
  ];
  const galleryImages = [
    "./images/HATB1.jpg",
    "./images/HATB3.jpg",
    "./images/HATB4.jpg",
    "./images/HATB2.jpg",
    "./images/HATB5.jpg",
    "./images/HATB6.jpg",
  ];
  return (
    <>
      <div className="row">
        <div className="col-md-5 mb-8">
          <motion.h2
            className="text-center mb-5"
            initial="initial"
            animate="animate"
            style={{
              position: "relative",
              backgroundSize: "200% 200%",
              color: "rgb(237, 62, 50)",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            CÁC LẦN KỶ NIỆM TRƯỚC
          </motion.h2>
          <Box sx={{ width: "100%" }}>
            <Stepper orientation="vertical">
              {timelineSteps.map((step, index) => (
                <Step key={index} active={true}>
                  <StepLabel>
                    <Typography variant="h6">{step.year}</Typography>
                    <Typography>{step.event}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* Gallery Section */}
        </div>
        <div className="col-md-7 mb-8">
          <motion.h2
            className="text-center mb-5"
            initial="initial"
            animate="animate"
            style={{
              position: "relative",
              backgroundSize: "200% 200%",
              color: "rgb(237, 62, 50)",
              fontWeight: "bold",
              fontSize: "rem",
            }}
          >
            HÌNH ẢNH TIÊU BIỂU
          </motion.h2>
          <Row className="g-4">
            {galleryImages.map((image, index) => (
              <Col key={index} xs={12} sm={6} md={6}>
                <div
                initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-100">
                    <img
                      variant="top"
                      src={image}
                      className="img-fluid"
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};
export default Celebrate;
