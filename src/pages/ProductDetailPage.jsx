import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Icon from "../assets/Icon2.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function ProductDetailPage() {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:8000/api/products/${id}/`)
        .then((res) => setProduit(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  return (
    <div className="w-full bg-white">
      <Header />
      {produit && (
        <div className="flex flex-col md:flex-row justify-evenly md:mx-10 gap-8 md:gap-10 items-center my-10 w-full max-w-5xl mx-auto">
          <img
            src={produit.image_url || produit.image}
            alt="Product"
            className="w-full max-w-md h-auto md:w-[560px] md:h-[460px] object-cover rounded-[10px]"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-[#030712] font-extrabold text-3xl mt-4 mx-6">
              {produit.title}
            </h2>
            <p className="text-[#4B5563] font-medium text-md mt-4 mx-6">
              {produit.description}
            </p>
            <p className="text-red-500 font-extrabold text-[30px]  mx-6">
              {produit.price} FCFA
            </p>
            <a
              href="https://wa.me/message/XSQQAE37527UD1"
              className="text-[#4B5563] font-medium text-md mt-4 mx-6 bg-[#16A34A] p-2 rounded-[8px] flex flex-row items-center gap-2 w-fit no-underline hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out link"
            >
              <img src={Icon} alt="" />
              Contactez-nous sur WhatsApp
            </a>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
