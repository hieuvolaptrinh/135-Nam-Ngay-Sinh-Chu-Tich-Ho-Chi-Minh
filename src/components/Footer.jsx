/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventIcon from "@mui/icons-material/Event";
import QuizIcon from "@mui/icons-material/Quiz";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: "#1976D2",
        padding: "50px 0 20px",
        fontFamily: "'Roboto', sans-serif",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Container>
        <Row>
          {/* Logo and Description */}
          <Col lg={4} md={8} sm={6} xs={12}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#ffffff",
                  fontWeight: "700",
                  marginBottom: "20px",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "50px",
                    height: "3px",
                    backgroundColor: "#FFD700",
                    borderRadius: "2px",
                  },
                }}
              >
                CHÀO MỪNG
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#000000",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                  opacity: 0.9,
                  fontSize: "16px",
                  textAlign: "justify",
                }}
              >
                Kỷ niệm 135 năm ngày sinh Chủ tịch Hồ Chí Minh (19/5/1890 –
                19/5/2025). <br /> Chào mừng 50 năm Giải phóng miền Nam, thống
                nhất đất nước (30/4/1975 – 30/4/2025).
                <br />
                Tôn vinh chiến thắng vĩ đại của dân tộc, khẳng định ý chí độc
                lập, tự chủ và khát vọng hòa bình.
              </Typography>
            </Box>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={4} sm={6} xs={12}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#ffffff",
                  fontWeight: "600",
                  marginBottom: "20px",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "40px",
                    height: "2px",
                    backgroundColor: "#FFD700",
                    borderRadius: "2px",
                  },
                }}
              >
                SỰ KIỆN
              </Typography>
              <Box
                component="ul"
                sx={{ listStyle: "none", padding: 0, margin: 0 }}
              >
                {[
                  {
                    to: "/",
                    text: "Trang Chủ",
                    icon: <HomeIcon sx={{ mr: 1, fontSize: 20 }} />,
                  },
                  {
                    to: "/history",
                    text: "Con Đường Độc Lập",
                    icon: <HistoryIcon sx={{ mr: 1, fontSize: 20 }} />,
                  },
                  {
                    to: "/about",
                    text: "Góc Tự Hào",
                    icon: <EmojiEventsIcon sx={{ mr: 1, fontSize: 20 }} />,
                  },
                  {
                    to: "/events",
                    text: "Hoạt Động Kỷ Niệm",
                    icon: <EventIcon sx={{ mr: 1, fontSize: 20 }} />,
                  },
                  {
                    to: "/quiz-history",
                    text: "Đố vui lịch sử",
                    icon: <QuizIcon sx={{ mr: 1, fontSize: 20 }} />,
                  },
                ].map((link, index) => (
                  <Box component="li" key={index} sx={{ mb: 1 }}>
                    <NavLink to={link.to} style={{ textDecoration: "none" }}>
                      <Box
                        sx={{
                          color: "#000000",
                          display: "flex",
                          alignItems: "center",
                          padding: "8px 0",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateX(10px) scale(1.05)",
                            opacity: 1,
                            color: "#e53935",
                          },
                        }}
                      >
                        {link.icon}
                        {link.text}
                      </Box>
                    </NavLink>
                  </Box>
                ))}
              </Box>
            </Box>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={8} sm={6} xs={12}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#ffffff",
                  fontWeight: "600",
                  marginBottom: "20px",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "40px",
                    height: "2px",
                    backgroundColor: "#FFD700",
                    borderRadius: "2px",
                  },
                }}
              >
                LIÊN HỆ
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOnIcon
                  sx={{ fontSize: 24, color: "#000000", mr: 2 }}
                />
                <Typography
                  variant="body1"
                  sx={{ color: "#000000", opacity: 0.9, fontSize: "16px" }}
                >
                  Đại học Sư phạm Kỹ thuật Đà Nẵng, 48 Cao Thắng, Hải Châu, Đà
                  Nẵng
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmailIcon sx={{ fontSize: 24, color: "#000000", mr: 2 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "#000000", opacity: 0.9, fontSize: "16px" }}
                >
                  dhspktdn@ute.udn.vn
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon sx={{ fontSize: 24, color: "#000000", mr: 2 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "#000000", opacity: 0.9, fontSize: "16px" }}
                >
                  (0236) 3822571
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <AccessTimeIcon
                  sx={{ fontSize: 24, color: "#000000", mr: 2 }}
                />
                <Typography
                  variant="body1"
                  sx={{ color: "#000000", opacity: 0.9, fontSize: "16px" }}
                >
                  Thứ 2 - Thứ 6: 8:00 - 17:00
                </Typography>
              </Box>
            </Box>
          </Col>

          {/* Map */}
          <Col lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#ffffff",
                  fontWeight: "600",
                  marginBottom: "20px",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "40px",
                    height: "2px",
                    backgroundColor: "#FFD700",
                    borderRadius: "2px",
                  },
                }}
              >
                ĐỊA CHỈ
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "180px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  border: "2px solid rgba(255, 215, 0, 0.3)",
                  mb: 2,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.482645829836!2d108.21084937335148!3d16.07734793922404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184792140755%3A0xd4058cb259787dac!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgUGjhuqFtIEvhu7kgdGh14bqtdCAtIMSQ4bqhaSBo4buNYyDEkMOgIE7hurVuZw!5e1!3m2!1svi!2s!4v1745867057824!5m2!1svi!2s"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                />
              </Box>
            </Box>
          </Col>
        </Row>

        <Box
          component="hr"
          sx={{
            borderColor: "rgba(0,0,0,0.1)",
            margin: "20px 0",
            boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
          }}
        />

        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#000000",
              margin: 0,
              opacity: 0.9,
              fontSize: "16px",
            }}
          >
            © 2025 Kỷ niệm 50 năm Ngày Giải phóng miền Nam, 135 năm Ngày sinh
            Chủ tịch Hồ Chí Minh
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#000000",
              margin: "10px 0 0",
              opacity: 0.8,
              fontSize: "16px",
            }}
          >
            Design by: Võ Nguyễn Đại Hiếu
          </Typography>
        </Box>
      </Container>
    </motion.footer>
  );
};

export default Footer;
