import FilterBar from "../components/filterBar";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router";

const Shop = () => {
  let products = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-bold text-3xl sm:text-4xl mb-2 text-white">
          All Products
        </h1>
        <p className="text-white/40 text-sm">50 products found</p>
      </div>
      <div className="bg-[#111] border border-white/60 rounded-2xl p-4 mb-6">
        <FilterBar />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
