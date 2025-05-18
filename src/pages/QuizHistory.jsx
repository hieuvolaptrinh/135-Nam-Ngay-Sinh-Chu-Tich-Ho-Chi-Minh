/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Box,
  Container,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItemIcon,
  Divider,
  createTheme,
  ThemeProvider,
  Stack,
} from "@mui/material";
import {
  Share as ShareIcon,
  VolumeUp,
  VolumeOff,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Close as CloseIcon,
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
  const [timerActive, setTimerActive] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const quizAudioRef = useRef(null);
  const previousMusicState = useRef(null);

  useEffect(() => {
    // lưu trạng thái nhạc nền trước khi vào quiz
    if (window.pauseBackgroundMusic) {
      previousMusicState.current = localStorage.getItem("musicMuted");
      // dừng nhạc nền khi vào trang quiz
      window.pauseBackgroundMusic();
    }

    // khởi tạo audio cho quiz
    const quizAudio = new Audio();
    quizAudio.src = "./quizMute.mp3";
    quizAudio.volume = 1;
    quizAudio.loop = true;
    quizAudioRef.current = quizAudio;

    // tắt nhạc nền khi bật nhạc quiz
    const handleQuizAudioPlay = () => {
      if (window.pauseBackgroundMusic) {
        window.pauseBackgroundMusic();
      }
    };

    quizAudio.addEventListener("play", handleQuizAudioPlay);

    return () => {
      if (quizAudioRef.current) {
        quizAudioRef.current.pause();
        quizAudioRef.current.removeEventListener("play", handleQuizAudioPlay);
        quizAudioRef.current = null;
      }
      // bật nhạc nền khi out
      if (previousMusicState.current !== null) {
        localStorage.setItem("musicMuted", previousMusicState.current);
        //  delay
        setTimeout(() => {
          if (window.startBackgroundMusic) {
            window.startBackgroundMusic();
          }
        }, 100);
      }
    };
  }, []);

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

    // lưu answer
    setUserAnswers([
      ...userAnswers,
      {
        questionIndex: currentQuestion,
        selectedAnswer,
        isCorrect,
      },
    ]);

    // show giải thích
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
    if (quizAudioRef.current) {
      if (soundEnabled) {
        quizAudioRef.current.pause();
      } else {
        quizAudioRef.current.play();
      }
      setSoundEnabled(!soundEnabled);
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const getProgressColor = (progress) => {
    if (progress >= 80) return "#B71C1C";
    if (progress >= 60) return "#D32F2F";
    if (progress >= 40) return "#EF5350";
    return "#FFCDD2";
  };

  const handleStartQuiz = () => {
    // phát nhạc quiz
    if (quizAudioRef.current) {
      quizAudioRef.current
        .play()
        .catch((error) => console.log("Error playing quiz music:", error));
    }
    setQuizStarted(true);
    setTimerActive(true);
  };

  if (!quizStarted) {
    return (
      <ThemeProvider theme={theme}>
        <Container
          className="py-5"
          sx={{ bgcolor: "background.default", minHeight: "100vh" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80vh",
              }}
            >
              {/* Tiêu đề */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h2"
                  align="center"
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                    mb: 4,
                    width: "100%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    letterSpacing: "0.05em",
                    lineHeight: 1.2,
                    textTransform: "uppercase",
                  }}
                >
                  THỬ TÀI LỊCH SỬ
                </Typography>
              </motion.div>

              {/* Nội dung mô tả */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    maxWidth: 600,
                    textAlign: "center",
                    borderRadius: 4,
                    bgcolor: "background.paper",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: "text.secondary",
                      lineHeight: 1.8,
                      textAlign: "justify",
                    }}
                  >
                    Chào mừng bạn đến với bài quiz Lịch sử Việt Nam! Hãy thử
                    thách kiến thức về sự kiện Giải phóng miền Nam 30/4/1975 và
                    cuộc đời Chủ tịch Hồ Chí Minh qua 10 câu hỏi thú vị.
                    <br /> Mỗi câu hỏi có 4 lựa chọn, thời gian trả lời là 30
                    giây. Trả lời đúng để nhận điểm số, trả lời sai không bị trừ
                    điểm.
                    <br />
                    Sau khi hoàn thành, bạn có thể xem giải thích đáp án và chia
                    sẻ kết quả với bạn bè. Đây là cơ hội để tìm hiểu thêm về
                    lịch sử dân tộc và những con người đã góp phần xây dựng đất
                    nước.
                    <br />
                    <strong> Sẵn sàng thử sức?</strong> Nhấn{" "}
                    <strong>"Bắt đầu"</strong> để khởi động ngay!
                  </Typography>

                  {/* Nút bắt đầu */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleStartQuiz}
                      sx={{
                        px: 6,
                        py: 2,
                        fontSize: "1.2rem",
                        borderRadius: 8,
                      }}
                    >
                      Bắt đầu
                    </Button>
                  </motion.div>
                </Paper>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className="py-5" sx={{ bgcolor: "background.default" }}>
        <Stack spacing={4}>
          {/* Tiêu đề */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
            style={{ width: "100%" }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                mb: 2,
                color: "primary.main",
                fontWeight: "bold",
                textShadow: "2px 2px 2px rgba(0, 0, 0, 0.63)",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                },
              }}
            >
              THỬ TÀI LỊCH SỬ CỦA BẠN NHÉ
            </Typography>
          </motion.div>

          {/* Mô tả quiz */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: "background.paper",

              mx: "auto",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                textAlign: "justify",
                fontWeight: 600,
              }}
            >
              Câu hỏi này không chỉ yêu cầu người tham gia nhớ về sự kiện lịch
              sử, mà còn giúp họ nhận thức sâu sắc về sự ảnh hưởng của nó đối
              với dân tộc Việt Nam và toàn thế giới, đồng thời khơi gợi niềm tự
              hào dân tộc.
            </Typography>
          </Paper>

          {/* Card câu hỏi */}
          <Paper
            elevation={3}
            sx={{
              borderRadius: 4,
              bgcolor: "background.paper",

              mx: "auto",
              width: "100%",
            }}
          >
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
          </Paper>
        </Stack>

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
                textAlign: "center",
                py: 3,
                position: "relative",
              }}
            >
              <IconButton
                aria-label="close"
                onClick={() => window.location.reload()}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Kết quả của bạn
              </Typography>
            </DialogTitle>
            <DialogContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Box className="text-center my-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  >
                    <Typography
                      variant="h2"
                      gutterBottom
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        fontSize: { xs: "3rem", sm: "4rem" },
                      }}
                    >
                      {score}/{quizQuestions.length}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 600,
                        mb: 4,
                      }}
                    >
                      {score === quizQuestions.length
                        ? "🎉 Xuất sắc! Bạn là một chuyên gia lịch sử!"
                        : score >= quizQuestions.length * 0.7
                        ? "👏 Rất tốt! Kiến thức lịch sử của bạn rất đáng nể!"
                        : "💪 Hãy tiếp tục tìm hiểu thêm về lịch sử Việt Nam!"}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Box sx={{ mb: 4 }}>
                      <LinearProgress
                        variant="determinate"
                        value={(score / quizQuestions.length) * 100}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          bgcolor: "rgba(211, 47, 47, 0.1)",
                          "& .MuiLinearProgress-bar": {
                            bgcolor: getProgressColor(
                              (score / quizQuestions.length) * 100
                            ),
                          },
                        }}
                      />
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>

              <Typography
                variant="h6"
                className="mb-3"
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                  pb: 1,
                }}
              >
                Chi tiết các câu trả lời:
              </Typography>

              <List>
                {userAnswers.map((answer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
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
                  </motion.div>
                ))}
              </List>
            </DialogContent>
            <DialogActions sx={{ p: 3, justifyContent: "center" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleShare}
                  startIcon={<ShareIcon />}
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ mr: 2 }}
                >
                  Chia sẻ kết quả
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => window.location.reload()}
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  Làm lại
                </Button>
              </motion.div>
            </DialogActions>
          </motion.div>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default QuizHistory;
