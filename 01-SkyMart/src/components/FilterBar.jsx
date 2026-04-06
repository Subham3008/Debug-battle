import { Search } from "lucide-react";
import React from "react";

const FilterBar = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Search */}
      <div className="relative flex-1">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25">
          <Search size={"15px"}/>
        </span>

        <input
          type="text"
          placeholder="Search products..."
          className="h-10 w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C8F400]"
        />
      </div>

      {/* Category */}
      <div className="relative">
        <select className="h-10 bg-white/5 border border-white/10 rounded-2xl px-3 pr-8 text-white appearance-none cursor-pointer min-w-40 focus:outline-none focus:border-[#C8F400]">
          <option className="bg-black/90" value="all">
            All Categories
          </option>
          <option className="bg-black/90" value="electronics">
            Electronics
          </option>
          <option className="bg-black/90" value="clothing">
            Clothing
          </option>
          <option className="bg-black/90" value="furniture">
            Furniture
          </option>
          <option className="bg-black/90" value="home">
            Home
          </option>
          <option className="bg-black/90" value="sports">
            Sports
          </option>
          <option className="bg-black/90" value="accessories">
            Accessories
          </option>
        </select>

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none">
          ▼
        </span>
      </div>

      {/* Sort */}
      <div className="relative">
        <select className="h-10 bg-white/5 border border-white/10 rounded-2xl px-3 pr-8 text-white appearance-none cursor-pointer min-w-45 focus:outline-none focus:border-[#C8F400]">
          <option className="bg-black/90" value="default">
            Featured
          </option>
          <option className="bg-black/90" value="price-asc">
            Price: Low → High
          </option>
          <option className="bg-black/90" value="price-desc">
            Price: High → Low
          </option>
          <option className="bg-black/90" value="rating-desc">
            Top Rated
          </option>
          <option className="bg-black/90" value="rating-asc">
            Lowest Rated
          </option>
        </select>

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none">
          ▼
        </span>
      </div>
    </div>
  );
};

export default FilterBar;
