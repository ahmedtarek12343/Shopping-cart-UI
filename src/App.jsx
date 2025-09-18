import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-bg p-6">
        <h1 className="text-3xl font-bold mb-10">🛒 Product Catalog</h1>
        <ProductList />
      </div>
    </>
  );
}

export default App;
