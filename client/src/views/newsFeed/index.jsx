import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../theme";
import Header from "../../components/Header";
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://crypto-pulse.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Key': '4064c18b18msha0ce5c4a61d8fa1p1445edjsn1c4e2f917361',
    'X-RapidAPI-Host': 'crypto-pulse.p.rapidapi.com'
  }
};



const index = () => {
    const runOnce = useRef(false);
useEffect(() => {
if (runOnce.current === false){
runOnce.current = true;
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
return (
<div>index</div>
)
}
}, []);

}

export default index