"use client"

import { Button } from "@/components/ui/button"
import { RocketIcon, PhoneIcon, SendIcon, CreditCardIcon } from "lucide-react"
import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  const pricingRef = useRef<HTMLDivElement>(null)

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-6 shadow-sm bg-white">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">hack SMS</h1>
        <div className="space-x-2 sm:space-x-4">
          <Button variant="ghost"> <Link href="/login">Connexion</Link></Button>
          <Button><Link href="/register">Inscription</Link></Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Texte Hero aligné à gauche avec esthétique améliorée */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Envoyez des <span className="text-blue-600">SMS professionnels</span> <br className="hidden md:block" /> en toute simplicité
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 text-justify sm:text-left leading-relaxed">
              Gérez vos campagnes SMS, envoyez des messages instantanément, et suivez vos statistiques en temps réel. Notre solution est rapide, intuitive et adaptée à tous les types d’entreprises.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-6 py-4 text-base sm:text-lg">Commencer maintenant</Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-4 text-base sm:text-lg"
                onClick={scrollToPricing}
              >
                Voir nos tarifs
              </Button>
            </div>
          </div>

          {/* Illustration à droite */}
          <div className="flex justify-center">
            <img
              src="/illustration-sms.svg"
              className="w-full max-w-xs sm:max-w-md"
            />
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-white">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12">Pourquoi choisir hack SMS?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div>
            <SendIcon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="text-lg sm:text-xl font-bold mb-2">Envoi instantané</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Vos SMS sont envoyés immédiatement grâce à notre infrastructure performante.
            </p>
          </div>
          <div>
            <CreditCardIcon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="text-lg sm:text-xl font-bold mb-2">Achats sécurisés</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Achetez des packs SMS via notre système de paiement sécurisé.
            </p>
          </div>
          <div>
            <RocketIcon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="text-lg sm:text-xl font-bold mb-2">Simple et rapide</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Interface intuitive pour créer et envoyer des messages en quelques clics.
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section ref={pricingRef} className="py-16 sm:py-20 px-4 bg-gray-50">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12">Nos tarifs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{
            titre: "Pack Découverte",
            prix: "16 000 GNF",
            sms: "100 SMS"
          }, {
            titre: "Pack Pro",
            prix: "140 000 GNF",
            sms: "1000 SMS"
          }, {
            titre: "Pack Pro+",
            prix: "1 250 000 GNF",
            sms: "10 000 SMS"
          }].map((pack, index) => (
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
              <Button>Choisir</Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 bg-gray-100 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Prêt à envoyer votre premier SMS ?</h3>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Créez un compte gratuitement et commencez à envoyer des SMS dès aujourd’hui.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">Créer un compte</Button>
          <Button size="lg" variant="outline"><Link href="/login">J'ai déjà un compte</Link></Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t px-4 py-6 text-sm text-gray-500 text-center space-y-2">
        <p>© {new Date().getFullYear()} hack SMS. Tous droits réservés.</p>
        <div className="flex justify-center flex-wrap gap-2 text-gray-500">
          <a href="#" className="hover:underline">Politique de confidentialité</a>
          <span>|</span>
          <a href="#" className="hover:underline">Conditions d'utilisation</a>
          <span>|</span>
          <a href="#" className="hover:underline">Développeur</a>
          <span>|</span>
          <a href="#" className="hover:underline">Nous joindre</a>
        </div>

      </footer>

    </div>
  )
}
