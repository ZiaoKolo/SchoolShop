import Image from "../assets/image2.jpeg";
import { Link } from "react-router-dom";
import Image2 from "../assets/Vector.png";
import { useEffect, useState } from "react";
import axios from "axios";
export function ProductCard({ limit, search }) {
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((res) => setProduits(res.data))
      .catch((err) => console.error(err));
  }, []);

  let produitsAffiches = produits;
  if (search) {
    const lowerSearch = search.toLowerCase();
    produitsAffiches = produitsAffiches.filter(p =>
      p.title.toLowerCase().includes(lowerSearch) ||
      (p.description && p.description.toLowerCase().includes(lowerSearch))
    );
  }
  if (limit) {
    produitsAffiches = produitsAffiches.slice(0, limit);
  }
  return (
    <>
      {produitsAffiches.map((produit) => (
        <div
          key={produit.id}
          className="w-[300px] h-[480px] bg-white rounded-[10px] flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <div className="bg-[#F9FBFC]">
            <img
              src={produit.image_url ? produit.image_url : produit.image ? `http://127.0.0.1:8000${produit.image}` : ''}
              alt="Product"
              className="w-full h-[300px] object-cover rounded-t-[10px]"
            />
          </div>
          <div className="flex flex-col mx-6 mt-4 gap-2">
            <h3 className="text-black font-extrabold">{produit.title}</h3>
            <p className="text-red-500 font-medium">{produit.price} FCFA</p>
          </div>
          <div className="flex flex-row justify-between items-center mx-6 mt-4">
            <Link to={`/products/${produit.id}`}>
              <button className="btn bg-[#FFC83E] text-white rounded-[30px] px-4 py-2 mt-2">
                Voir le produit
              </button>
            </Link>
            <a target="_blank" href="https://wa.me/message/XSQQAE37527UD1">
              <img src={Image2} alt="whatsapp" />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
