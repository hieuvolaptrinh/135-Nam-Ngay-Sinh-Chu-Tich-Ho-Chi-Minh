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
import { motion, px } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventModal from "../EventModal";
import { events } from "../../data/Events";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // slider + responsive nè
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mặc định hiển thị 3 card
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Khi chiều rộng màn hình <= 1024px
        settings: {
          slidesToShow: 2, // Hiển thị 2 card
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Khi chiều rộng màn hình <= 600px
        settings: {
          slidesToShow: 1, // Hiển thị 1 card
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

  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
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
          CÁC KỶ NIỆM 50 NĂM THỐNG NHẤT ĐẤT NƯỚC
        </Typography>
      </motion.div>

      <Box sx={{ px: { xs: 0, md: 4 } }}>
        <Slider {...settings}>
          {events.map((event, index) => (
            <Box key={event.id} sx={{ px: 2, py: 2, height: "100%" }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={event.image}
                    alt={event.title}
                    sx={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      padding: "24px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        minHeight: "64px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <CalendarTodayIcon
                        style={{
                          mr: 1,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          flex: 1,
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
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <LocationOnIcon
                        style={{
                          marginRight: "8px",
                          color: "rgb(164, 118, 0)",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        style={{
                          flex: 1,
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
                      sx={{
                        lineHeight: 1.6,
                        marginBottom: "16px",
                        flex: 1,
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
                  <CardActions
                    sx={{
                      p: 4,
                      paddingTop: "0",
                      marginTop: "auto",
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => handleViewDetails(event)}
                      sx={{
                        borderRadius: "8px",
                        p: {
                          xs: 1,
                          sm: 1,
                        },
                        width: "100%",
                      }}
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
