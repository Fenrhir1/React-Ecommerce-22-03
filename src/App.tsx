import HeroSection from "./components/HeroSection.tsx";
import ProductList from "./components/ProductList";
import Navbar from "./components/navbar.tsx"; // Assicurati che il percorso del file sia corretto

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductList />
    </div>
  );
}

export default App;
