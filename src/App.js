import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import { RecoilRoot } from "recoil";
import InitialRequests from "./InitialRequests";
import Product from "./components/Product";
import Form from "./components/Form";
import OrderSuccessPage from "./components/OrderSuccessPage";
function App() {
  return (
    <Router>
      <RecoilRoot>
          <InitialRequests />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/ProductInfo" element={<Product />} />
            <Route path="/form" element={<Form />} />
            <Route path="/orderSuccessPage" element={<OrderSuccessPage />} />
          </Routes>
      </RecoilRoot>
    </Router>
  );
}

export default App;
/*<ThemeProvider>
        <main>{routes}</main>
      </ThemeProvider>*/
