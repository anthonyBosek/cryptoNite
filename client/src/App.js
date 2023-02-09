import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import SideNav from "views/global/SideNav";
import TopNav from "views/global/TopNav";
import HomePage from "views/homePage";
import LoginPage from "views/loginPage";
import Dashboard from "views/dashboard";
import NewsFeed from "views/newsFeed";
import GreatestGainer from "views/greatestGainer";
import TopCurrencies from "views/topCurrencies";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SideNav />
          <main className="container">
            <TopNav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/newsFeed" element={<NewsFeed />} />
              <Route path="/greatestGainer" element={<GreatestGainer />} />
              <Route path="/topCurrencies" element={<TopCurrencies />} />
              <Route
                path="/user"
                element={isAuth ? <Dashboard /> : <Navigate to="/" />}
              ></Route>
            </Routes>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
