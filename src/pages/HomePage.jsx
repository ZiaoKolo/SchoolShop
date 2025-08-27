import { Header } from "../components/Header";
import Image from "../assets/image.png";
import { Link } from "react-router-dom";
import Icon from "../assets/Icon.png"
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
export function HomePage() {
  return (
    <div className="bg-white w-full">
      <Header />
      <section className="text-[#00004D] bg-[#F9FBFC] flex flex-col md:flex-row justify-around items-center px-6 md:px-20 py-10">
        <div className="presentation max-w-md md:text-left">
          <div className="bg-gradient-to-r from-green-600 to-white rounded-[6px] h-[28px] w-[123px] px-2 py-1">
            <p className="font-700 text-[#166534]">VISION+</p>
          </div>

          <h1 className="text-3xl md:text-5xl text-clip font-extrabold leading-tight my-[20px]">
            Faites vos achats chez nous pour une meilleure qualité et le
            meilleur prix
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Tout pour la rentrée scolaire au meilleur prix
          </p>
          <Link to="/products">
            <button className="bg-green-500 text-white rounded-[8px] px-4 py-2 my-3  hover:transition-all hover:transition-ease-in-out duration-75">
              Voir nos produits
            </button>
          </Link>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src={Image}
            alt="Promo rentrée"
            className="max-w-sm md:max-w-md"
          />
        </div>
      </section>
      <section>
        <div className="flex flex-row items-center">
          <h2 className="text-3xl font-extrabold mx-3 my-10 text-[#00004D]">
            Nos Produits
          </h2>
          <hr className="border-[#00004D] outline-none border-4 w-[150px] rounded-[4px] mx-4" />
        </div>
        <div className="flex flex-row items-center justify-end">
            <a href="/products" className="flex items-center mr-4 gap-2">
                <p className="text-[#00004D] font-bold">Voir plus</p>
                <img src={Icon} alt="Icon" />
            </a>
        </div>

        <div className="flex flex-wrap justify-center mt-10 mx-3 gap-10 mb-10 px-4">
          <ProductCard limit={4} />
        </div>
      </section>
        <Footer />
    </div>
  );
}
