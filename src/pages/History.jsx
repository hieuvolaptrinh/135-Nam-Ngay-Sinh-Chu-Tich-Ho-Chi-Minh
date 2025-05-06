/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";
import { Howl } from "howler";
import { FaQuoteLeft, FaChevronUp, FaCalendarAlt } from "react-icons/fa";
import { Typography } from "@mui/material";

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

  const historicalEvents = [
    {
      year: "1890",
      theme: "birth",
      title: "19/5/1880",
      events: [
        {
          title:
            "Ngày 19 tháng 5 năm 1890, tại làng Sen, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An, một con người vĩ đại đã ra đời – Chủ tịch Hồ Chí Minh",
          date: "19/5/1890",
          description:
            "Chủ tịch Hồ Chí Minh sinh ra tại làng Sen, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An",
          images: ["./images/NgaySinh.jpg"],
          video: "./videos/135NgaySinh.mp4",
          quote:
            "Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, nhân dân ta được tự do, ai cũng có cơm ăn áo mặc, ai cũng được học hành, sống trong một đất nước hòa bình, ấm no và hạnh phúc.",
        },
      ],
    },
    {
      year: "1945",
      theme: "independence",
      title: "Độc lập dân tộc",
      events: [
        {
          title: "Cách mạng Tháng Tám",
          date: "19/8/1945",
          description: "Cuộc cách mạng vĩ đại của dân tộc Việt Nam",
          images: ["./images/CachMangThang8.jpg"],
          video: "/videos/CachMangThang8.mp4",
          quote:
            "Không có gì quý hơn độc lập tự do, bởi chỉ khi giành được độc lập, nhân dân ta mới thực sự làm chủ vận mệnh của mình, sống cuộc đời tự do, hạnh phúc, và xây dựng một nước Việt Nam hòa bình, thịnh vượng.",
        },
        {
          title: "Quốc khánh 2/9",
          date: "2/9/1945",
          description: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập",
          images: ["./images/QuocKhanh.jpg"],
          video: "/videos/QuocKhanh.mp4",
          quote:
            "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã trở thành một nước tự do, độc lập, không còn là một thuộc địa bị áp bức, để từ đây mỗi người dân Việt Nam được sống trong tự do và bình đẳng.",
        },
      ],
    },
    {
      year: "1954",
      theme: "victory",
      title: "Chiến thắng Điện Biên Phủ",
      events: [
        {
          title: "Chiến dịch Điện Biên Phủ",
          date: "13/3 - 7/5/1954",
          description: 'Chiến thắng "lừng lẫy năm châu, chấn động địa cầu"',
          images: ["./images/DienBienPhu.jpg"],
          video: "/videos/DienBienPhu.mp4",
          quote:
            "Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, không chịu làm nô lệ. Sự quyết tâm ấy đã hun đúc nên một chiến thắng oanh liệt, ghi dấu vàng son vào trang sử dân tộc.",
        },
        {
          title: "Hiệp định Genève",
          date: "20/7/1954",
          description:
            "Ký kết hiệp định chấm dứt chiến tranh, lập lại hòa bình ở Đông Dương",
          images: ["./images/Geneve.jpg"],
          video: "/videos/genever.mp4",
          quote:
            "Hòa bình là quý báu, nhưng độc lập tự do còn quý báu hơn. Chúng ta đấu tranh cho hòa bình không phải bằng mọi giá, mà là để bảo vệ nền độc lập thiêng liêng và quyền sống của dân tộc mình.",
        },
      ],
    },
    {
      year: "1975",
      theme: "reunification",
      title: "Giải phóng miền Nam",
      events: [
        {
          title: "Giải phóng miền Nam",
          date: "30/4/1975",
          description: "Thống nhất đất nước",
          images: ["./images/HATB6.jpg"],
          video: "/videos/DuyetBinh.mp4",
          quote:
            "Đất nước trọn niềm vui, non sông thu về một mối, nhân dân cả nước được sống trong hòa bình, đoàn tụ, cùng nhau xây dựng một tương lai tươi sáng cho Tổ quốc Việt Nam.",
        },
      ],
    },
  ];

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
          trình vĩ đại của dân tộc Việt Nam đi tìm con đường độc lập. Năm 1945,
          cách mạng Tháng Tám và Tuyên ngôn Độc lập ngày 2/9 đã khai sinh nước
          Việt Nam Dân chủ Cộng hòa. Giai đoạn 1954 đánh dấu chiến thắng Điện
          Biên Phủ “lừng lẫy năm châu”, mở ra kỳ nguyên mới cho hòa bình và
          thống nhất. Sau Hiệp định Genève, đất nước tạm chia cắt, nhưng tinh
          thần đoàn kết vẫn bền chặt. Và rồi ngày 30/4/1975, đại thắng mùa Xuân
          đưa dân tộc bước vào kỷ nguyên độc lập, thống nhất và phát triển. Từng
          mốc son là một bản hùng ca, thấm đẫm máu, nước mắt và niềm tự hào của
          cả dân tộc Việt Nam.
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
      <Modal
        style={{
          paddingTop: "100px",
        }}
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
    </Container>
  );
};

export default History;
