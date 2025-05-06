import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const EventModal = ({ open, onClose, event }) => {
  if (!event) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: "#1a237e",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {event.title}
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <Box
          component="img"
          src={event.image}
          alt={event.title}
          sx={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />

        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <CalendarTodayIcon sx={{ mr: 1, color: "#1a237e" }} />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {event.date}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <LocationOnIcon sx={{ mr: 1, color: "#1a237e" }} />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {event.location}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography
            variant="body1"
            sx={{
              color: "#666",
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            {event.description}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#333",
              lineHeight: 1.8,
            }}
          >
            {event.details}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
