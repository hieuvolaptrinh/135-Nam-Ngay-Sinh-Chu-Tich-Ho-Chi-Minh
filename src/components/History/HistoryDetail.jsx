import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import ReactPlayer from "react-player";
import { FaQuoteLeft, FaCalendarAlt, FaTimes } from "react-icons/fa";

const HistoryDetail = ({ show, onHide, selectedEvent }) => {
  return (
    <Dialog
      open={show}
      onClose={onHide}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 2,
          boxShadow: 6,
          mt: "100px",
        },
      }}
    >
      <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          {selectedEvent?.title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <FaCalendarAlt style={{ marginRight: 8 }} />
            {selectedEvent?.date}
          </Typography>
          <Typography variant="h6">{selectedEvent?.description}</Typography>
        </Box>

        {/* Video Player */}
        {selectedEvent?.video && (
          <Box sx={{ mb: 3, position: "relative", paddingTop: "56.25%" }}>
            <ReactPlayer
              url={selectedEvent.video}
              width="100%"
              height="100%"
              controls
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </Box>
        )}

        {/* Quote */}
        <Box
          sx={{
            borderLeft: "4px solid",
            borderColor: "primary.main",
            pl: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontStyle: "italic" }}>
            <FaQuoteLeft style={{ color: "primary.main", marginRight: 8 }} />
            {selectedEvent?.quote}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHide} variant="contained" color="secondary">
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HistoryDetail;
