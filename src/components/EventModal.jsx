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

const EventModal = ({
  open,
  onClose,
  event,
  themeColor = "rgb(235, 116, 116)",
}) => {
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
          background: `linear-gradient(135deg, ${themeColor}, rgb(248, 220, 78))`,
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
            px: 2,
            py: 2,
          }}
        >
          {/* tiêu đề ngày + địa chỉ */}
          <Box
            sx={{
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CalendarTodayIcon sx={{ mr: 1, color: themeColor }} />
                <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                  {event.date}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon sx={{ mr: 1, color: themeColor }} />
                <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                  {event.location}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {event.video ? (
          <Box sx={{ px: 2 }}>
            <video
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "0 0 16px 16px",
              }}
            >
              <source src={event.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
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

        <Box sx={{ p: 3 }}>
          <Typography
            variant="h5"
            sx={{
              lineHeight: 1.8,
              mb: 2,
              backgroundColor: "rgba(0, 119, 255, 0.32)",
              p: 2,
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            {event.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{
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
