"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header  */}
            <header className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-6 shadow-sm bg-white">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-600">hack SMS</h1>
                <div className="space-x-2 sm:space-x-4">

                    <Button><Link href="/">Accueil</Link></Button>
                </div>
            </header>

            {/* Contenu principal */}
            <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4 py-12">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800">
                        Connexion à votre compte
                    </h2>

                    <form className="space-y-5">
                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Adresse email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Ecrire votre adresse email ici"
                                required
                            />
                        </div>

                        {/* Mot de passe */}
                        <div className="space-y-2 relative">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Ecrire votre mot de passe ici"
                                required
                                className="pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                                aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        {/* Lien mot de passe oublié */}
                        <div className="flex justify-between text-sm">
                            <Link href="#" className="text-blue-600 hover:underline">
                                Mot de passe oublié ?
                            </Link>
                        </div>


                        <Button type="submit" className="w-full mt-2">
                            <Link href="/accueil">Se connecter</Link>

                        </Button>
                    </form>

                    <div className="text-center text-sm text-gray-600">
                        Vous n’avez pas de compte ?{" "}
                        <Link href="/register" className="text-blue-600 hover:underline">
                            Créer un compte
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer identique à register */}
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
    );
}
