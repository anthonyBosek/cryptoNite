import React from 'react';
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const NewsCard = (props) => {
    const {title, source, url} = props.feed
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <div
    style={{ height: '20vh',background: colors.primary[700] }}
    >
        <h2>{title}</h2>
        <h3>{source}</h3>
        
    </div>
  )
}

export default NewsCard