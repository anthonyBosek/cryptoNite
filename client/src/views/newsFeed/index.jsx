import { useState, useEffect, useRef } from "react";
import NewsCard from "./feedComponents/NewsCard";
import axios from "axios";
// import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { tokens } from "../../theme";
// import Header from "../../components/Header";


const NewsFeed = () => {
    
    const [feed,setFeed] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const options = {
        method: 'GET',
        url: 'https://crypto-news34.p.rapidapi.com/news/cryptonews',
        headers: {
          'X-RapidAPI-Key': '4064c18b18msha0ce5c4a61d8fa1p1445edjsn1c4e2f917361',
          'X-RapidAPI-Host': 'crypto-news34.p.rapidapi.com'
        }
      };
      
    
    const runOnce = useRef(false);
    useEffect(() => {
    if (runOnce.current === false){
        setIsLoading(true)
    runOnce.current = true;
    axios.request(options).then(function (res) {
        setIsLoading(false)
        setFeed(res.data)
        console.log(feed);
    }).catch(function (error) {
        console.error(error);
    });
   

    }
    }, []);
    
    return(
        <div>
        <h1> NEWS FEED</h1>
        {feed !== null ? feed.map((feed, i)=> <NewsCard feed={feed} key={i}/>) : null}
        </div>
    )

}


export default NewsFeed