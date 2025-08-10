'use client'

import { X, CreditCard, Smartphone, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"

interface PaymentModalProps {
    open: boolean
    onClose: () => void
    pack: { titre: string; prix: string; sms: string } | null
    onNext: () => void
}

export default function PaymentModal({ open, onClose, pack, onNext }: PaymentModalProps) {
    const [method, setMethod] = useState("")

    if (!pack) return null

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="w-full max-w-md rounded-xl p-6 sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%]">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
                >
                    <X className="w-5 h-5" />
                </button>


                <DialogHeader className="mb-2">
                    <DialogTitle className="text-xl font-bold text-center text-gray-800">
                        Paiement - {pack.titre}
                    </DialogTitle>
                </DialogHeader>

                {/* Informations pack */}
                <div className="text-center mb-4">
                    <p className="text-lg text-gray-600">
                        <span className="text-2xl font-bold text-blue-600">{pack.prix}</span> pour {pack.sms}
                    </p>
                </div>

                {/* Méthodes de paiement */}
                <div className="space-y-3">
                    <p className="font-semibold text-gray-700">Méthode de paiement :</p>
                    <RadioGroup value={method} onValueChange={setMethod} className="space-y-3">

                        <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                            <RadioGroupItem value="orange" id="orange" />
                            <label htmlFor="orange" className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                <Smartphone className="w-5 h-5 text-orange-500" />
                                Orange Money
                            </label>
                        </div>

                        <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                            <RadioGroupItem value="visa" id="visa" />
                            <label htmlFor="visa" className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                <CreditCard className="w-5 h-5 text-blue-600" />
                                Carte Visa
                            </label>
                        </div>

                        <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                            <RadioGroupItem value="mastercard" id="mastercard" />
                            <label htmlFor="mastercard" className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                <Landmark className="w-5 h-5 text-red-500" />
                                Carte Mastercard
                            </label>
                        </div>
                    </RadioGroup>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 mt-6">
                    <Button variant="outline" onClick={onClose}>
                        Annuler
                    </Button>
                    <Button onClick={onNext} disabled={!method}>
                        Suivant
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
