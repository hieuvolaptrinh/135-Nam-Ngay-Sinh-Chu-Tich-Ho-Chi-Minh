import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  LinearProgress,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Box,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { Share as ShareIcon, VolumeUp, VolumeOff } from "@mui/icons-material";
import { quizQuestions } from "../data/quizData";
import "bootstrap/dist/css/bootstrap.min.css";

const QuizHistory = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    isCorrect: false,
  });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    return () => clearInterval(timer);
  }, [timeLeft, timerActive]);

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    const isCorrect =
      selectedAnswer === quizQuestions[currentQuestion].correctAnswerIndex;
    if (isCorrect) {
      setScore(score + 1);
    }
    setSnackbar({
      open: true,
      message: isCorrect ? "Chính xác!" : "Chưa đúng, hãy thử lại!",
      isCorrect,
    });
    setTimerActive(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
      setTimerActive(true);
    } else {
      setShowResult(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleShare = () => {
    const text = `Tôi đã đạt ${score}/${quizQuestions.length} điểm trong bài quiz về lịch sử! Hãy thử thách bản thân bạn!`;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}&quote=${encodeURIComponent(text)}`
    );
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <Container className="py-5">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            className="mb-4"
          >
            Thử tài lịch sử - Dấu ấn 30/4 & Bác Hồ
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} className="p-4 mb-4">
            <Typography variant="body1">
              Chào mừng bạn đến với bài quiz về lịch sử Việt Nam! Hãy thử thách
              kiến thức của bạn về sự kiện Giải phóng miền Nam 30/4/1975 và cuộc
              đời Chủ tịch Hồ Chí Minh. Chúc bạn may mắn!
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box className="d-flex justify-content-between align-items-center mb-3">
                <Typography variant="h6">
                  Câu hỏi {currentQuestion + 1}/{quizQuestions.length}
                </Typography>
                <IconButton onClick={toggleSound}>
                  {soundEnabled ? <VolumeUp /> : <VolumeOff />}
                </IconButton>
              </Box>

              <LinearProgress
                variant="determinate"
                value={progress}
                className="mb-3"
              />

              <Typography variant="h5" className="mb-4">
                {quizQuestions[currentQuestion].question}
              </Typography>

              <RadioGroup value={selectedAnswer} onChange={handleAnswerSelect}>
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio />}
                    label={option}
                    className="mb-2"
                  />
                ))}
              </RadioGroup>

              <Box className="d-flex justify-content-between align-items-center mt-4">
                <Typography variant="body2" color="textSecondary">
                  Thời gian còn lại: {timeLeft} giây
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                >
                  Trả lời
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        sx={{
          backgroundColor: snackbar.isCorrect ? "success.main" : "error.main",
          color: "white",
        }}
      />

      <Dialog open={showResult} maxWidth="sm" fullWidth>
        <DialogTitle>Kết quả của bạn</DialogTitle>
        <DialogContent>
          <Typography variant="h4" align="center" className="my-4">
            {score}/{quizQuestions.length}
          </Typography>
          <Typography variant="body1" align="center">
            {score === quizQuestions.length
              ? "Xuất sắc! Bạn là một chuyên gia lịch sử!"
              : score >= quizQuestions.length * 0.7
              ? "Rất tốt! Kiến thức lịch sử của bạn rất đáng nể!"
              : "Hãy tiếp tục tìm hiểu thêm về lịch sử Việt Nam!"}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleShare} startIcon={<ShareIcon />}>
            Chia sẻ kết quả
          </Button>
          <Button onClick={() => window.location.reload()}>Làm lại</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default QuizHistory;
