"use client";

import { motion } from "framer-motion";
import { Lock, MapPin, Zap, PhoneCall } from "lucide-react";
export default function Home() {
  const properties = [
    {
      id: 1,
      title: "Villa moderne à coyah",
      price: "100 000 000 GNF",
      location: "Coyah",
      beds: 4,
      baths: 3,
      img: "/house1.jpg",
    },
    {
      id: 2,
      title: "Appartement centre-ville",
      price: "280 000 000 GNF",
      location: "Conakry",
      beds: 2,
      baths: 1,
      img: "/house2.jpg",
    },
    {
      id: 3,
      title: "Terrain constructible",
      price: "150 000 000 GNF",
      location: "Nongo",
      beds: 0,
      baths: 0,
      img: "/land1.jpg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "",
      avatar: "/client1.jpg",
      text: "Service impeccable, j'ai trouvé ma maison en 2 semaines !",
    },
    {
      id: 2,
      name: "",
      avatar: "/client2.jpg",
      text: "Très satisfaite, beaucoup de choix et équipe réactive.",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center py-5 px-6 md:px-12">
          <div className="text-3xl font-extrabold text-blue-900 tracking-wide cursor-pointer select-none">
            hack-Immo
          </div>
          <div className="hidden md:flex space-x-10 font-semibold text-gray-700">
            <a href="#" className="hover:text-blue-700 transition">
              Acheter
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Louer
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Vendre
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              À propos
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Contact
            </a>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 transition text-blue-900 font-semibold px-6 py-2 rounded-lg shadow-md drop-shadow-md select-none">
            Connexion
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative h-screen bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          className="relative z-20 text-center max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg mb-6">
            Trouvez la maison de vos rêves
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 drop-shadow-md">
            Des milliers de biens à vendre et à louer dans votre ville
          </p>

          {/* Search bar */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-5 max-w-5xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Ville ou région"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <select className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>Type de bien</option>
              <option>Maison</option>
              <option>Appartement</option>
              <option>Terrain</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>Budget</option>
              <option>Moins de 10 000 000 GNF</option>
              <option>10 000 000 GNF - 50 000 000 GNF</option>
              <option>5O 000 000 GNF et plus</option>
            </select>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 transition text-blue-900 font-semibold px-8 py-3 rounded-lg shadow-md drop-shadow-md select-none"
            >
              Rechercher
            </button>
          </motion.form>
        </motion.div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto px-6 md:px-12 py-20">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-900">
          Biens en vedette
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-transform"
            >
              <img
                src={property.img}
                alt={property.title}
                className="w-full h-64 object-cover object-center"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {property.title}
                </h3>
                <p className="text-yellow-500 font-bold text-lg mb-2">
                  {property.price}
                </p>
                <p className="text-gray-600 mb-1">{property.location}</p>
                <p className="text-gray-500 text-sm">
                  {property.beds} chambres &bull; {property.baths} salles de bains
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/*Pourquoi choisir*/}

      <section className="bg-gradient-to-tr from-blue-50 to-white py-20 px-6 md:px-12">
        <h2 className="text-4xl font-extrabold mb-14 text-center text-blue-900">
          Pourquoi nous choisir ?
        </h2>
        <div className="grid md:grid-cols-4 gap-14 max-w-6xl mx-auto text-center text-blue-900">

          {/* Sécurité et transparence */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex flex-col items-center space-y-4"
          >
            <Lock size={60} className="text-blue-600" />
            <h3 className="text-xl font-semibold">Sécurité et transparence</h3>
            <p className="text-gray-700 max-w-xs">
              Nous garantissons la confidentialité et la fiabilité des données.
            </p>
          </motion.div>

          {/* Annonces vérifiées */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex flex-col items-center space-y-4"
          >
            <MapPin size={60} className="text-blue-600" />
            <h3 className="text-xl font-semibold">Annonces vérifiées</h3>
            <p className="text-gray-700 max-w-xs">
              Chaque bien est vérifié pour assurer qualité et conformité.
            </p>
          </motion.div>

          {/* Recherche rapide */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex flex-col items-center space-y-4"
          >
            <Zap size={60} className="text-blue-600" />
            <h3 className="text-xl font-semibold">Recherche rapide</h3>
            <p className="text-gray-700 max-w-xs">
              Trouvez rapidement le bien qui correspond à vos besoins.
            </p>
          </motion.div>

          {/* Support 24/7 */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex flex-col items-center space-y-4"
          >
            <PhoneCall size={60} className="text-blue-600" />
            <h3 className="text-xl font-semibold">Support 24/7</h3>
            <p className="text-gray-700 max-w-xs">
              Notre équipe est disponible à tout moment pour vous aider.
            </p>
          </motion.div>

        </div>
      </section>


      {/* Testimonials */}
      <section className="container mx-auto px-6 md:px-12 py-20">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-900">
          Témoignages
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 flex space-x-6"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover self-start"
                loading="lazy"
              />
              <div>
                <p className="italic text-gray-700 mb-4">"{t.text}"</p>
                <h4 className="font-semibold text-blue-900">{t.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p>© 2025 hach-Immo. Tous droits réservés.</p>
          <div className="flex space-x-8 text-lg font-semibold">
            <a href="#" className="hover:text-yellow-400 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
