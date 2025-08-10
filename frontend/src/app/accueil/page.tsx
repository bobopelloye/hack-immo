"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  ShoppingCart,
  Wallet,
  Home,
  Users,
  BarChart2,
  Settings,
  Menu,
  X,
  User,
  ChevronDown,
  ChevronUp,
  Upload,
  List,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RocketIcon, CreditCardIcon, SendIcon } from "lucide-react";
import PaymentModal from "@/components/ui/PaymentModal";
import { useRouter } from "next/navigation"

import Image from "next/image";


export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPack, setSelectedPack] = useState<{
    titre: string
    prix: string
    sms: string
  } | null>(null)

  const router = useRouter()


  return (
    <div className="min-h-screen flex bg-gray-100">

      <PaymentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        pack={selectedPack}
        onNext={() => {
          setModalOpen(false)
          router.push("")
        }}
      />

      {/* Sidebar */}
      <aside
        className={`bg-white shadow-xl w-64 space-y-6 py-6 px-4 absolute md:relative z-50 transition-transform duration-300 ease-in-out rounded-r-2xl border-r border-gray-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >

        <div className="text-xl font-bold text-blue-600 px-2">hack SMS</div>
        <nav className="flex flex-col space-y-2 mt-6 text-gray-700">

          <Link
            href="#"
            onClick={() => setShowPricing(false)}
            className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
          >
            <Home className="w-5 h-5" /> Accueil
          </Link>


          <Link href="" className="flex items-center gap-3 hover:text-blue-600">
            <User className="w-6 h-6 text-gray-700 transition-transform duration-200 hover:scale-110" />
            Créer un contact
          </Link>
          <Link href="" className="flex items-center gap-3 hover:text-blue-600">
            <Users className="w-5 h-5" /> Tous les contacts
          </Link>
          <Link href="" className="flex items-center gap-3 hover:text-blue-600">
            <Upload className="w-5 h-5" /> Importer des contacts
          </Link>
          <Link href="" className="flex items-center gap-3 hover:text-blue-600">
            <List className="w-5 h-5" /> Gestion de groupe
          </Link>

          <Link href="" className="flex items-center gap-3 hover:text-blue-600">
            <BarChart2 className="w-5 h-5" /> Rapports
          </Link>

          <Link href="" className="flex items-center gap-3 hover:text-blue-600">
            <Settings className="w-5 h-5" /> Paramètres
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-between min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow-md px-4 py-4 md:py-5">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label={sidebarOpen ? "Fermer le menu latéral" : "Ouvrir le menu latéral"}
              title={sidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>


          </div>

          <div className="flex items-center gap-4">

            <h1 className="text-2xl font-bold"> Mamadou</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div
                  className="rounded-full border-2 border-gray-200 p-1 hover:ring-2 hover:ring-blue-400 transition cursor-pointer"
                  aria-label="Menu du profil utilisateur"
                  title="Profil utilisateur"
                >
                  <User className="w-6 h-6 text-gray-700" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="bottom"
                align="end"
                className="bg-white rounded-md shadow-lg p-2 w-44 mt-2 border"
              >
                <DropdownMenuItem className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="">Mon profil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/">Déconnexion</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>



        {/* Main section */}
        <main className="p-6 space-y-6 flex-grow">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <Image
              src="/welcome-illustration.svg"
              alt="Bienvenue"
              width={100}
              height={100}
              className="w-16 h-16"
            />
            <div>
              <h1 className="text-2xl font-bold">Bonjour </h1>
              <p className="text-gray-600">
                Bienvenue sur votre tableau de bord SMS professionnel.
              </p>
            </div>
          </motion.div>


          <div className="relative h-0.5 w-full bg-gray-200 rounded-full mt-2">
            <div className="absolute h-full bg-black rounded-full" style={{ width: "100%" }}></div>
          </div>




          {!showPricing && (
            <div className="grid md:grid-cols-3 gap-4">
              {[

                {
                  icon: <Wallet className="w-5 h-5" />,
                  title: "Votre solde SMS est : ",
                  content: (
                    <p className="text-lg font-semibold text-green-700 bg-green-100 px-3 py-1 inline-block rounded-full">
                      129 SMS disponibles
                    </p>

                  ),
                },
                {
                  icon: <MessageSquare className="w-5 h-5" />,
                  title: "Nouvelle campagne",
                  content: <Button className="w-full">Envoyer de SMS</Button>,
                },
                {
                  icon: <ShoppingCart className="w-5 h-5" />,
                  title: "Achat SMS",
                  content: (
                    <Button variant="outline" className="w-full" onClick={() => setShowPricing(!showPricing)}>
                      Acheter des sms
                    </Button>

                  ),
                },

              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >


                  <Card className="h-40 rounded-xl shadow-lg hover:shadow-2xl transition-shadow bg-white">

                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-md">
                        {card.icon}
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>{card.content}</CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

          )}


          {showPricing && (
            <section className="pt-10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12">Nos tarifs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    titre: "Pack Découverte",
                    prix: "16 000 GNF",
                    sms: "100 SMS"
                  },
                  {
                    titre: "Pack Pro",
                    prix: "140 000 GNF",
                    sms: "1000 SMS"
                  },
                  {
                    titre: "Pack Pro+",
                    prix: "1 250 000 GNF",
                    sms: "10 000 SMS"
                  }
                ].map((pack, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow text-center transition-all hover:bg-blue-50 hover:shadow-2xl"
                  >
                    <h4 className="text-lg sm:text-xl font-bold mb-2">{pack.titre}</h4>
                    <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2">{pack.prix}</p>
                    <p className="mb-4 text-gray-500 text-sm sm:text-base">{pack.sms}</p>
                    <Button
                      onClick={() => {
                        setSelectedPack(pack)
                        setModalOpen(true)
                      }}
                    >
                      Choisir
                    </Button>

                  </motion.div>
                ))}
              </div>
            </section>
          )}


          <motion.div
            className="fixed bottom-24 right-6 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              className="rounded-full shadow-xl bg-black hover:bg-gray-800 text-white px-4 py-2"
              aria-label="Obtenir de l’aide"
              title="Besoin d’aide ? Cliquez ici"
            >
              Besoin d’aide ?
            </Button>
          </motion.div>




        </main>

        {/* Footer */}
        <footer className="bg-white text-center text-sm text-gray-500 py-4 border-t">
          <p>© {new Date().getFullYear()} hack SMS. Tous droits réservés.</p>
        </footer>
      </div>
    </div>
  );
}
