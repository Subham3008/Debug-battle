import { useMyContext } from "@/context/AppContext";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const { addToCart, setOpenCart, isInCart } = useMyContext();
  const navigate = useNavigate();
  const {
    id,
    title,
    price,
    discountPercentage,
    rating,
    brand,
    category,
    thumbnail,
    stock,
  } = product;

  return (
    <div className="flex flex-col group bg-[#111] rounded-3xl overflow-hidden border border-white/20  transition-all duration-500 hover:border-[#86a401]">
      {/* Image */}
      <div
        onClick={() => navigate(`/shop/product/details/${id}`)}
        className="relative aspect-square bg-white overflow-hidden"
      >
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500 cursor-pointer"
        />

        <span className="absolute top-3 left-3 bg-black/60 text-white/80 backdrop-blur-sm capitalize text-[10px] px-2 py-1 rounded-full">
          {category}
        </span>

        {/* Discount badge */}
        {discountPercentage > 0 && (
          <span className="absolute top-3 right-3 bg-[#C8F400] text-black text-[10px] px-2 py-1 rounded-full">
            {Math.round(discountPercentage)}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-white/30 text-[10px] uppercase tracking-widest">
          {brand}
        </p>

        <h3 className="font-medium text-white/85 text-sm leading-snug line-clamp-2 flex-1">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.round(rating) ? "text-amber-400" : "text-white/15"
                }
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-white/30 text-[10px]">({rating})</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
          <div className="flex flex-col">
            <span className="font-bold text-[#C8F400] text-lg">
              ${Math.floor(price)}
            </span>

            {/* Stock */}
            <span className="text-[10px] text-white/40">
              {stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <button
            onClick={() => {
              addToCart(product);
              setOpenCart(true);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer
              ${
                isInCart(product.id)
                  ? "bg-green-500 text-white"
                  : "bg-[#C8F400] text-black hover:opacity-90"
              }`}
          >
            <ShoppingCart size={"15px"} />{" "}
            {isInCart(product.id) ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
