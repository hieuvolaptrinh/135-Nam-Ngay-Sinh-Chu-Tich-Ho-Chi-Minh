import { Box, Typography, InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import Clock from "./Clock";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)",
        px: { xs: 2, sm: 2, md: 2 },
        py: { xs: 1, md: 3 },
        boxShadow: "0 4px 12px rgba(7, 138, 232, 0.66)",
        display: "flex",

        alignItems: { xs: "center", md: "center" },
        justifyContent: "space-between",
        gap: { xs: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "center", md: "center" },
          gap: { xs: 2, md: 3 },
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Box
            component="img"
            src="./images/UTE.png"
            alt="Logo"
            sx={{
              marginTop: { xs: 0, sm: 2, md: 2 },
              width: { xs: 80, sm: 100 },
              height: { xs: 80, sm: 100 },
              objectFit: "contain",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
        </motion.div>
        {/* Text Content */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "#555",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: { xs: "0.7rem", sm: "1rem", md: "1rem" },
              mb: 1,
            }}
          >
            Trường Đại học Sư phạm Kỹ Thuật - Khoa Công Nghệ Số nhiệt liệt chào
            mừng
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#C41E3A",
              textShadow: "1px 1px 0 #FFD700, 0 2px 6px rgba(0,0,0,0.1)",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.25rem" },
              mb: 0.5,
              lineHeight: 1.3,
            }}
          >
            KỶ NIỆM 135 NĂM NGÀY SINH CHỦ TỊCH HỒ CHÍ MINH (19/5/1890 –
            19/5/2025)
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#C41E3A",
              textShadow: "1px 1px 0 #FFD700, 0 2px 6px rgba(0,0,0,0.1)",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.25rem" },
              mb: 0.5,
              lineHeight: 1.3,
            }}
          >
            CHÀO MỪNG 50 NĂM THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 – 30/4/2025)
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#555",
              fontStyle: "italic",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Tôn vinh những dấu mốc lịch sử hào hùng và truyền cảm hứng về lòng
            yêu nước, tự hào dân tộc.
          </Typography>
        </Box>
      </Box>

      {/* Search and Clock - chỉ hiện từ md trở lên */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 1,
        }}
      >
        <Clock />
        <Paper
          component="form"
          sx={{
            p: "4px 8px",
            display: "flex",
            alignItems: "center",
            width: { sm: 150, md: 200 },
            background: "#FFF8E1",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            borderRadius: "20px",
            transition: "box-shadow 0.3s ease",
            "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.15)" },
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, fontSize: { sm: "1rem" } }}
            placeholder="Tìm kiếm..."
          />
          <IconButton type="submit" sx={{ p: 0.5 }}>
            <SearchIcon sx={{ color: "#C41E3A", fontSize: { sm: 24 } }} />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
};

export default Header;
