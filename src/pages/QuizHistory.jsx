/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Stack,
  Paper,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { quizQuestions } from "../data/quizData";
import "bootstrap/dist/css/bootstrap.min.css";
import { quizTheme } from "../components/Quiz/theme";
import StartScreen from "../components/Quiz/StartScreen";
import QuizQuestionCard from "../components/Quiz/QuizQuestionCard";
import ExplanationDialog from "../components/Quiz/ExplanationDialog";
import QuizResult from "../components/Quiz/QuizResult";

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

  const handleRestartQuiz = () => {
    window.location.reload();
  };

  if (!quizStarted) {
    return <StartScreen onStartQuiz={handleStartQuiz} />;
  }

  return (
    <ThemeProvider theme={quizTheme}>
      <Container className="py-5" sx={{ bgcolor: "background.default" }}>
        <Stack spacing={4}>
          {/* Tiêu đề */}
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
            <QuizQuestionCard
              currentQuestion={currentQuestion}
              totalQuestions={quizQuestions.length}
              question={quizQuestions[currentQuestion].question}
              options={quizQuestions[currentQuestion].options}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={handleAnswerSelect}
              onSubmit={handleSubmit}
              timeLeft={timeLeft}
              soundEnabled={soundEnabled}
              onToggleSound={toggleSound}
            />
          </Paper>
        </Stack>

        {/* Explanation Dialog */}
        <ExplanationDialog
          open={showExplanation}
          onClose={handleCloseExplanation}
          isCorrect={currentExplanation.isCorrect}
          explanation={currentExplanation.explanation}
        />

        {/* Results Dialog */}
        <QuizResult
          open={showResult}
          onClose={handleRestartQuiz}
          score={score}
          totalQuestions={quizQuestions.length}
          userAnswers={userAnswers}
          questions={quizQuestions}
          onShare={handleShare}
        />
      </Container>
    </ThemeProvider>
  );
};

export default QuizHistory;
