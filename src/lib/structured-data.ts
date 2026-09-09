import { faq, legalMentions, services, siteConfig } from "./site-data";

/**
 * Fiche entreprise (LocalBusiness / CleaningService).
 * Pas de balisage d'avis : Google interdit les avis « auto-hébergés » sur son propre site.
 * Enrichie pour le GEO (moteurs de réponse IA) : date de création, zone géographique
 * précise (GeoCircle), domaines d'expertise et identifiants légaux.
 */
export function getLocalBusinessSchema() {
  // Zone d'intervention : cercle géographique précis + communes nommées
  const geoMidpoint = {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
  };

  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description:
      "Entreprise de nettoyage professionnel B2B basée à Caen (Calvados, Normandie), créée en 2023. Interventions dans tout le Calvados : bureaux et locaux tertiaires, cabinets médicaux, EHPAD, collectivités et copropriétés, commerces, restaurants, sites industriels et agroalimentaires, nettoyage de fin de chantier, vitrerie et évacuation de déchets.",
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    image: `${siteConfig.url}/icon.png`,
    logo: `${siteConfig.url}/icon.png`,
    foundingDate: siteConfig.foundingYear,
    foundingLocation: {
      "@type": "Place",
      name: `${siteConfig.city}, ${siteConfig.region}, France`,
    },
    priceRange: "€€",
    currenciesAccepted: "EUR",
    knowsLanguage: "fr-FR",
    legalName: legalMentions.companyName,
    vatID: legalMentions.vatNumber,
    identifier: [
      { "@type": "PropertyValue", propertyID: "SIREN", value: legalMentions.siren },
      { "@type": "PropertyValue", propertyID: "SIRET", value: legalMentions.siret },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      postalCode: siteConfig.postalCode,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    geo: geoMidpoint,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    },
    // GeoCircle (rayon précis) + communes couvertes : aide les IA à répondre par proximité
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint,
        geoRadius: String(siteConfig.serviceRadiusKm * 1000),
        description: `${siteConfig.serviceRadiusKm} km autour de ${siteConfig.city}`,
      },
      ...siteConfig.areaServed.map((city) => ({
        "@type": "City",
        name: city,
      })),
    ],
    // Domaines d'expertise explicites — repris par les moteurs de réponse
    knowsAbout: [
      "nettoyage professionnel à Caen",
      "nettoyage de bureaux et locaux tertiaires",
      "nettoyage de cabinets médicaux et d'EHPAD",
      "nettoyage de grandes surfaces et de commerces",
      "nettoyage de restaurants et de cuisines professionnelles",
      "nettoyage industriel et agroalimentaire",
      "nettoyage de fin de chantier dans le Calvados",
      "nettoyage de vitres pour professionnels",
      "évacuation de déchets et débarras de locaux",
    ],
    serviceType: services.map((s) => s.title),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint,
          geoRadius: String(siteConfig.serviceRadiusKm * 1000),
        },
        provider: { "@id": `${siteConfig.url}/#business` },
      },
    })),
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 6, maxValue: 9 },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations de nettoyage professionnel",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
    sameAs: [siteConfig.facebookUrl, siteConfig.googleReviewsUrl].filter(Boolean),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "fr-FR",
    publisher: { "@id": `${siteConfig.url}/#business` },
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}


/** Schéma Service pour une page prestation locale. */
export function getServiceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${siteConfig.url}${path}`,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.lat,
        longitude: siteConfig.geo.lng,
      },
      geoRadius: String(siteConfig.serviceRadiusKm * 1000),
      description: `${siteConfig.serviceRadiusKm} km autour de ${siteConfig.city}`,
    },
  };
}

/** Fil d'Ariane structuré. */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/** FAQPage à partir d'une liste de questions arbitraire. */
export function getFaqSchemaFrom(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
