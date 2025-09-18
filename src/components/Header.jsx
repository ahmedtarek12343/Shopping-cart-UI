import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import Theme from "./Theme";

const Header = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [showDropDown, setShowDropDown] = useState(false);
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart
    .reduce((acc, curr) => acc + curr.qty * curr.price, 0)
    .toFixed(2);

  return (
    <header className="bg-bg shadow-md transition-all duration-200 p-4 flex justify-between items-center border-b-2 border-accent sticky top-0 z-50">
      <h1 className="text-3xl font-bold text-blue-600">ShopMate</h1>
      <div className="flex gap-10 items-center">
        <div className="relative">
          <button
            onClick={() => setShowDropDown(!showDropDown)}
            className="cursor-pointer block"
          >
            <FaShoppingCart className="text-3xl " />
            {itemCount > 0 && (
              <span className="absolute bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full -top-2 -right-2">
                {itemCount}
              </span>
            )}
          </button>

          {showDropDown && (
            <div className="absolute right-0 mt-2 w-80 border border-accent bg-bg rounded shadow-lg z-50 ">
              <div className="p-4">
                <div className="flex justify-between p-2 items-center">
                  <h2 className="font-semibold text-lg mb-2">Cart Items</h2>
                </div>
                {cart.length === 0 ? (
                  <p className="text-md text-gray-500">No items added yet :(</p>
                ) : (
                  <>
                    <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200 [&::-webkit-scrollbar]:hidden">
                      {cart.map((item) => (
                        <li
                          key={item.id}
                          className="flex justify-between items-center py-2"
                        >
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-500">
                              {item.qty} x ${item.price}
                            </p>
                          </div>
                          <div>
                            <div className="mb-2 flex justify-between">
                              <button
                                onClick={() => addToCart(item)}
                                className="text-lg font-semibold h-8 w-8 text-green-500 bg-text  rounded flex justify-center items-center cursor-pointer"
                              >
                                +
                              </button>
                              <button
                                onClick={() => removeFromCart(item)}
                                className="text-lg font-semibold h-8 w-8 text-red-500 bg-text  rounded flex justify-center items-center cursor-pointer"
                              >
                                -
                              </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-3">
                              <img
                                src={item.image}
                                className="w-20 object-cover rounded-lg"
                              />
                              <p>${(item.qty * item.price).toFixed(2)}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>${total}</span>
                    </div>
                    {cart.length > 0 && (
                      <button
                        onClick={() => clearCart()}
                        className=" mt-3 w-full bg-red-500 text-white py-1 rounded transition hover:bg-red-600"
                      >
                        Clear
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
        <Theme />
      </div>
    </header>
  );
};

export default Header;
