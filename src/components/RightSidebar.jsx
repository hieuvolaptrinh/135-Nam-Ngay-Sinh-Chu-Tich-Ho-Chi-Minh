/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RefreshIcon from "@mui/icons-material/Refresh";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";


// Danh sách trích dẫn của Bác Hồ
const quotes = [
  "Không có gì quý hơn độc lập, tự do.",
  "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
  "Học hỏi là một việc phải tiếp tục suốt đời.",
  "Cần kiệm liêm chính, chí công vô tư.",
  "Nước Việt Nam là một, dân tộc Việt Nam là một.",
  "Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm trồng người.",
  "Đoàn kết là sức mạnh, đoàn kết là thắng lợi.",
  "Cần kiệm liêm chính, chí công vô tư.",
  "Học tập tốt, lao động tốt.",
  "Đoàn kết là sức mạnh vô địch.",
];

const RightSidebarComponent = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentQuote, setCurrentQuote] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Khởi tạo quote ngẫu nhiên khi component mount
  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setFeedbacks([...feedbacks, { name, message, id: Date.now() }]);
      setName("");
      setMessage("");
    }
  };

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "350px",
        height: "100vh",
        position: "fixed",
        right: 0,
        top: 0,
        bgcolor: "background.paper",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
        overflowY: "auto",
        zIndex: 1000,
        pt: 8, // Để tránh bị navbar che
      }}
    >
      {/* Phần Trích dẫn */}
      <Paper
        elevation={3}
        sx={{
          m: 2,
          p: 2,
          background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
          color: "white",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Trích dẫn hay của Bác Hồ
        </Typography>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic" }}>
              "{currentQuote}"
            </Typography>
          </motion.div>
        </AnimatePresence>
        <IconButton
          onClick={getRandomQuote}
          sx={{ color: "white" }}
          aria-label="next quote"
        >
          <RefreshIcon />
        </IconButton>
      </Paper>

      {/* Phần Góc cảm nhận */}
      <Paper elevation={3} sx={{ m: 2, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Góc cảm nhận
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Tên của bạn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            variant="outlined"
            size="small"
          />
          <TextField
            fullWidth
            label="Lời tri ân"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            multiline
            rows={4}
            variant="outlined"
            size="small"
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            fullWidth
            sx={{ mt: 2 }}
          >
            Gửi
          </Button>
        </form>

        {/* Hiển thị danh sách feedback */}
        {feedbacks.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Lời tri ân đã gửi:
            </Typography>
            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover={true}
              direction="left"
            >
              {feedbacks.map((feedback) => (
                <Card
                  key={feedback.id}
                  sx={{
                    m: 1,
                    minWidth: 200,
                    maxWidth: 300,
                    display: "inline-block",
                  }}
                >
                  <CardContent>
                    <Typography variant="subtitle2" color="primary">
                      {feedback.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feedback.message}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Marquee>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default RightSidebarComponent;
