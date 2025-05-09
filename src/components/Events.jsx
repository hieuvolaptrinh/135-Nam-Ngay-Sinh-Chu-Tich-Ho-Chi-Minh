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
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventModal from "./EventModal";

const Events = ({
  events,
  title,
  themeColor = "rgb(235, 116, 116)",
  titleColor = "#e74c3c",
}) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  return (
    <Container sx={{ py: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 2,
            position: "relative",
            color: titleColor,
            fontWeight: "bold",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
            },
          }}
        >
          {title}
        </Typography>
      </motion.div>

      <Box sx={{ mt: 4 }}>
        <Slider {...settings}>
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  mx: 1,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
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
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <CalendarTodayIcon
                      sx={{
                        mr: 1,
                        color: themeColor,
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
                    <Box sx={{ height: 60 }}>
                      <Typography
                        sx={{
                          flex: 1,
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: 2,
                          textOverflow: "ellipsis",
                        }}
                      >
                        {" "}
                        <LocationOnIcon
                          sx={{
                            mr: 1,
                            color: themeColor,
                            flexShrink: 0,
                          }}
                        />
                        {event.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      mb: 2,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {event.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleOpenModal(event)}
                    sx={{
                      backgroundColor: themeColor,
                      "&:hover": {
                        backgroundColor: themeColor,
                        opacity: 0.9,
                      },
                    }}
                  >
                    Xem chi tiết
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </Box>

      <EventModal
        open={!!selectedEvent}
        onClose={handleCloseModal}
        event={selectedEvent}
        themeColor={themeColor}
      />
    </Container>
  );
};

export default Events;
