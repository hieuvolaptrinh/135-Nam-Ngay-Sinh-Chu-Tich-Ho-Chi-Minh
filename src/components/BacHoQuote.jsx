/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion, AnimatePresence } from "framer-motion";
import { quotes } from "../data/Quotes";

const BacHoQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        m: 2,
        p: 3,
        background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
        color: "white",
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('/images/pattern.png')",
          opacity: 0.1,
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: "bold",
          }}
        >
          <FormatQuoteIcon sx={{ fontSize: 28 }} />
          Trích dẫn hay của Bác Hồ
        </Typography>

        <AnimatePresence mode="wait">
          {currentQuote && (
            <motion.div
              key={currentQuote.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontStyle: "italic",
                  fontSize: isMobile ? "1rem" : "1.2rem",
                  lineHeight: 1.6,
                }}
              >
                "{currentQuote.text}"
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  opacity: 0.8,
                  fontStyle: "italic",
                }}
              >
                {currentQuote.context}
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>

        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={getRandomQuote}
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            aria-label="next quote"
          >
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default BacHoQuote;
