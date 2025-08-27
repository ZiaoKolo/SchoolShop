import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

export function ProductsPage() {
  const [search, setSearch] = useState("");
  return (
    <div className="min-h-screen flex flex-col gap-4 bg-white ">
      <Header />
      <div className=" flex flex-row gap-3 items-center border  rounded-[30px] px-4 py-1  w-[300px] h-[40px] mx-10 my-10">
        <input
          className="h-[40px] outline-none w-[250px] bg-[#F9FBFC] text-gray-500"
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="bg-[#00004D] rounded-r-[30px] h-[40px] w-[60px] flex justify-center items-center text-white mx-[-10px]">
          <IoSearchOutline />
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-10 mx-3 gap-10 mb-10 px-4">
        <ProductCard search={search} />
      </div>
      <Footer />
    </div>
  );

}
