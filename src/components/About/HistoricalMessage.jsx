/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Paper } from "@mui/material";

const HistoricalMessage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });




  // Hiệu ứng cho tiêu đề Card khi hover
  const cardTitleVariants = {
    initial: { color: "#343a40" },
    hover: {
      color: "rgb(67, 150, 233)",
      transition: { duration: 0.3 },
    },
  };

  // Hiệu ứng cho văn bản Card khi hover
  const cardTextVariants = {
    initial: { color: "#6c757d" },
    hover: {
      color: "#212529",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="mb-5" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-center mb-5"
          initial="initial"
          animate="animate"
          style={{
            position: "relative",
            backgroundSize: "200% 200%",
            color: "rgb(237, 62, 50)",
            fontWeight: "bold",
            fontSize: "2.5rem",
          }}
        >
          Ý NGHĨA LỊCH SỬ
          <span
            style={{
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "4px",
              backgroundColor: "#007bff",
              borderRadius: "2px",
            }}
          />
        </motion.h2>
        <Row className="g-4">
          <Col md={6}>
            <motion.div
              initial={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.4)",
                backgroundColor: "#f8f9fa",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <Card
                className="h-100 border-0"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <Paper elevation={3} sx={{ padding: 2 }} className="p-4">
                  <motion.div variants={cardTitleVariants}>
                    <Card.Title
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      Chủ Tịch Hồ Chí Minh
                    </Card.Title>
                  </motion.div>
                  <motion.div variants={cardTextVariants}>
                    <Card.Text
                      elevation={3}
                      style={{ fontSize: "1rem", lineHeight: 1.6 }}
                    >
                      Chủ tịch Hồ Chí Minh - vị lãnh tụ vĩ đại của dân tộc Việt
                      Nam, người đã dẫn dắt nhân dân ta đi từ thắng lợi này đến
                      thắng lợi khác, giành lại độc lập, tự do cho Tổ quốc.
                    </Card.Text>
                  </motion.div>
                </Paper>
              </Card>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.4)",
                backgroundColor: "#f8f9fa",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <Card
                className="h-100 border-0"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <Card.Body className="p-4">
                  <motion.div variants={cardTitleVariants}>
                    <Card.Title
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      50 Năm Thống Nhất
                    </Card.Title>
                  </motion.div>
                  <motion.div variants={cardTextVariants}>
                    <Card.Text style={{ fontSize: "1rem", lineHeight: 1.6 }}>
                      Ngày 30 tháng 4 năm 1975 đã đi vào lịch sử dân tộc như một
                      mốc son chói lọi, đánh dấu thắng lợi hoàn toàn của cuộc
                      kháng chiến chống Mỹ cứu nước, giải phóng miền Nam, thống
                      nhất đất nước.
                    </Card.Text>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </section>
  );
};

export default HistoricalMessage;
