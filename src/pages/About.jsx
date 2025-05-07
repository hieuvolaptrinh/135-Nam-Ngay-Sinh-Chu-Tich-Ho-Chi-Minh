/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col, Accordion, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";
import HistoricalMessage from "../components/About/HistoricalMessage";
import Celebrate from "../components/About/Celebrate";
import LeaderMessage from "../components/About/LeaderMessage";

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
            <h2
              className="text-center mb-5"
              initial="initial"
              animate="animate"
              style={{
                position: "relative",
                backgroundSize: "200% 200%",
                color: "rgb(237, 62, 50)",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Tự Hào Dân Tộc
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
              ></span>
            </h2>

            <Box
              sx={{
                textAlign: "justify",
                display: "flex",
                flexDirection: { xs: "column", sm: "column" }, // Xếp dọc trên mọi màn hình để kiểm soát float
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" }, // 9px (xs), 10px (sm) nếu 1rem = 10px
                  lineHeight: 1.6,
                  textAlign: "justify",
                }}
              >
                {" "}
                <Box
                  component="img"
                  src="./images/bacHoAVT.jpg"
                  alt="Chủ tịch Hồ Chí Minh"
                  sx={{
                    float: { xs: "none", sm: "left" },
                    width: { xs: "120px", sm: "120px", md: "150px" },
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "2px solid #FFD700",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    },
                    mr: { xs: 0, sm: 2 },
                    mb: { xs: 2, sm: 2 },
                  }}
                />
                Sinh ra tại làng Sen, quê hương Nghệ An, từ rất sớm Bác đã rời
                Tổ quốc đi tìm đường cứu nước, bôn ba khắp năm châu để tìm con
                đường giải phóng dân tộc. Với ý chí kiên cường và tấm lòng yêu
                nước thương dân vô hạn, Bác đã đưa cách mạng Việt Nam đến bến bờ
                thắng lợi, giành lại độc lập, thống nhất cho Tổ quốc. Tư tưởng,
                đạo đức, phong cách Hồ Chí Minh – giản dị mà sâu sắc, gần gũi mà
                vĩ đại – mãi là bài học quý báu cho các thế hệ người Việt Nam.
                Cuộc đời của Bác là tấm gương sáng về lòng yêu nước, tinh thần
                kiên cường, đức khiêm nhường và sự tận tụy với nhân dân. Kỷ niệm
                50 năm thống nhất đất nước cũng là dịp để toàn dân tộc khắc ghi
                chiến thắng lịch sử 1975 – thành quả của sự lãnh đạo sáng suốt,
                trong đó ánh sáng tư tưởng Hồ Chí Minh là kim chỉ nam soi đường.
                Ngày nay, tiếp nối con đường Người đã chọn, mỗi người Việt Nam
                mang trong mình trách nhiệm xây dựng đất nước giàu mạnh, văn
                minh – để xứng đáng với hy sinh của các thế hệ đi trước và thực
                hiện khát vọng mà Bác Hồ hằng ấp ủ: “Sánh vai cùng các cường
                quốc năm châu.”
              </Typography>
            </Box>
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
