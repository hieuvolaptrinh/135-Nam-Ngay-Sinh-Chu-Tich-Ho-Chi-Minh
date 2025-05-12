/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  ListItemIcon,
  Divider,
  createTheme,
  ThemeProvider,
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

// theme màu cho nhanh
const theme = createTheme({
  palette: {
    primary: {
      main: "#D32F2F",
      light: "#EF5350",
      dark: "#B71C1C",
    },
    secondary: {
      main: "#FFC107",
      light: "#FFD54F",
      dark: "#FFA000",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#424242",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 24px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: 8,
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8,
          borderRadius: 4,
        },
        bar: {
          borderRadius: 4,
        },
      },
    },
  },
});

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

  const getProgressColor = (progress) => {
    if (progress >= 80) return "#B71C1C";
    if (progress >= 60) return "#D32F2F";
    if (progress >= 40) return "#EF5350";
    return "#FFCDD2";
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="py-5" sx={{ bgcolor: "background.default" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                  {" "}
                  Thử tài lịch sử - Dấu ấn 30/4 & Bác Hồ
                </Typography>
              </motion.div>
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  position: "relative",
                  color: "primary.main",
                  fontWeight: "bold",
                  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2.5rem",
                  },
                  textAlign: "center", // giữ cho text xuống dòng đẹp
                }}
              ></Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Paper
              elevation={3}
              className="p-4 mb-4"
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Chào mừng bạn đến với bài quiz về lịch sử Việt Nam! Hãy thử
                thách kiến thức của bạn về sự kiện Giải phóng miền Nam 30/4/1975
                và cuộc đời Chủ tịch Hồ Chí Minh. Chúc bạn may mắn!
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ bgcolor: "background.paper" }}>
                <CardContent>
                  <Box className="d-flex justify-content-between align-items-center mb-3">
                    <Typography
                      variant="h6"
                      sx={{ color: "text.primary", fontWeight: 600 }}
                    >
                      Câu hỏi {currentQuestion + 1}/{quizQuestions.length}
                    </Typography>
                    <IconButton
                      onClick={toggleSound}
                      sx={{
                        color: "secondary.main",
                        "&:hover": { color: "secondary.dark" },
                      }}
                    >
                      {soundEnabled ? <VolumeUp /> : <VolumeOff />}
                    </IconButton>
                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    className="mb-3"
                    sx={{
                      bgcolor: "rgba(211, 47, 47, 0.1)",
                      "& .MuiLinearProgress-bar": {
                        bgcolor: getProgressColor(progress),
                      },
                    }}
                  />

                  <Typography
                    variant="h5"
                    className="mb-4"
                    sx={{
                      color: "text.primary",
                      fontWeight: 600,
                    }}
                  >
                    {quizQuestions[currentQuestion].question}
                  </Typography>

                  <RadioGroup
                    value={selectedAnswer}
                    onChange={handleAnswerSelect}
                  >
                    {quizQuestions[currentQuestion].options.map(
                      (option, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <FormControlLabel
                            value={index}
                            control={
                              <Radio
                                sx={{
                                  color: "primary.main",
                                  "&.Mui-checked": {
                                    color: "primary.main",
                                  },
                                }}
                              />
                            }
                            label={
                              <Typography sx={{ color: "text.secondary" }}>
                                {option}
                              </Typography>
                            }
                            className="mb-2"
                            sx={{
                              margin: "8px 0",
                              padding: "8px 16px",
                              borderRadius: 2,
                              transition: "all 0.2s",
                              "&:hover": {
                                bgcolor: "rgba(211, 47, 47, 0.05)",
                              },
                            }}
                          />
                        </motion.div>
                      )
                    )}
                  </RadioGroup>

                  <Box className="d-flex justify-content-between align-items-center mt-4">
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                      }}
                    >
                      Thời gian còn lại: {timeLeft} giây
                    </Typography>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        disabled={selectedAnswer === null}
                        sx={{
                          minWidth: 120,
                          "&:disabled": {
                            bgcolor: "rgba(211, 47, 47, 0.3)",
                          },
                        }}
                      >
                        Trả lời
                      </Button>
                    </motion.div>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Explanation Dialog */}
        <Dialog
          open={showExplanation}
          onClose={handleCloseExplanation}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle
            sx={{
              bgcolor: currentExplanation.isCorrect
                ? "success.light"
                : "error.light",
              color: "white",
            }}
          >
            {currentExplanation.isCorrect ? "Chính xác!" : "Chưa đúng!"}
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              {currentExplanation.explanation}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseExplanation}
              color="primary"
              variant="contained"
            >
              Câu tiếp theo
            </Button>
          </DialogActions>
        </Dialog>

        {/* Results Dialog */}
        <Dialog open={showResult} maxWidth="md" fullWidth>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <DialogTitle
              sx={{
                bgcolor: "primary.main",
                color: "white",
              }}
            >
              Kết quả của bạn
            </DialogTitle>
            <DialogContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Box className="text-center my-4">
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      color: "primary.main",
                      fontWeight: 700,
                    }}
                  >
                    {score}/{quizQuestions.length}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                    }}
                  >
                    {score === quizQuestions.length
                      ? "Xuất sắc! Bạn là một chuyên gia lịch sử!"
                      : score >= quizQuestions.length * 0.7
                      ? "Rất tốt! Kiến thức lịch sử của bạn rất đáng nể!"
                      : "Hãy tiếp tục tìm hiểu thêm về lịch sử Việt Nam!"}
                  </Typography>
                </Box>
              </motion.div>

              <Typography
                variant="h6"
                className="mb-3"
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                }}
              >
                Chi tiết các câu trả lời:
              </Typography>

              <List>
                {userAnswers.map((answer, index) => (
                  <React.Fragment key={index}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          bgcolor: answer.isCorrect
                            ? "success.light"
                            : "error.light",
                          color: "white",
                          "&:hover": {
                            bgcolor: answer.isCorrect
                              ? "success.main"
                              : "error.main",
                          },
                        }}
                      >
                        <Box className="d-flex align-items-center w-100">
                          <ListItemIcon sx={{ color: "white" }}>
                            {answer.isCorrect ? (
                              <CheckCircleIcon />
                            ) : (
                              <CancelIcon />
                            )}
                          </ListItemIcon>
                          <Typography sx={{ fontWeight: 500 }}>
                            Câu {index + 1}: {quizQuestions[index].question}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "primary.main",
                              fontWeight: 600,
                            }}
                            gutterBottom
                          >
                            Đáp án của bạn:
                          </Typography>
                          <Typography sx={{ color: "text.secondary" }}>
                            {
                              quizQuestions[index].options[
                                answer.selectedAnswer
                              ]
                            }
                          </Typography>

                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "primary.main",
                              fontWeight: 600,
                            }}
                            className="mt-3"
                            gutterBottom
                          >
                            Đáp án đúng:
                          </Typography>
                          <Typography sx={{ color: "text.secondary" }}>
                            {
                              quizQuestions[index].options[
                                quizQuestions[index].correctAnswerIndex
                              ]
                            }
                          </Typography>

                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "primary.main",
                              fontWeight: 600,
                            }}
                            className="mt-3"
                            gutterBottom
                          >
                            Giải thích:
                          </Typography>
                          <Typography sx={{ color: "text.secondary" }}>
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
              <Button
                onClick={handleShare}
                startIcon={<ShareIcon />}
                variant="contained"
                color="secondary"
              >
                Chia sẻ kết quả
              </Button>
              <Button
                onClick={() => window.location.reload()}
                variant="outlined"
                color="primary"
              >
                Làm lại
              </Button>
            </DialogActions>
          </motion.div>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default QuizHistory;
