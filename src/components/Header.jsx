import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className=" w-full h-[110px] p-[20px] z-10 sticky top-0 bg-opacity-85">
        {/* Background blur layer */}
        <div className="absolute inset-0 bg-[#F9FBFC] backdrop-blur-3xl  border-white/20 shadow-lg"></div>

        {/* Header content (net) */}
        <div className="relative z-10 flex items-center justify-between text-white h-full">
          <div className="header-logo mx-[30px]">
            <img
              src={Logo}
              alt="School Shop Logo"
              style={{ height: "65px", width: "65px" }}
            />
          </div>

          <nav className="header-nav hidden md:flex gap-4 mx-[20px] bg-[#00004D] rounded-[30px] p-1">
            <div className="header-nav-item w-[140px] h-[40px] bg-white rounded-[30px] flex justify-center items-center hover:bg-[#00004D] hover:text-white transition-all duration-300 ease-in-out">
              <Link
                className="text text-gray-800 hover:text-white transition-colors duration-300"
                to="/"
              >
                Accueil
              </Link>
            </div>
            <div className="header-nav-item w-[140px] h-[40px] bg-white rounded-[30px] flex justify-center items-center hover:bg-[#00004D] hover:text-white transition-all duration-300 ease-in-out">
              <Link
                className="text text-gray-800 hover:text-white transition-colors duration-300"
                to="/products"
              >
                Produits
              </Link>
            </div>
            <div className="header-nav-item w-[140px] h-[40px] bg-white rounded-[30px] flex justify-center items-center hover:bg-[#00004D] hover:text-white transition-all duration-300 ease-in-out">
              <Link
                className="text text-gray-800 hover:text-white transition-colors duration-300"
                to="/about"
              >
                À Propos
              </Link>
            </div>
            <div className="header-nav-item w-[140px] h-[40px] bg-white rounded-[30px] flex justify-center items-center hover:bg-[#00004D] hover:text-white transition-all duration-300 ease-in-out">
              <Link
                className="text text-gray-800 hover:text-white transition-colors duration-300"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </nav>

          <div className="center md:hidden">
            <div
              id="menu"
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer ${isOpen ? "open" : ""}`}
            >
              <div className="bar bg-white w-6 h-0.5 mb-1 transition-all duration-300"></div>
              <div className="bar bg-white w-6 h-0.5 mb-1 transition-all duration-300"></div>
              <div className="bar bg-white w-6 h-0.5 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mobile-menu flex flex-col gap-1 bg-[#00004D] p-4 rounded-[30px] absolute top-[100px] right-4 shadow-2xl z-20 backdrop-blur-sm border border-white/10">
            <div className="header-nav-item w-[140px] h-[40px] bg-white hover:bg-[#00004D] rounded-[30px] flex justify-center items-center transition-all duration-300 ease-in-out group">
              <Link
                className="text text-gray-800 hover:text-white transition-colors duration-300"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
            </div>
            <div className="header-nav-item w-[140px] h-[40px] bg-white hover:bg-[#00004D] rounded-[30px] flex justify-center items-center transition-all duration-300 ease-in-out group">
              <Link
                className="text text-gray-800 hover:text-white transition-colors duration-300"
                to="/products"
                onClick={() => setIsOpen(false)}
              >
                Produits
              </Link>
            </div>
            <div className="header-nav-item w-[140px] h-[40px] bg-white hover:bg-[#00004D] rounded-[30px] flex justify-center items-center transition-all duration-300 ease-in-out group">
              <Link
                className="text text-gray-800 hover:text-white transition-colors duration-300"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                À Propos
              </Link>
            </div>
            <div className="header-nav-item w-[140px] h-[40px] bg-white hover:bg-[#00004D] rounded-[30px] flex justify-center items-center transition-all duration-300 ease-in-out group">
              <Link
                className="text text-gray-800 hover:text-white transition-colors duration-300"
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
