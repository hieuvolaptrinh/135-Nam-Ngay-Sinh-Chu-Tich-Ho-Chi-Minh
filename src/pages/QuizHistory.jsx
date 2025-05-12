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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import {
  Share as ShareIcon,
  VolumeUp,
  VolumeOff,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import { quizQuestions } from "../data/quizData";
import "bootstrap/dist/css/bootstrap.min.css";

const QuizHistory = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentExplanation, setCurrentExplanation] = useState({
    isCorrect: false,
    explanation: "",
  });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);

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

    // Save user's answer
    setUserAnswers([
      ...userAnswers,
      {
        questionIndex: currentQuestion,
        selectedAnswer,
        isCorrect,
      },
    ]);

    // Show explanation dialog
    setCurrentExplanation({
      isCorrect,
      explanation: quizQuestions[currentQuestion].explanation,
    });
    setShowExplanation(true);
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

  const handleCloseExplanation = () => {
    setShowExplanation(false);
    handleNextQuestion();
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

      {/* Explanation Dialog */}
      <Dialog
        open={showExplanation}
        onClose={handleCloseExplanation}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {currentExplanation.isCorrect ? "Chính xác!" : "Chưa đúng!"}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" className="mt-2">
            {currentExplanation.explanation}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseExplanation} color="primary">
            Câu tiếp theo
          </Button>
        </DialogActions>
      </Dialog>

      {/* Results Dialog */}
      <Dialog open={showResult} maxWidth="md" fullWidth>
        <DialogTitle>Kết quả của bạn</DialogTitle>
        <DialogContent>
          <Box className="text-center my-4">
            <Typography variant="h4" gutterBottom>
              {score}/{quizQuestions.length}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {score === quizQuestions.length
                ? "Xuất sắc! Bạn là một chuyên gia lịch sử!"
                : score >= quizQuestions.length * 0.7
                ? "Rất tốt! Kiến thức lịch sử của bạn rất đáng nể!"
                : "Hãy tiếp tục tìm hiểu thêm về lịch sử Việt Nam!"}
            </Typography>
          </Box>

          <Typography variant="h6" className="mb-3">
            Chi tiết các câu trả lời:
          </Typography>

          <List>
            {userAnswers.map((answer, index) => (
              <React.Fragment key={index}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box className="d-flex align-items-center w-100">
                      <ListItemIcon>
                        {answer.isCorrect ? (
                          <CheckCircleIcon color="success" />
                        ) : (
                          <CancelIcon color="error" />
                        )}
                      </ListItemIcon>
                      <Typography>
                        Câu {index + 1}: {quizQuestions[index].question}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        color="primary"
                        gutterBottom
                      >
                        Đáp án của bạn:
                      </Typography>
                      <Typography>
                        {quizQuestions[index].options[answer.selectedAnswer]}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        color="primary"
                        className="mt-3"
                        gutterBottom
                      >
                        Đáp án đúng:
                      </Typography>
                      <Typography>
                        {
                          quizQuestions[index].options[
                            quizQuestions[index].correctAnswerIndex
                          ]
                        }
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        color="primary"
                        className="mt-3"
                        gutterBottom
                      >
                        Giải thích:
                      </Typography>
                      <Typography>
                        {quizQuestions[index].explanation}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Divider />
              </React.Fragment>
            ))}
          </List>
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
