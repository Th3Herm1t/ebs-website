"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface StickyFormProps {
  title?: string;
  programmeName?: string;
  whatsappNumber?: string;
  className?: string;
}

export function StickyForm({
  title = "Déposez votre candidature",
  programmeName,
  whatsappNumber = "+216 29 58 28 35",
  className,
}: StickyFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  if (submitted) {
    return (
      <div className={cn(
        "bg-white rounded-2xl border border-penn-border shadow-lg p-6 lg:p-8 text-center",
        className
      )}>
        <div className="w-14 h-14 bg-penn-green/10 text-penn-green rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[18px] font-extrabold text-penn-navy mb-2">Candidature envoyée !</h3>
        <p className="text-[14px] text-penn-body">Notre équipe vous répond sous 24h.</p>
      </div>
    );
  }

  return (
    <div className={cn(
      "bg-white rounded-2xl border border-penn-border shadow-lg overflow-hidden sticky top-24",
      className
    )}>
      <div className="bg-penn-green px-6 py-4">
        <h3 className="text-white font-extrabold text-[16px]">
          {title}
        </h3>
        <p className="text-white/80 text-[13px] mt-0.5">
          Réponse sous 24h · Gratuit · Sans engagement
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Prénom *"
          required
          className="h-10 text-sm"
        />
        <Input
          type="text"
          placeholder="Nom *"
          required
          className="h-10 text-sm"
        />
        <Input
          type="email"
          placeholder="Email *"
          required
          className="h-10 text-sm"
        />
        <Input
          type="tel"
          placeholder="Téléphone / WhatsApp *"
          required
          className="h-10 text-sm"
        />
        <Input
          type="text"
          placeholder="Niveau actuel"
          className="h-10 text-sm"
        />
        {programmeName && (
          <input type="hidden" name="programme" value={programmeName} />
        )}

        <Button type="submit" size="lg" className="w-full h-11 font-bold text-[14px] rounded-full">
          Envoyer ma pré-inscription →
        </Button>

        <div className="flex items-center justify-center gap-2 pt-1">
          <Link
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] text-penn-green font-semibold hover:text-penn-navy transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Discuter sur WhatsApp
          </Link>
        </div>

        <p className="text-[11px] text-penn-body/60 text-center leading-tight">
          ✓ Gratuit · ✓ Sans engagement · ✓ Réponse sous 24h
        </p>
      </form>
    </div>
  );
}
