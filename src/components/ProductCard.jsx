import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div
      key={product.id}
      className="bg-card rounded-lg shadow-lg p-4 grid grid-cols-[subgrid] col-span-[1/3] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        src={product.image}
        alt={product.name}
        className="object-cover rounded mb-4"
      />

      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className=" text-sm mb-2">{product.description}</p>
      <p className="font-bold text-lg">${product.price.toFixed(2)}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 cursor-pointer text-white mt-3 px-4 py-2 rounded transition hover:bg-blue-700"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
