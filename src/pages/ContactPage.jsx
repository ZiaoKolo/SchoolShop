import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export function ContactPage() {
  return (
    <div className="bg-white">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold my-10 text-[#00004D] text-center">
          Nos Points de contact à Bondoukou
        </h2>
        <hr className="border-[#00004D] outline-none border-4 w-[150px] rounded-[4px] " />
      </div>
  <div className="flex flex-col md:flex-row justify-around items-stretch gap-8 my-10 px-4 w-full max-w-6xl mx-auto">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[24px] text-gray-900 mb-2">
            Campus principal
          </h3>
          <p className="font-medium text-gray-700">Tél:+225 0701496653</p>
          <p className="font-medium text-gray-700">
            Heure d'assistance : du lundi au vendredi.
          </p>
          <p className="font-medium text-gray-700">De 8h00 à 18h00</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[24px] text-gray-900 mb-2">
            Point de relais centre ville
          </h3>
          <p className="font-medium text-gray-700">Bondoukou ,Côte d'Ivoire </p>
          <p className="font-medium text-gray-700">Tél:+225 0701496653</p>
          <p className="font-medium text-gray-700">
            Heure d'assistance : du lundi au vendredi.
          </p>
          <p className="font-medium text-gray-700">De 8h00 à 18h00</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[24px] text-gray-900 mb-2">
            Support Whatsapp
          </h3>
          <p className="font-medium text-gray-700">Whatsapp: +225 0701496653</p>
          <p className="font-medium text-gray-700">Reponse rapide garantie</p>
        </div>
      </div>
    <Footer />
    </div>
  );
}
