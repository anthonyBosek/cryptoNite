import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const HomePage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ background: colors.primary[500] }}>
      <Typography
        variant="h1"
        fontWeight="500"
        sx={{ color: colors.grey[500] }}
      >
        GREY
      </Typography>

      <Typography
        variant="h1"
        fontWeight="500"
        sx={{ color: colors.primary[900] }}
      >
        PRIMARY
      </Typography>

      <Typography
        variant="h1"
        fontWeight="500"
        sx={{ color: colors.greenAccent[500] }}
      >
        GREEN
      </Typography>

      <Typography
        variant="h1"
        fontWeight="500"
        sx={{ color: colors.blueAccent[500] }}
      >
        BLUE
      </Typography>

      <Typography
        variant="h1"
        fontWeight="500"
        sx={{ color: colors.redAccent[500] }}
      >
        RED
      </Typography>
    </Box>
  );
}; // Sample component for testing

export default HomePage;
