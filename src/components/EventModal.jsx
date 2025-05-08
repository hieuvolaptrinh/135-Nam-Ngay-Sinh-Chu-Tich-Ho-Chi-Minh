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
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        },
      }}
    >
      <DialogTitle
        sx={{
          background:
            "linear-gradient(135deg,rgb(235, 116, 116),rgb(248, 220, 78))",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
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
          sx={{
            width: "100%",
            height: { xs: "200px", sm: "300px", md: "400px" },
            position: "relative",
            overflow: "hidden",
            borderRadius: "0 0 16px 16px",
          }}
        >
          {event.video ? (
            <video
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "0 0 16px 16px",
              }}
              poster={event.image}
            >
              <source src={event.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Box
              component="img"
              src={event.image}
              alt={event.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "0 0 16px 16px",
              }}
            />
          )}
        </Box>

        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              backgroundColor: "rgba(0,0,0,0.03)",
              p: 1.5,
              borderRadius: "8px",
            }}
          >
            <CalendarTodayIcon sx={{ mr: 1, color: "rgb(235, 116, 116)" }} />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {event.date}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 3,
              backgroundColor: "rgba(0,0,0,0.03)",
              p: 1.5,
              borderRadius: "8px",
            }}
          >
            <LocationOnIcon sx={{ mr: 1, color: "rgb(235, 116, 116)" }} />
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
              backgroundColor: "rgba(0,0,0,0.02)",
              p: 2,
              borderRadius: "8px",
            }}
          >
            {event.description}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#333",
              lineHeight: 1.8,
              backgroundColor: "rgba(0,0,0,0.02)",
              p: 2,
              borderRadius: "8px",
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
