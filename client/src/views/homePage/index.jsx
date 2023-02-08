import React from "react";
import { Box, useTheme, Button, Paper, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import Header from "components/Header";
import { tokens } from "../../theme";

const HomePage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  }));

  return (
    <Stack spacing={2}>
      <Box sx={{ width: '100%' }}>

        <Header title="Welcome to cryptoNite - Your one stop for all things crypto"
          subtitle="Greetings user" />

        
          <Button variant="contained" sx={{ width: '49%', margin: theme.spacing(1) , backgroundColor: colors.greenAccent[600]}}  >Login</Button>
          <Button variant="contained" sx={{ width: '49%', backgroundColor: colors.blueAccent[700]}}>Register</Button>
      </Box>
      <Box sx={{ width: '100%' }}>

        <Item>Line Graph</Item>

      </Box>

      <Box sx={{ width: '100%' }}>

        <Item>Bar Graph</Item>

      </Box>


    </Stack>

  
  )

};

export default HomePage;
// I made different background shades so you could see the
// individual sections