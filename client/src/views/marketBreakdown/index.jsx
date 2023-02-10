import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieGraph from "../../components/PieGraph";

const MarketBreakdown = () => {
  return (
    <Box m="20px">
      <Header
        title="Market Breakdown"
        subtitle="Where the Top Crypto Markets Rank"
      />
      <Box height="75vh">
        <PieGraph />
      </Box>
    </Box>
  );
};

export default MarketBreakdown;
