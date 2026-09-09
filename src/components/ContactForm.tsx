"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitContactForm, type ContactState } from "@/app/demande-de-devis/actions";
import { services } from "@/lib/site-data";

const initialState: ContactState = { status: "idle", message: "" };

const inputClasses =
  "w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
            Nom complet *
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy">
            Entreprise
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            Email *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
            Téléphone *
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-navy">
            Ville *
          </label>
          <input id="city" name="city" type="text" required autoComplete="address-level2" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="postalCode" className="mb-1.5 block text-sm font-medium text-navy">
            Code postal *
          </label>
          <input id="postalCode" name="postalCode" type="text" required autoComplete="postal-code" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
          Prestation souhaitée
        </label>
        <select id="service" name="service" defaultValue="" className={inputClasses}>
          <option value="">Sélectionnez une prestation</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Autre">Autre / je ne sais pas</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Votre besoin *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Type de locaux, surface approximative, fréquence souhaitée, horaires d'intervention…"
          className={inputClasses}
        />
      </div>

      <button type="submit" disabled={pending} className="btn btn-primary w-full sm:w-auto">
        {pending ? "Envoi en cours…" : "Envoyer ma demande de devis"}
      </button>

      <p className="text-xs leading-relaxed text-navy/50">
        Réponse sous 24h · Devis gratuit et sans engagement. En envoyant ce formulaire, vous
        acceptez que vos informations soient utilisées pour traiter votre demande. Elles ne seront
        jamais cédées à des tiers. Pour en savoir plus, consultez notre{" "}
        <Link className="underline hover:text-brand-dark" href="/politique-de-confidentialite">
          politique de confidentialité
        </Link>
        .
      </p>

      {state.status !== "idle" && (
        <p
          role="status"
          className={
            state.status === "success"
              ? "rounded-lg bg-brand/10 px-4 py-3 text-sm font-medium text-brand-dark"
              : "rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
