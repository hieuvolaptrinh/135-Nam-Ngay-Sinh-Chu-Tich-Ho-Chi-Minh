/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventModal from "../EventModal";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      id: 1,
      title: "Lễ diễu binh - diễu hành",
      date: "30/04/2025 | 7h00 - 9h00",
      location: "Quảng trường Ba Đình",
      description:
        "Diễu hành chào mừng 50 năm thống nhất với hàng ngàn người tham gia.",
      details:
        "Lễ diễu binh với sự tham gia của các lực lượng vũ trang, thanh niên xung kích và nhiều tầng lớp nhân dân, nhằm tái hiện khí thế hào hùng của dân tộc trong ngày lịch sử 30/4. Chương trình bao gồm các tiết mục nghệ thuật đặc sắc, các đội hình tiêu binh đại diện cho sức mạnh và tinh thần đoàn kết dân tộc.",
      image: "/images/DuyetBinh.jpg",
    },
    {
      id: 2,
      title: "Triển lãm lịch sử Việt Nam",
      date: "30/04/2025 | 9h30 - 17h00",
      location: "Bảo tàng Lịch sử Quốc gia",
      description:
        "Trưng bày hình ảnh, tài liệu quý về công cuộc thống nhất đất nước.",
      details:
        "Triển lãm trưng bày hơn 500 hiện vật, tài liệu, hình ảnh quý giá về quá trình đấu tranh thống nhất đất nước. Đặc biệt, triển lãm có sự tham gia của các nhân chứng lịch sử, các cựu chiến binh với những câu chuyện xúc động về một thời hào hùng của dân tộc.",
      image: "/images/HoiThaoHome.png",
    },
    {
      id: 3,
      title: "Hội thảo khoa học 'Dấu ấn lịch sử'",
      date: "30/04/2025 | 10h00 - 12h00",
      location: "Trung tâm Hội nghị Quốc gia",
      description:
        "Các chuyên gia thảo luận về ý nghĩa lịch sử của ngày thống nhất.",
      details:
        "Hội thảo quy tụ các nhà sử học, chuyên gia trong và ngoài nước cùng thảo luận về ý nghĩa lịch sử của ngày 30/4/1975. Các chủ đề chính bao gồm: Chiến thắng lịch sử và bài học kinh nghiệm, Vai trò của nhân dân trong sự nghiệp thống nhất đất nước, và Giá trị thời đại của chiến thắng 30/4.",
      image: "/images/HoiThaoKhoaHoc.jpg",
    },
    {
      id: 4,
      title: "Giao lưu nghệ thuật truyền thống",
      date: "30/04/2025 | 14h00 - 16h00",
      location: "Nhà hát Lớn Hà Nội",
      description:
        "Biểu diễn các tiết mục truyền thống ca ngợi đất nước và thống nhất.",
      details:
        "Chương trình nghệ thuật đặc sắc với sự tham gia của các nghệ sĩ nổi tiếng, các đoàn nghệ thuật truyền thống từ khắp cả nước. Các tiết mục được dàn dựng công phu, tái hiện lại những khoảnh khắc lịch sử hào hùng của dân tộc qua ngôn ngữ nghệ thuật.",
      image: "/images/NgheThuatTruyenThong.jpg",
    },
    {
      id: 5,
      title: "Đêm nhạc 'Dấu ấn thống nhất'",
      date: "30/04/2025 | 19h00 - 22h00",
      location: "Sân vận động Quốc gia Mỹ Đình",
      description:
        "Chương trình ca nhạc quy mô lớn với sự tham gia của các nghệ sĩ nổi tiếng.",
      details:
        "Đêm nhạc hoành tráng với sự tham gia của hơn 100 nghệ sĩ, ca sĩ nổi tiếng. Chương trình được dàn dựng công phu với các ca khúc cách mạng, những bài hát về tình yêu quê hương đất nước, cùng những tiết mục nghệ thuật đặc sắc, tạo nên một đêm nhạc đầy cảm xúc.",
      image: "/images/DemNhac.jpg",
    },
    {
      id: 6,
      title: "Lễ thắp nến tri ân anh hùng liệt sĩ",
      date: "30/04/2025 | 20h00",
      location: "Nghĩa trang liệt sĩ Trường Sơn",
      description:
        "Thắp nến tưởng niệm, tri ân những người đã hy sinh cho Tổ quốc.",
      details:
        "Lễ thắp nến tri ân được tổ chức trang nghiêm với sự tham gia của đông đảo các tầng lớp nhân dân, các cựu chiến binh, thân nhân liệt sĩ. Chương trình bao gồm các nghi thức tưởng niệm, thắp nến tri ân, và các hoạt động văn hóa nghệ thuật đặc sắc, thể hiện lòng biết ơn sâu sắc đối với các anh hùng liệt sĩ đã hy sinh vì sự nghiệp thống nhất đất nước.",
      image: "/images/ThapNen.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const cardStyles = {
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
      },
    },
    media: {
      height: "200px",
      objectFit: "cover",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
    },
    content: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      p: 3,
    },
    title: {
      fontWeight: "bold",
      color: "#1a237e",
      mb: 2,
      minHeight: "64px",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    local: {
      fontWeight: "bold",
      color: "#1a237e",
      mb: 2,
      minHeight: "64px",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    infoContainer: {
      display: "flex",
      alignItems: "center",
      mb: 1.5,
    },
    icon: {
      mr: 1,
      color: "#1a237e",
      flexShrink: 0,
    },
    infoText: {
      color: "#333",
      flex: 1,
    },
    description: {
      color: "#666",
      lineHeight: 1.6,
      mb: 2,
      flex: 1,
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    actions: {
      p: 3,
      pt: 0,
      mt: "auto",
    },
    button: {
      backgroundColor: "#1a237e",
      color: "white",
      borderRadius: "8px",
      px: 3,
      py: 1,
      width: "100%",
      "&:hover": {
        backgroundColor: "#0d1b6b",
      },
    },
  };

  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 6,

            color: "rgb(241, 76, 64)",
            fontWeight: "bold",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
          }}
        >
          DẤU ẤN LỄ KỶ NIỆM 50 NĂM THỐNG NHẤT ĐẤT NƯỚC{" "}
        </Typography>
      </motion.div>

      <Box ref={ref} sx={{ px: { xs: 0, md: 4 } }}>
        <Slider {...settings}>
          {events.map((event, index) => (
            <Box key={event.id} sx={{ px: 2, height: "100%" }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={cardStyles.container}>
                  <CardMedia
                    component="img"
                    image={event.image}
                    alt={event.title}
                    sx={cardStyles.media}
                  />
                  <CardContent sx={cardStyles.content}>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={cardStyles.title}
                    >
                      {event.title}
                    </Typography>
                    <Box sx={cardStyles.infoContainer}>
                      <CalendarTodayIcon sx={cardStyles.icon} />
                      <Typography
                        sx={cardStyles.infoText}
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: 1,
                          textOverflow: "ellipsis",
                        }}
                      >
                        {event.date}
                      </Typography>
                    </Box>
                    <Box sx={cardStyles.infoContainer}>
                      <LocationOnIcon sx={cardStyles.icon} />
                      <Typography
                        sx={cardStyles.infoText}
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: 1,
                          textOverflow: "ellipsis",
                        }}
                      >
                        {event.location}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={cardStyles.description}
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 3,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={cardStyles.actions}>
                    <Button
                      variant="contained"
                      onClick={() => handleViewDetails(event)}
                      sx={cardStyles.button}
                    >
                      Xem chi tiết
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Slider>
      </Box>

      <EventModal
        open={modalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
      />
    </Container>
  );
};

export default Events;
