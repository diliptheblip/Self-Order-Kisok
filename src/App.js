

import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, Paper } from '@mui/material';
import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentScreen from './PaymentScreen';
import ChooseScreen from './screens/ChooseScreen';
import CompleteOrderScreen from './screens/CompleteOrderScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import ReviewScreen from './screens/ReviewScreen';
import SelectPaymentScreen from './screens/SelectPaymentScreen';


const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
    },
  },
  palette: {
    primary: { main: "#ff1744" },
    secondary: {
      main: "#118e16",
      contrastText: "#ffffff",
    },
  },
});

  // <Route
  //   path="/create"
  //   element={<PrivateRoute component={CreatePostPage} />}
  // ></Route>;
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Routes>
              <Route
                // component={HomeScreen}
                path="/"
                element={<HomeScreen />}
                exact={true}
              ></Route>
              <Route
                path="/choose"
                // component={ChooseScreen}
                element={<ChooseScreen />}
                exact={true}
              ></Route>
              <Route
                path="/order"
                element={<OrderScreen />}
                exact={true}
              ></Route>

              <Route
                path="/review"
                element={<ReviewScreen />}
                exact={true}
              ></Route>

              <Route
                path="/select-payment"
                element={<SelectPaymentScreen />}
                exact={true}
              ></Route>

              <Route
                path="/payment"
                element={<PaymentScreen />}
                exact={true}
              ></Route>

              <Route
                path="/complete"
                element={<CompleteOrderScreen />}
                exact={true}
              ></Route>
            </Routes>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
