/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaQuoteLeft, FaCalendarAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Box, Typography, Button } from "@mui/material";

import { historicalEvents } from "../data/HistorysEvent";
import HistoryDetail from "../components/History/HistoryDetail";
import AboutHCM from "../components/About/AboutHCM";

const History = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setActiveTheme] = useState("all");
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

  const filteredEvents =
    activeTheme === "all"
      ? historicalEvents
      : historicalEvents.filter((event) => event.theme === activeTheme);

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
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="timeline-item"
            >
              <div>
                <div>
                  <p className="h2 text-danger">{event.year}</p>
                </div>
                <Card className="shadow-sm">
                  <Card.Body className="p-3">
                    <Row className="g-2">
                      {event.events.map((subEvent, subIndex) => (
                        <Col
                          key={subIndex}
                          xs={event.events.length === 1 ? 12 : 6}
                        >
                          <Box>
                            <div className="mb-2">
                              <img
                                src={subEvent.images[0]}
                                alt={subEvent.title}
                                className="img-fluid rounded"
                                style={{
                                  width: "100%",
                                  height: "350px",
                                  objectFit: "cover",
                                  objectPosition: "center",
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
                  </Card.Body>
                </Card>
              </div>
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
