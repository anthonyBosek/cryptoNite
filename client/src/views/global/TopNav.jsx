import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMode, setLogout } from "state";
import { Box, IconButton, useTheme, Fab } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => setIsLogoutVisible((prev) => !prev)}>
          <PersonOutlinedIcon />
        </IconButton>
        {isLogoutVisible && (
          <Fab
            variant="extended"
            size="small"
            sx={{
              position: "absolute",
              top: "3.5rem",
              right: "1.25rem",
              zIndex: 1,
            }}
            onClick={() => {
              dispatch(setLogout());
              setIsLogoutVisible(false);
            }}
          >
            <LogoutIcon sx={{ marginRight: "4px" }} />
            Logout
          </Fab>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
