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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            position: "relative",
            mb: 6,

            color: "rgb(241, 76, 64)",
            fontWeight: "bold",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
          }}
        >
          KỶ NIỆM 135 NĂM NGÀY SINH CHỦ TỊCH HỒ CHÍ MINH VÀ 50 NĂM THỐNG NHẤT
          ĐẤT NƯỚC{" "}
        </Typography>

        <p
          className="lead mb-5"
          style={{
            textAlign: "justify",
            display: "block",
          }}
        >
          Ngày 19 tháng 5 năm 1890, tại làng Sen, xã Kim Liên, huyện Nam Đàn,
          tỉnh Nghệ An, một con người vĩ đại đã ra đời – Chủ tịch Hồ Chí Minh,
          vị lãnh tụ thiên tài, người thầy vĩ đại của cách mạng Việt Nam. Cuộc
          đời và sự nghiệp của Người gắn liền với hành trình tìm đường cứu nước,
          dẫn dắt dân tộc ta giành độc lập, tự do và xây dựng Tổ quốc Việt Nam
          xã hội chủ nghĩa. Năm 2025, toàn Đảng, toàn dân, toàn quân ta trang
          trọng tổ chức kỷ niệm 135 năm ngày sinh Chủ tịch Hồ Chí Minh – dịp để
          mỗi người Việt Nam tưởng nhớ công lao trời biển của Người, đồng thời
          phát huy mạnh mẽ hơn nữa tư tưởng, đạo đức, phong cách Hồ Chí Minh
          trong công cuộc xây dựng và bảo vệ đất nước hôm nay. Đặc biệt, năm
          2025 cũng đánh dấu 50 năm ngày đất nước thống nhất (30/4/1975 –
          30/4/2025). Chiến thắng mùa xuân năm 1975 đã kết thúc cuộc kháng chiến
          chống Mỹ cứu nước vĩ đại, mở ra kỷ nguyên mới cho dân tộc: kỷ nguyên
          độc lập, tự do và thống nhất đất nước. 50 năm sau, Việt Nam đã vươn
          mình mạnh mẽ, trở thành một quốc gia phát triển năng động, hội nhập
          quốc tế sâu rộng, khẳng định vị thế trên trường quốc tế. Kỷ niệm 135
          năm ngày sinh Chủ tịch Hồ Chí Minh và 50 năm thống nhất đất nước là
          dịp để mỗi người dân Việt Nam: Thành kính tưởng nhớ và tri ân sâu sắc
          tới Chủ tịch Hồ Chí Minh và các thế hệ cha anh đã hy sinh vì độc lập,
          tự do. Tự hào nhìn lại những thành tựu vĩ đại mà Đảng và nhân dân ta
          đã đạt được trong công cuộc dựng xây đất nước. Tiếp tục phát huy tinh
          thần yêu nước, đoàn kết, đổi mới sáng tạo, góp phần xây dựng đất nước
          Việt Nam ngày càng hùng cường, thịnh vượng. Với niềm tự hào sâu sắc và
          trách nhiệm cao cả, chúng ta nguyện học tập và làm theo tư tưởng, đạo
          đức, phong cách Hồ Chí Minh; chung sức đồng lòng đưa đất nước phát
          triển nhanh, bền vững; xây dựng nước Việt Nam hùng cường, sánh vai
          cùng các cường quốc năm châu như Bác Hồ hằng mong muốn.
        </p>
      </motion.div>
      <LeaderMessage />
      <HistoricalMessage />

      <Celebrate />
    </Container>
  );
};

export default About;
