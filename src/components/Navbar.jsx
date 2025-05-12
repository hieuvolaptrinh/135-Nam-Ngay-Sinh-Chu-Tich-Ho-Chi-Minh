import { NavLink } from "react-router-dom";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventIcon from "@mui/icons-material/Event";
import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";
import { useState } from "react";

const menuItems = [
  { text: "Trang Chủ", path: "/", icon: <HomeIcon /> },
  { text: "Con đường độc lập", path: "/history", icon: <HistoryIcon /> },
  { text: "Góc tự hào", path: "/about", icon: <EmojiEventsIcon /> },
  { text: "Hoạt Động Kỷ Niệm", path: "/events", icon: <EventIcon /> },
  { text: "Đố vui lịch sử", path: "/quiz-history", icon: <QuizTwoToneIcon /> },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: `linear-gradient(to right,
    
          rgb(152, 215, 236) 0%,
   rgba(29, 130, 224, 1) 100%
        )`,
        height: "100%",
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <NavLink
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "rgb(241, 227, 32)" : "rgb(50, 9, 9)",
                width: "100%",
                padding: "12px 24px",
                display: "flex",
                alignItems: "center",

                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "rgb(241, 227, 32)",
                  "& .MuiListItemIcon-root": {
                    color: "rgb(241, 227, 32)",
                  },
                },
              })}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: "inherit",
                  transition: "all 0.3s ease",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText sx={{ fontSize: "2rem" }} primary={item.text} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
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
        }}
      >
        {/* Mobile menu button */}
        <Box sx={{ display: { xs: "flex", md: "none" }, p: 1 }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
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
                color: isActive ? "rgb(241, 227, 32)" : "rgb(50, 9, 9)",
                padding: "8px 18px",
                borderRadius: "4px",
                fontSize: "1rem",
                fontWeight: 600,
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                "&:hover": {
                  color: "rgb(241, 227, 32)",
                  "& .MuiSvgIcon-root": {
                    color: "rgb(241, 227, 32)",
                  },
                },
              })}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "inherit",
                  transition: "all 0.3s ease",
                }}
              >
                {item.icon}
              </Box>
              {item.text}
            </NavLink>
          ))}
        </Box>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 220,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
