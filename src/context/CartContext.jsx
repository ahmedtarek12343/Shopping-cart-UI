import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing.qty === 1) {
        prev = prev.filter((item) => item.id !== existing.id);
      }
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty - 1 > 0 ? item.qty - 1 : 0 }
            : item
        );
      }

      return [...prev];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
