import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineGraph from "../../components/LineGraph";

const GreatestGainer = () => {
  return (
    <Box m="20px">
      <Header
        title="Greatest Gainers"
        subtitle="CryptoNites Greatest Gainers - past 7 days"
      />
      <Box height="75vh">
        <LineGraph />
      </Box>
    </Box>
  );
};

export default GreatestGainer;
