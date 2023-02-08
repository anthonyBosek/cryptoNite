import { Box } from "@mui/material";
import Header from "components/Header";

const HomePage = () => {
  return (
    <Box m="20px">
      <Header
        title="HomePage"
        subtitle="CryptoNite - The BEST Cryptocurrency app!!"
      />
    </Box>
  );
};

export default HomePage;

// import React from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";

// const HomePage = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (

// <Box fluid >
//     <Typography
//     variant="h1"
//     fontWeight="500"
//     sx={{ color: colors.grey[500] }}
//   >
//     <div id="welcome-banner-section"
//     style={{ height: '20vh',background: colors.primary[700] }}>welcome banner section</div>

//   </Typography>
//   <Typography
//     variant="h1"
//     fontWeight="500"
//     height="500"
//     sx={{ color: colors.grey[500] }}
//   >
//     <div id="line-graph-section"
//     style={{ height: '30vh',background: colors.primary[500] }}>Line graph section</div>

//   </Typography>
//   <Typography
//     variant="h1"
//     fontWeight="500"
//     sx={{ color: colors.grey[500] }}
//   >
//     <div id="bar-graph-section"
//     style={{ height: '40vh' , background: colors.primary[700]}}>
//       bar graph section</div>

//   </Typography>

// </Box>
//    )

// };

// export default HomePage;
// // I made different background shades so you could see the
// // individual sections
