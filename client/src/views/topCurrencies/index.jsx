import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarGraph from "../../components/BarGraph";

const TopCurrencies = () => {
  return (
    <Box m="20px">
      <Header title="Top Currencies" subtitle="Cryptonites Top Choices 2023" />
      <Box height="75vh">
        <BarGraph />
      </Box>
    </Box>
  );
};

export default TopCurrencies;
