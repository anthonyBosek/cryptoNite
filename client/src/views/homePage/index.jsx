import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, useTheme, Button, Typography } from "@mui/material";
import BarGraph from "components/BarGraph";
import Header from "components/Header";
import { tokens } from "../../theme";
import LineGraph from "components/LineGraph";
import { setRegister } from "state";

const HomePage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box m="20px">
      <Header
        title="Welcome to cryptoNite"
        subtitle="Your one stop for all things crypto!"
      />
      <Box
        gridColumn="span 12"
        gridRow="span 2"
        // backgroundColor={colors.primary[400]}
      >
        <Button
          variant="contained"
          sx={{
            width: "49%",
            margin: theme.spacing(1),
            backgroundColor: colors.greenAccent[600],
          }}
          onClick={() => {
            dispatch(setRegister(false));
            navigate("/login");
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{ width: "49%", backgroundColor: colors.blueAccent[700] }}
          onClick={() => {
            dispatch(setRegister(true));
            navigate("/login");
          }}
        >
          Register
        </Button>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mt="20px"
      >
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Recent Fluctuations
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                cryptoNites Top Currencies
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineGraph isDashboard={true} />
          </Box>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mt="20px"
      >
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Top 5 At A Glance
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                cryptoNites Most Lucrative Returns
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <BarGraph isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
