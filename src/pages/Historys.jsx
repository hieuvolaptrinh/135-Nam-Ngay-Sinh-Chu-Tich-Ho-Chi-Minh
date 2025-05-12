/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaQuoteLeft, FaCalendarAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Box, Typography, Button, CardMedia } from "@mui/material";

import { historicalEvents } from "../data/HistorysEvent";
import HistoryDetail from "../components/History/HistoryDetail";
import AboutHCM from "../components/About/AboutHCM";

const History = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [selectedMarker, setSelectedMarker] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const handleMarkerClick = (event) => {
    setSelectedMarker(event);
    setSelectedYear(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedYear(null);
  };

  return (
    <Container className="py-5">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <Typography
          variant="h3"
          mb={2}
          align="center"
          sx={{
            position: "relative",
            color: "rgb(241, 76, 64)",
            fontWeight: "bold",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
          }}
        >
          DẤU ẤN LỊCH SỬ
        </Typography>
        <Box>
          <AboutHCM />
        </Box>
      </motion.div>

      {/* Timeline */}
      <div className="timeline-container">
        <div className="timeline">
          {historicalEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "rgb(241, 76, 64)",
                  }}
                >
                  {event.year}
                </Typography>

                <Card className="shadow-sm">
                  <Card.Body className="p-3">
                    {event.events.length == 2 ? (
                      <Row>
                        {event.events.map((subEvent, index) => (
                          <Col md={12} lg={6} key={`${event.year}-${index}`}>
                            <Box>
                              <div className="mb-2">
                                <CardMedia
                                  component="img"
                                  image={subEvent.images[0]}
                                  alt={subEvent.title}
                                  sx={{
                                    width: "100%",

                                    height: {
                                      xs: 400,
                                      sm: 300,
                                      md: 200,
                                      lg: 400,
                                    },
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    borderRadius: 2,
                                  }}
                                />
                              </div>
                              <Typography
                                variant="h4"
                                sx={{ fontWeight: "bold" }}
                              >
                                {subEvent.title}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  my: 2,
                                }}
                              >
                                <FaRegCalendarAlt
                                  size={30}
                                  style={{ marginRight: 8 }}
                                />
                                {subEvent.date}
                              </Typography>
                              <blockquote className="blockquote">
                                <FaQuoteLeft className="text-primary" />
                                <p className="mb-0">{subEvent.quote}</p>
                              </blockquote>
                              <Button
                                variant="contained"
                                onClick={() => handleMarkerClick(subEvent)}
                              >
                                Xem chi tiết
                              </Button>
                            </Box>
                          </Col>
                        ))}
                      </Row>
                    ) : (
                      <Row>
                        <Col md={12} lg={event.events.length === 1 ? 12 : 6}>
                          <Box>
                            <div className="mb-2">
                              <CardMedia
                                component="img"
                                image={event.events[0].images[0]}
                                alt={event.events[0].title}
                                sx={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "cover",
                                  objectPosition: "center",
                                  borderRadius: 2,
                                }}
                              />
                            </div>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: "bold" }}
                            >
                              {event.events[0].title}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                my: 2,
                              }}
                            >
                              <FaRegCalendarAlt
                                size={30}
                                style={{ marginRight: 8 }}
                              />
                              {event.events[0].date}
                            </Typography>
                            <blockquote className="blockquote">
                              <FaQuoteLeft className="text-primary" />
                              <p className="mb-0">{event.events[0].quote}</p>
                            </blockquote>
                            <Button
                              variant="contained"
                              onClick={() => handleMarkerClick(event.events[0])}
                            >
                              Xem chi tiết
                            </Button>
                          </Box>
                        </Col>
                      </Row>
                    )}
                  </Card.Body>
                </Card>
              </Box>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      <HistoryDetail
        show={showModal}
        onHide={handleCloseModal}
        selectedEvent={selectedYear}
      />
    </Container>
  );
};

export default History;
