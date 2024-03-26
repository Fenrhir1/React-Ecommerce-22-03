import "./assets/css/index.css";
import { ContextApp, ContextAppProvider } from "./context/Provider.tsx";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import ProductPage from "./pages/ProductPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Checkout from "./pages/Checkout.tsx";
import CheckoutSuccess from "./pages/CheckoutSuccess.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import { useContext } from "react";

function DashLock({ isAuthenticated }: { isAuthenticated: boolean }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

function App() {
  const { userLogged } = useContext(ContextApp);
  return (
    <ContextAppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<DashLock isAuthenticated={userLogged.isAdmin} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route
            path="*"
            element={
              <div>
                Page not found <button>RETURN</button>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextAppProvider>
  );
}

export default App;
