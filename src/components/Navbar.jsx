import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

const menuItems = [
  { text: "Trang Chủ", path: "/" },
  { text: "Dấu ấn lịch sử", path: "/history" },
  { text: "Cuộc Đời Chủ Tịch Hồ Chí Minh", path: "/about" },
  { text: "Hoạt Động Kỷ Niệm", path: "/events" },
];

const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        background: `linear-gradient(to right,
        rgb(152, 215, 236) 0%,
        rgba(29, 130, 224, 1) 50%,
         rgb(152, 215, 236) 100%
      )`,
        boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
        py: 1,
        display: "flex",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {menuItems.map((item) => (
        <NavLink
          key={item.text}
          to={item.path}
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "rgb(241, 227, 32)" : " rgb(50, 9, 9)",
            padding: "8px 18px",
            borderRadius: "4px",
            fontSize: "1rem",
            fontWeight: 600,
            transition: "all 0.3s",
          })}
        >
          {item.text}
        </NavLink>
      ))}
    </Box>
  );
};

export default Navbar;
