"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function RegisterPage() {
    const [step, setStep] = useState<1 | 2 | 3>(1)
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        company: "",
        password: "",
        confirmPassword: "",
    })

    const handleSendCode = () => {
        if (!email) return
        // Simule l’envoi du code (à remplacer par votre appel API)
        console.log("Code envoyé à :", email)
        setStep(2)
    }

    const handleVerifyCode = () => {
        if (code === "123456") {
            setStep(3)
        } else {
            alert("Code invalide")
        }
    }

    const handleRegister = () => {
        if (userInfo.password !== userInfo.confirmPassword) {
            alert("Les mots de passe ne correspondent pas.")
            return
        }
        // Appel API d’inscription ici
        console.log("Utilisateur inscrit :", { email, ...userInfo })
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between">
            {/* Header */}
            <header className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-6 shadow-sm bg-white">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-600">hack SMS</h1>
                <div className="space-x-2 sm:space-x-4">


                    <Button><Link href="/">Accueil</Link></Button>
                </div>
            </header>

            {/* Formulaire */}
            <main className="flex-grow flex justify-center items-center px-4 py-12">
                <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-6">
                    {step === 1 && (
                        <>
                            <h2 className="text-xl font-bold mb-4">Créer un compte</h2>
                            <div className="space-y-2">
                                <Label htmlFor="email">Adresse courriel</Label>
                                <Input id="email" type="email" placeholder="ex: nom@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <Button className="w-full" onClick={handleSendCode}>Envoyer le code</Button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h2 className="text-xl font-bold mb-4">Vérification</h2>
                            <p className="text-sm text-gray-500 mb-2">Un code vous a été envoyé à <strong>{email}</strong></p>
                            <div className="space-y-2">
                                <Label htmlFor="code">Code de vérification</Label>
                                <Input id="code" type="text" placeholder="Entrez le code" value={code} onChange={(e) => setCode(e.target.value)} />
                            </div>
                            <Button className="w-full" onClick={handleVerifyCode}>Vérifier</Button>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <h2 className="text-xl font-bold mb-4">Informations personnelles</h2>
                            <div className="space-y-3">
                                <div>
                                    <Label htmlFor="firstName">Prénom</Label>
                                    <Input id="firstName" value={userInfo.firstName} onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })} />
                                </div>
                                <div>
                                    <Label htmlFor="lastName">Nom</Label>
                                    <Input id="lastName" value={userInfo.lastName} onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })} />
                                </div>
                                <div>
                                    <Label htmlFor="company">Entreprise / Société</Label>
                                    <Input id="company" value={userInfo.company} onChange={(e) => setUserInfo({ ...userInfo, company: e.target.value })} />
                                </div>
                                <div>
                                    <Label htmlFor="password">Mot de passe</Label>
                                    <Input id="password" type="password" value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />
                                </div>
                                <div>
                                    <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                                    <Input id="confirmPassword" type="password" value={userInfo.confirmPassword} onChange={(e) => setUserInfo({ ...userInfo, confirmPassword: e.target.value })} />
                                </div>
                            </div>
                            <Button className="w-full mt-4" onClick={handleRegister}>S'inscrire</Button>
                        </>
                    )}
                </div>
            </main>

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
