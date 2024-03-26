import { ReactNode, createContext, useEffect, useState } from "react";
import { Product, Users } from "../declarations/general";

export const ContextApp = createContext<{
  products: Array<Product>;
  cartItems: Array<Product>;
  handleAddToCart: (product: Product) => void;
  handleRemoveFromCart: (idProduct: Product["id"]) => void;
  handleLogin: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => void;
  userLogged: Users;
  setProducts: (products: Array<Product>) => void;
  handleLogout: () => void;
  handleCheckout: () => void;
  adminPostProduct?: (product: Product) => void;
  adminDeleteProduct: (productId: Product["id"]) => void;
  adminEditProduct?: (productEdited: Product) => void;
}>({
  products: [],
  cartItems: [],
  userLogged: { id: 0, name: "", email: "", isAdmin: false },
  setProducts: () => {},
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleLogin: () => {},
  handleLogout: () => {},
  handleCheckout: () => {},
  adminPostProduct: () => {},
  adminDeleteProduct: () => {},
  adminEditProduct: () => {},
});

interface Props {
  children: ReactNode;
}

export const ContextAppProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [cartItems, setCartItems] = useState<Array<Product>>([]);
  const [users, setUsers] = useState<Users[]>([]);
  const [userLogged, setUserLogged] = useState<Users>(
    localStorage.getItem("UserLogged")
      ? JSON.parse(localStorage.getItem("UserLogged")!)
      : { id: 0, name: "", email: "", isAdmin: false }
  ); //ALL
  function handleLogin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const logUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!!logUser) {
      debugger;
      setUserLogged(logUser);
      localStorage.setItem("UserLogged", JSON.stringify(logUser));
    } else throw new Error("user not found");
  }
  function handleLogout() {
    setUserLogged({ id: 0, name: "", email: "", isAdmin: false });
    localStorage.removeItem("UserLogged");
  }

  //ADMIN
  function adminPostProduct(product: Product) {
    addProduct(product).then((res) => setProducts([res, ...products]));
  }
  function adminDeleteProduct(productId: Product["id"]) {
    deleteProduct(productId);
    setProducts(products.filter((product) => product.id !== productId));
  }
  function adminEditProduct(productEdited: Product) {
    editProduct(productEdited);
    setProducts(
      products.map((product) =>
        product.id === productEdited.id ? productEdited : product
      )
    );
  }

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

  const getAllUser = async () => {
    try {
      const response = await fetch("http://localhost:1234/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getAllUser();
  }, []);

  const addProduct = async (product: Product) => {
    const response = await fetch("http://localhost:1234/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  };

  const editProduct = async (product: Product) => {
    const response = await fetch(
      `http://localhost:1234/products/${product.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    const data = await response.json();
    return data;
  };

  const deleteProduct = async (productId: Product["id"]) => {
    const response = await fetch(
      `http://localhost:1234/products/${productId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  };

  return (
    <ContextApp.Provider
      value={{
        handleAddToCart,
        handleRemoveFromCart,
        setProducts,
        products,
        userLogged,
        cartItems,
        handleLogin,
        handleLogout,
        handleCheckout,
        adminPostProduct,
        adminDeleteProduct,
        adminEditProduct,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
