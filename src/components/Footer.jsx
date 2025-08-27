import Logo from "../assets/Logo.png";
import Icon from "../assets/Icon2.png";
export function Footer() {
  return (
    <>
      <footer className="bg-[#00004D]">
        <div className="flex flex-row  justify-around text-white py-10 px-6 md:px-20 gap-10 flex-wrap">
          <div>
            <img src={Logo} width={65} height={65} alt="" />
            <p>
              Avec Vision+, achetez vos fournitures <br /> scolaires en groupe et
              profitez de la <br /> meilleure qualité au meilleur prix.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg ">Liens Utiles</h3>
            <a className="text-white t hover:text-blue-500" href="/about">À propos</a>
            <a className="text-white t hover:text-blue-500" href="/products">Nos Produits</a>
            <a className="text-white t hover:text-blue-500" href="/contact">Service client</a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <p>Adresse: Bondoukou, Côte D'Ivoire</p>
            <p>Téléphone: 0701496653</p>
            <p>Email: fbvision79@gmail.com</p>
            <div className="flex flex-row items-center gap-2">
              <img src={Icon} alt="" />
              <p>Whatsapp: 0701496653</p>
            </div>
          </div>
        </div>
        <div>
            <p className="text-center no-underline">© 2025 Vision+. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
