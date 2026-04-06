import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log("Api fetched error form single product -->", error);
    }
  };

  useEffect(() => {
    if (id) getSingleProduct();
  }, [id]);

  if (!singleProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="rounded-2xl bg-white px-6 py-4 shadow-md text-gray-600">
          Loading product details...
        </div>
      </div>
    );
  }

  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    thumbnail,
  } = singleProduct;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-white/30 font-body mb-8">
        <Link
          to="/shop"
          className="hover:text-white flex items-center gap-1.5 transition-colors"
        >
          ← Products
        </Link>

        <span>/</span>
        <span className="capitalize text-white/50">{category}</span>

        <span>/</span>
        <span className="text-white/70 clamp-1 max-w-50">{title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-16">
        {/* Image */}
        <div className="bg-white rounded-3xl p-10 flex items-center justify-center aspect-square">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5">
          {/* Category */}
          <span className="bg-[#C8F400]/10 text-[#C8F400] border border-[#C8F400]/20 capitalize w-fit text-xs px-3 py-1 rounded-full">
            {category}
          </span>

          {/* Title */}
          <h1 className="font-bold text-2xl sm:text-3xl text-white leading-tight">
            {title}
          </h1>

          {/* Brand */}
          {/* <p className="text-white/40 text-sm">Brand: {brand}</p> */}

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < Math.round(rating) ? "text-amber-400" : "text-white/20"
                  }
                >
                  ★
                </span>
              ))}
            </div>

            <span className="text-white/70 text-sm font-semibold">
              {rating}
            </span>
          </div>

          {/* Price */}
          <div className="py-4 border-y border-white/50">
            <span className="font-bold text-4xl text-[#C8F400]">${price}</span>

            {discountPercentage > 0 && (
              <span className="ml-3 text-sm text-red-400">
                {Math.round(discountPercentage)}% OFF
              </span>
            )}
          </div>

          {/* Stock */}
          {/* <p className="text-white/30 text-sm">
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </p> */}

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed">{description}</p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-base transition-all duration-200 active:scale-95 bg-[#C8F400] text-black hover:opacity-90">
              🛒 Add to Cart
            </button>

            <button className="p-3.5 border rounded-2xl transition-all border-white/10 text-white/30 hover:text-red-400 hover:border-red-500/30">
              ❤️
            </button>
          </div>

          {/* Features (UNCHANGED UI) */}
          <div className="grid grid-cols-3 gap-3 mt-1">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-center">
              <p className="text-[#C8F400] mb-1">🚚</p>
              <p className="text-white/60 text-[11px] font-semibold">
                Free Delivery
              </p>
              <p className="text-white/25 text-[10px]">On orders $50+</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-center">
              <p className="text-[#C8F400] mb-1">🔒</p>
              <p className="text-white/60 text-[11px] font-semibold">
                Secure Pay
              </p>
              <p className="text-white/25 text-[10px]">256-bit SSL</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-center">
              <p className="text-[#C8F400] mb-1">🔄</p>
              <p className="text-white/60 text-[11px] font-semibold">
                Easy Returns
              </p>
              <p className="text-white/25 text-[10px]">30-day policy</p>
            </div>
          </div>

          {/* Navigation (DYNAMIC FIX) */}
          <div className="flex gap-3 mt-6">
            <Link
              to={`/products/${Number(id) - 1}`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl transition text-white text-sm"
            >
              ← Previous
            </Link>

            <Link
              to={`/products/${Number(id) + 1}`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#C8F400] hover:opacity-90 text-black border border-[#C8F400] rounded-2xl transition text-sm font-semibold"
            >
              Next →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
