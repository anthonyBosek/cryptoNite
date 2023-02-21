import { tokens } from "../theme";

export const mockBarData = [
  {
    country: "USA",
    "Bit Coin": 137,
    BitCoinColor: "#3da58a",
    Uniswap: 96,
    UniswapColor: "hsl(296, 70%, 50%)",
    Doge: 72,
    DogeColor: "hsl(97, 70%, 50%)",
    Ethereum: 140,
    EthereumColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "Kenya",
    "Bit Coin": 55,
    BitCoinColor: "hsl(307, 70%, 50%)",
    Uniswap: 28,
    UniswapColor: "hsl(111, 70%, 50%)",
    Doge: 58,
    DogeColor: "hsl(273, 70%, 50%)",
    Ethereum: 29,
    EthereumColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "Austria",
    "Bit Coin": 109,
    BitCoinColor: "hsl(72, 70%, 50%)",
    Uniswap: 23,
    UniswapColor: "hsl(96, 70%, 50%)",
    Doge: 34,
    DogeColor: "hsl(106, 70%, 50%)",
    Ethereum: 152,
    EthereumColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "France",
    "Bit Coin": 133,
    BitCoinColor: "hsl(257, 70%, 50%)",
    Uniswap: 52,
    UniswapColor: "hsl(326, 70%, 50%)",
    Doge: 43,
    DogeColor: "hsl(110, 70%, 50%)",
    Ethereum: 83,
    EthereumColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "Brazil",
    "Bit Coin": 81,
    BitCoinColor: "hsl(190, 70%, 50%)",
    Uniswap: 80,
    UniswapColor: "hsl(325, 70%, 50%)",
    Doge: 112,
    DogeColor: "hsl(54, 70%, 50%)",
    Ethereum: 35,
    EthereumColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "India",
    "Bit Coin": 66,
    BitCoinColor: "hsl(208, 70%, 50%)",
    Uniswap: 111,
    UniswapColor: "hsl(334, 70%, 50%)",
    Doge: 167,
    DogeColor: "hsl(182, 70%, 50%)",
    Ethereum: 18,
    EthereumColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "China",
    "Bit Coin": 80,
    BitCoinColor: "hsl(87, 70%, 50%)",
    Uniswap: 47,
    UniswapColor: "hsl(141, 70%, 50%)",
    Doge: 158,
    DogeColor: "hsl(224, 70%, 50%)",
    Ethereum: 49,
    EthereumColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "Ethereum",
    label: "Ethereum",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Dogecoin",
    label: "Dogecoin",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "Tether",
    label: "Tether",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "XRP",
    label: "XRP",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "Bitcoin",
    label: "Bitcoin",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "bitCoinColor",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "02/01",
        y: 101,
      },
      {
        x: "02/02",
        y: 75,
      },
      {
        x: "02/03",
        y: 36,
      },
      {
        x: "02/04",
        y: 216,
      },
      {
        x: "02/05",
        y: 35,
      },
      {
        x: "02/06",
        y: 236,
      },
      {
        x: "02/07",
        y: 88,
      },
      {
        x: "02/08",
        y: 232,
      },
      {
        x: "02/09",
        y: 281,
      },
      {
        x: "02/10",
        y: 1,
      },
      {
        x: "02/11",
        y: 35,
      },
      {
        x: "02/12",
        y: 14,
      },
    ],
  },
  {
    id: "etherium",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "02/01",
        y: 212,
      },
      {
        x: "02/02",
        y: 190,
      },
      {
        x: "02/03",
        y: 270,
      },
      {
        x: "02/04",
        y: 9,
      },
      {
        x: "02/05",
        y: 75,
      },
      {
        x: "02/06",
        y: 175,
      },
      {
        x: "02/07",
        y: 33,
      },
      {
        x: "02/08",
        y: 189,
      },
      {
        x: "02/09",
        y: 97,
      },
      {
        x: "02/10",
        y: 87,
      },
      {
        x: "02/11",
        y: 299,
      },
      {
        x: "02/12",
        y: 251,
      },
    ],
  },
  {
    id: "dogeCoin",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "02/01",
        y: 191,
      },
      {
        x: "02/02",
        y: 136,
      },
      {
        x: "02/03",
        y: 91,
      },
      {
        x: "02/04",
        y: 190,
      },
      {
        x: "02/05",
        y: 211,
      },
      {
        x: "02/06",
        y: 152,
      },
      {
        x: "02/07",
        y: 189,
      },
      {
        x: "02/08",
        y: 152,
      },
      {
        x: "02/09",
        y: 8,
      },
      {
        x: "02/10",
        y: 197,
      },
      {
        x: "02/11",
        y: 107,
      },
      {
        x: "02/12",
        y: 170,
      },
    ],
  },
];
