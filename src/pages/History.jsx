/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";
import { FaQuoteLeft, FaChevronUp, FaCalendarAlt } from "react-icons/fa";
import { Typography } from "@mui/material";
import { historicalEvents } from "../data/Historys";
const History = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setActiveTheme] = useState("all");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <>
      {" "}
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
            align="center"
            sx={{
              mb: 6,
              fontSize: {
                color: "rgb(241, 76, 64)",
                xs: "1rem",
                sm: "1.5rem",
                md: "1.7rem",
                lg: "2.25rem",
              },
              fontWeight: "bold",
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
            }}
          >
            DẤU ẤN LỊCH SỬ
          </Typography>
          <Typography
            variant="h5"
            align="justify"
            sx={{
              fontWeight: "bold",

              lineHeight: 1.8,
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            Từ làng Sen năm 1890, Chủ tịch Hồ Chí Minh ra đời, mở đầu cho hành
            trình vĩ đại của dân tộc Việt Nam đi tìm con đường độc lập. Năm
            1945, cách mạng Tháng Tám và Tuyên ngôn Độc lập ngày 2/9 đã khai
            sinh nước Việt Nam Dân chủ Cộng hòa. Giai đoạn 1954 đánh dấu chiến
            thắng Điện Biên Phủ “lừng lẫy năm châu”, mở ra kỳ nguyên mới cho hòa
            bình và thống nhất. Sau Hiệp định Genève, đất nước tạm chia cắt,
            nhưng tinh thần đoàn kết vẫn bền chặt. Và rồi ngày 30/4/1975, đại
            thắng mùa Xuân đưa dân tộc bước vào kỷ nguyên độc lập, thống nhất và
            phát triển. Từng mốc son là một bản hùng ca, thấm đẫm máu, nước mắt
            và niềm tự hào của cả dân tộc Việt Nam.
          </Typography>
        </motion.div>

        {/* Timeline */}
        <div className="timeline-container">
          <div ref={ref} className="timeline">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="timeline-item"
              >
                <div className="timeline-content">
                  <div className="timeline-year">
                    <p className="h2 text-danger">{event.year}</p>
                  </div>
                  <Card className="shadow-sm">
                    <Card.Body className="p-3">
                      <Row className="g-2">
                        {event.events.map((subEvent, subIndex) => (
                          <Col
                            key={subIndex}
                            xs={event.events.length === 1 ? 12 : 6} // 1 sự kiện: full width, 2 sự kiện: chia đôi
                          >
                            <div className="event-item">
                              <div className="event-image mb-2">
                                <img
                                  src={subEvent.images[0]}
                                  alt={subEvent.title}
                                  className="img-fluid rounded"
                                  style={{
                                    width: "100%", // Full width trong cột
                                    height: "350px", // Chiều cao cố định
                                    objectFit: "cover", // Giữ tỷ lệ, cắt phần thừa
                                    objectPosition: "center", // Căn giữa hình
                                  }}
                                />
                              </div>
                              <h3 className="mb-1">{subEvent.title}</h3>
                              <p className="text-muted small mb-1">
                                <FaCalendarAlt className="me-1" />
                                {subEvent.date}
                              </p>
                              <blockquote className="blockquote">
                                <FaQuoteLeft className="text-primary" />
                                <p className="mb-0">{subEvent.quote}</p>
                              </blockquote>
                              <Button
                                variant="outline-primary"
                                size="sm"
                                onClick={() => handleMarkerClick(subEvent)}
                              >
                                Xem chi tiết
                              </Button>
                            </div>
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

        {/* Xem chi tiết */}
      </Container>
    </>
  );
};

export default History;
