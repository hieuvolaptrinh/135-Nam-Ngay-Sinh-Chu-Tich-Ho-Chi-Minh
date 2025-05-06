/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

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
      }}
    >
      <Container>
        <Row>
          {/* Logo and Description */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "15px",
              }}
            >
              Dấu Ấn 50 Năm
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#000000",
                lineHeight: "1.7",
                marginBottom: "15px",
                opacity: "0.9",
              }}
            >
              Kỷ niệm 50 năm Ngày Thống nhất đất nước (30/4/1975 - 30/4/2025) và
              135 năm Ngày sinh Chủ tịch Hồ Chí Minh (19/5/1890 - 19/5/2025).
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <h4
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#ffffff",
                marginBottom: "15px",
              }}
            >
              Liên Kết
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { href: "/", text: "Trang Chủ" },
                { href: "/about", text: "Giới Thiệu" },
                { href: "/history", text: "Dấu Ấn Lịch Sử" },
                { href: "/events", text: "Sự Kiện" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "14px",
                      color: "#000000",
                      textDecoration: "none",
                      display: "block",
                      padding: "8px 0",
                      transition: "all 0.3s ease",
                      position: "relative",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#ffffff";
                      e.target.style.paddingLeft = "10px";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#000000";
                      e.target.style.paddingLeft = "0";
                    }}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <h4
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#ffffff",
                marginBottom: "15px",
              }}
            >
              Liên Hệ
            </h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <FaMapMarkerAlt
                style={{
                  fontSize: "16px",
                  color: "#ffffff",
                  marginRight: "10px",
                }}
              />
              <span style={{ fontSize: "14px", color: "#000000" }}>
                Đại học Sư phạm Kỹ thuật Đà Nẵng, 48 Cao Thắng, Hải Châu, Đà
                Nẵng
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <FaEnvelope
                style={{
                  fontSize: "16px",
                  color: "#ffffff",
                  marginRight: "10px",
                }}
              />
              <span style={{ fontSize: "14px", color: "#000000" }}>
                vndhieuak@gmail.com
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <FaPhone
                style={{
                  fontSize: "16px",
                  color: "#ffffff",
                  marginRight: "10px",
                }}
              />
              <span style={{ fontSize: "14px", color: "#000000" }}>
                0911735883
              </span>
            </div>
          </Col>

          {/* Map */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <h4
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#ffffff",
                marginBottom: "15px",
              }}
            >
              Địa Chỉ
            </h4>
            <div
              style={{
                width: "100%",
                height: "160px",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
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
            </div>
          </Col>
        </Row>

        <hr />

        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: "#000000",
            margin: "0",
            opacity: "0.8",
          }}
        >
          Design by: Võ Nguyễn Đại Hiếu
        </p>
      </Container>
    </motion.footer>
  );
};

export default Footer;
