import { Box, Typography, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Clock from "./Clock";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#fff",
        px: { xs: 2, md: 6 },
        py: 2.5,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        display: "flex",
        alignItems: { xs: "flex-start", md: "center" },
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#C41E3A",
            textShadow: "1px 1px 0 #FFD700, 0 2px 8px rgba(0,0,0,0.08)",
            mb: 0.5,
            lineHeight: 1.2,
          }}
        >
          CUỘC THI THIẾT KẾ WEBSITE
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#C41E3A",
            textShadow: "1px 1px 0 #FFD700, 0 2px 8px rgba(0,0,0,0.08)",
            mb: 0.5,
            lineHeight: 1.2,
          }}
        >
          "DẤU ẤN LỄ KỶ NIỆM 50 NĂM THỐNG NHẤT ĐẤT NƯỚC"
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#666", fontStyle: "italic", fontWeight: 400 }}
        >
          Nhân kỷ niệm 135 năm ngày sinh Chủ tịch Hồ Chí Minh – Chào mừng 50 năm
          thống nhất đất nước
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 1,
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 8px",
            display: "flex",
            alignItems: "center",
            width: { xs: 220, md: 300 },
            mb: 1,
            background: "#FFF8E1",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Tìm kiếm..." />
          <SearchIcon sx={{ color: "#C41E3A" }} />
        </Paper>
        <Clock />
      </Box>
    </Box>
  );
};

export default Header;
