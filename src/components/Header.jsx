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
      <Box
        component="img"
        src="./images/UTE.png" // hoặc đường dẫn ảnh tĩnh của bạn
        alt="Logo"
        sx={{
          marginY: "auto",
          width: 100,
          height: 100,
          objectFit: "contain",
        }}
      />
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ color: "#666", fontStyle: "italic", fontWeight: 400 }}
        >
          Trường Đại học Sư phạm Kỹ Thuật - Khoa Công Nghệ Số nhiệt liệt chào
          mừng
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#C41E3A",
            textShadow: "1px 1px 0 #FFD700, 0 2px 8px rgba(0,0,0,0.08)",
            mb: 0.5,
            lineHeight: 1.2,
          }}
        >
          KỶ NIỆM 135 NĂM NGÀY SINH CHỦ TỊCH HỒ CHÍ MINH (19/5/1890 – 19/5/2025)
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
          CHÀO MỪNG 50 NĂM THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 – 30/4/2025)
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#666", fontStyle: "italic", fontWeight: 400 }}
        >
          Với mục tiêu tôn vinh những dấu mốc lịch sử hào hùng và truyền cảm
          hứng về lòng yêu nước, tự hào dân tộc.
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
