import { Header } from "../components/Header";
import Img from "../assets/img.jpg";
import { Footer } from "../components/Footer";
export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col gap-4 bg-white">
      <Header />
      <div className="flex items-center justify-center gap-10">
        <h2 className="text-3xl font-extrabold my-10 text-[#00004D] text-center">
          À Propos de Nous
        </h2>
        <hr className="border-[#00004D] outline-none border-4 w-[150px] rounded-[4px] " />
      </div>
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 gap-6 lg:gap-10 items-center lg:items-start">
  <div className="text-black text-justify flex-1">
    <p className="mb-4 text-sm sm:text-base">
      Chez <strong>Vision+</strong>, nous croyons que la réussite
      scolaire commence avec les bons outils. Depuis notre création,
      nous nous engageons à offrir aux élèves, étudiants, parents et
      établissements scolaires des{" "}
      <strong>fournitures de qualité</strong> adaptées à tous les
      besoins.
    </p>
    <p className="mb-4 text-sm sm:text-base">
      Notre mission est simple :{" "}
      <strong>rendre l'éducation plus accessible</strong> en proposant
      des produits fiables, modernes et abordables, allant des cahiers
      et stylos jusqu'aux sacs, accessoires technologiques et matériels
      de bureau.
    </p>
    <ul className="text-left mb-6 list-disc list-inside text-sm sm:text-base space-y-1">
      <li>
        D'une large gamme de fournitures scolaires sélectionnées avec
        soin
      </li>
      <li>D'un excellent rapport qualité-prix</li>
      <li>D'un service client à l'écoute et disponible</li>
      <li>De solutions adaptées pour chaque rentrée scolaire</li>
    </ul>
    <p className="font-semibold text-sm sm:text-base">
      Nous ne vendons pas seulement des produits, nous accompagnons les
      élèves et leurs familles dans leur parcours éducatif, car chaque
      réussite commence par une bonne préparation.
    </p>
    <p className="mt-6 text-base sm:text-lg font-bold text-[#00004D]">
      Vision+ – Tout pour la rentrée, au meilleur prix et avec la
      meilleure qualité.
    </p>
  </div>
  
  <div className="flex-shrink-0">
     <img 
      src={Img} 
      alt="Vision+ - Fournitures scolaires de qualité" 
      className="w-full max-w-lg xl:w-[600px] h-auto object-cover rounded-lg shadow-lg"
    />
  </div>
</div>
      <Footer />
    </div>
  );
}
