import { useNavigate } from "react-router";

const Category = ({ categoryData }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/shop")}
      className="group bg-white/80 border border-white/20 hover:border-[#C8F400]/30 hover:bg-white/95 rounded-2xl p-5 text-center 
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
    >
      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <div className="w-25 h-20 flex items-center justify-center rounded-2xl bg-[#C8F400]/50 group-hover:bg-[#C8F400]/20 transition border">
          <img
            src={categoryData.image}
            alt={categoryData.category}
            className="w-15 h-15 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Title */}
      <p className="font-semibold text-sm capitalize text-gray-800 group-hover:text-black transition underline">
        {categoryData.category}
      </p>

      {/* Items */}
      <p className="text-gray-500 text-xs mt-1">
        {categoryData.category.length} items
      </p>
    </div>
  );
};

export default Category;
