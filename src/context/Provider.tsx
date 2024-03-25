import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "../declarations/general";

export const ContextApp = createContext<{
  products: Array<Product>;
  cartItems: Array<Product>;
  handleAddToCart: (product: Product) => void;
  handleRemoveFromCart: (idProduct: Product["id"]) => void;
  handleLogin: () => void;
  handleLogout: () => void;
  handleCheckout: () => void;
}>({
  products: [],
  cartItems: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleLogin: () => {},
  handleLogout: () => {},
  handleCheckout: () => {},
});

interface Props {
  children: ReactNode;
}

export const ContextAppProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [cartItems, setCartItems] = useState<Array<Product>>([]);
  const [userLogged, setUserLogged] = useState<boolean>(false);

  const handleLogin = () => {
    if (!userLogged) {
      setUserLogged(true);
    }
  };

  const handleLogout = () => {
    if (userLogged) {
      setUserLogged(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, stock: item.stock + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, stock: 1 }]);
    }
  };

  const handleRemoveFromCart = (idProduct: Product["id"]) => {
    const newCartItems = cartItems.filter((item) => item.id !== idProduct);
    setCartItems(newCartItems);
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  const getProducts = async () => {
    const response = await fetch("http://localhost:1234/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ContextApp.Provider
      value={{
        handleAddToCart,
        handleRemoveFromCart,
        products,
        cartItems,
        handleLogin,
        handleLogout,
        handleCheckout,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
