import { useEffect, useState } from "react";
import axios from "axios";

const LineGraph = () => {
  const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  const [coinHistory, setCoinHistory] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const savedDataResponse = await axios({
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "50",
          offset: "0",
        },
        headers: {
          "X-RapidAPI-Key": "xxxxxxxxxxx",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      });
      const savedData = await savedDataResponse.data;

      setData(savedData);
    };
    getData();
  }, []);

  useEffect(() => {
    const getCoinData = async () => {
      const savedDataResponse = await axios({
        method: "GET",
        url: `https://coinranking1.p.rapidapi.com/coin/${data?.data?.coins[0].uuid}/history`,
        params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
        headers: {
          "X-RapidAPI-Key": "xxxxxxxxxxx",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      });
      const savedData = await savedDataResponse.data;

      setCoinHistory(savedData);
    };
    if (data) getCoinData();
  }, [data]);

  return (
    <>
      <div>LineGraph</div>
      {console.log(coinHistory)}
    </>
  );
};

export default LineGraph;

// "41500d87e1msh8ccf87aa2b7ae22p10081fjsn288f98b6b052",
// "41500d87e1msh8ccf87aa2b7ae22p10081fjsn288f98b6b052",
