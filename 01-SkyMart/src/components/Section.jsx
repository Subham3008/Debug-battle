import { Link } from "react-router";
import { useMyContext } from "../context/AppContext";
import Category from "./Category";
import { useEffect, useState } from "react";

const Section = ({ product }) => {
  // const { productCategory, setProductCategory } = useMyContext();
  const [categoryImages, setCategoryImages] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  useEffect(() => {
    if (!product) return;

    const grouped = {};

    product.forEach((p) => {
      if (!grouped[p.category]) {
        grouped[p.category] = p.thumbnail;
      }
    });
    setCategoryImages(grouped);

    const categoryArray = Object.entries(grouped).map(([category, image]) => ({
      category,
      image,
    }));
    setProductCategory(categoryArray);
  }, [product]);

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading font-bold text-xl">Shop by Category</h2>

        <Link
          to="/shop"
          className="text-volt text-sm hover:text-volt-light transition-colors flex items-center gap-1"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {productCategory.map((categoryData, idx) => {
          return <Category key={idx} categoryData={categoryData} />;
        })}
      </div>
    </div>
  );
};

export default Section;
