import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const Header = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Trang Chủ", path: "/" },
    { text: "Giới Thiệu", path: "/about" },
    { text: "Dấu Ấn Lịch Sử", path: "/history" },
    { text: "Sự Kiện", path: "/events" },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item.text} onClick={handleDrawerToggle}>
          <NavLink
            to={item.path}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#fff" : "inherit",
              backgroundColor: isActive ? "rgba(1, 0, 0, 0.2)" : "transparent",
              padding: "8px 16px",
              borderRadius: "4px",
              width: "100%",
              fontSize: "1rem",
              fontWeight: 700,
            })}
          >
            <ListItemText primary={item.text} />
          </NavLink>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ minHeight: { xs: 80, sm: 100 } }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h5"
            component={NavLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "rgb(138, 24, 24)",
        
              fontWeight: "bold",
              whiteSpace: "pre-line",
              lineHeight: 1.2,
              textShadow: "1px 1px 0px rgb(110 102 102)",
            }}
          >
            Dấu Ấn 50 Năm Thống Nhất{"\n"}135 Năm Ngày Sinh Chủ Tịch Hồ Chí Minh
          </Typography>
          {!isMobile && (
            <>
              {menuItems.map((item) => (
                <NavLink
                  key={item.text}
                  to={item.path}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "rgb(254, 254, 255)" : "rgb(28, 29, 22)",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    fontSize: "1rem",
                    fontWeight: 700,
                  })}
                >
                  {item.text}
                </NavLink>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar sx={{ minHeight: { xs: 80, sm: 100 } }} />{" "}
      {/* Placeholder với chiều cao khớp với Toolbar trong AppBar */}
      <Box component="main">{children}</Box>
    </>
  );
};

export default Header;
