/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Typography, Box, Container } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { hoChiMinhTimeline } from "../../data/HoChiMinhTimeLine";

const HoChiMinhTimeline = () => {
  return (
    <Container className="container py-4 py-md-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Typography
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
          Con Đường Giải Phóng Dân Tộc Của Chủ Tịch Hồ Chí Minh
        </Typography>
      </motion.div>
      <div className="position-relative">
        {hoChiMinhTimeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="d-flex mb-4 mb-md-5 flex-column flex-md-row"
          >
            <div
              className="text-center"
              style={{
                minWidth: "80px",
                marginBottom: "0.5rem",
              }}
            >
              <Typography
                variant="h6"
                className="text-primary fw-bold"
                sx={{
                  cursor: "pointer",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    color: "#ff0000",
                    transform: "scale(1.1)",
                  },
                }}
              >
                {item.year}
              </Typography>
            </div>
            <div
              className="flex-grow-1"
              style={{
                marginLeft: "40px",
              }}
            >
              <motion.div
                className="border-start border-danger border-4 p-3 p-md-4 bg-white rounded shadow-sm"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="d-flex flex-column flex-md-row align-items-md-center gap-3">
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.event}
                    className="rounded"
                    sx={{
                      width: "12rem",
                      height: "12rem",
                      objectFit: "cover",
                      "@media (max-width:765px)": {
                        width: "100%",
                      },
                    }}
                  />
                  <div className="flex-grow-1">
                    <Typography
                      variant="h5"
                      className="mb-2"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 3,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.event}
                    </Typography>
                    <Typography
                      variant="inherit"
                      className="text-muted"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 4,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.details}
                    </Typography>
                  </div>
                </div>
                <div
                  className="bg-dark bg-opacity-75 text-white p-3 rounded d-flex flex-column mt-2 mt-md-3"
                  style={{
                    opacity: 0,
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: "none",
                    position: "absolute",
                    left: 0,
                    width: "100%",
                    top: "100%",
                    transform: "translateY(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = 0;
                    e.currentTarget.style.transform = "translateY(10px)";
                  }}
                >
                  <Typography variant="h6" className="fw-bold mb-2">
                    {item.year}: {item.event}
                  </Typography>
                  <Typography variant="body2">{item.details}</Typography>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default HoChiMinhTimeline;
