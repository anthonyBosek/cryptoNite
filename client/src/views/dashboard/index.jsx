import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLogout } from "state";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Typography>Dashboard</Typography>
      <button onClick={() => dispatch(setLogout())}>Log Out</button>
    </div>
  );
};

export default Dashboard;
