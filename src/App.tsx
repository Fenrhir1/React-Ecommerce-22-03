import HeroSection from "./components/HeroSection.tsx";
import ProductList from "./components/ProductList";
import "./assets/css/index.css";
import { ContextAppProvider } from "./context/Provider.tsx";

function App() {
  return (
    <ContextAppProvider>
      <div>
        <HeroSection />
        <ProductList />
      </div>
    </ContextAppProvider>
  );
}

export default App;
