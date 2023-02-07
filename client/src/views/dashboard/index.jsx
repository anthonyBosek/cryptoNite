import { Box } from "@mui/material";
import Header from "components/Header";
import LineGraph from "components/LineGraph";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Header title="Dashboard" subtitle="Your CryptoNite Accounts" />
      <LineGraph />
    </Box>
  );
};

export default Dashboard;
