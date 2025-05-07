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
import { events } from "../../data/Events";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }} // 1 lần, vào 20% viewport
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
          CÁC KỶ NIỆM 50 NĂM THỐNG NHẤT ĐẤT NƯỚC{" "}
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
