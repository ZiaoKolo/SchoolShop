import { Header } from "../components/Header";
import { MdDashboard } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { IoAddCircle } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
export function AdminPage() {
  return (
    <div className=" h-full">
      <div className="h-full flex flex-row">
        <aside className="h-full w-[250px] bg-[#00004D] p-4 ">
            <div className="flex flex-col gap-6 text-white my-10">
             <a href="" className=" flex flex-row items-center no-underline gap-2 lien">
              <MdDashboard size={35} />
              <h3 className="text-2xl">Dashboard</h3>
            </a>
            <a href="" className=" flex flex-row items-center no-underline mt-10 gap-2 lien">
              <AiFillProduct size={30} />
              <h3 className="">Produits</h3>
            </a>
            <a href="" className="outline-none flex flex-row items-center no-underline gap-2 lien">
              <IoAddCircle size={30} />
              <h3 className="">Ajouter Produit</h3>
            </a>
            <a href="" className="outline-none flex flex-row items-center no-underline gap-2 lien">
              <MdOutlineRemoveShoppingCart size={30} />
              <h3 className="">Supprimer Produit</h3>
            </a>
            <a href="" className="outline-none flex flex-row items-center no-underline gap-2 lien">
              <FaRegEdit size={30} />
              <h3 className="">Modifier Produit</h3>
            </a>
          </div>
        </aside>
        <main className="bg-[#E7EAF0] w-full">
        </main>
      </div>
    </div>
  );
}
