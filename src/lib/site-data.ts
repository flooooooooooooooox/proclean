export const siteConfig = {
  name: "PROCLEAN STJ",
  tagline: "La propreté, sans compromis",
  sector: "Nettoyage professionnel B2B",
  phone: "09 81 94 61 61",
  phoneHref: "tel:+33981946161",
  email: "proclean.caen@hotmail.com",
  serviceArea: "Caen et tout le Calvados (14)",
  hours: {
    display: "Du lundi au vendredi · 7h00 – 19h00",
    short: "Lun–Ven · 7h–19h",
    opens: "07:00",
    closes: "19:00",
  },
  city: "Caen",
  postalCode: "14000",
  region: "Normandie",
  country: "FR",
  geo: { lat: 49.1829, lng: -0.3707 },
  // Rayon couvrant l'ensemble du département du Calvados depuis Caen
  serviceRadiusKm: 45,
  foundingYear: "2023",
  areaServed: [
    "Caen",
    "Hérouville-Saint-Clair",
    "Mondeville",
    "Ifs",
    "Fleury-sur-Orne",
    "Cormelles-le-Royal",
    "Louvigny",
    "Bretteville-sur-Odon",
    "Carpiquet",
    "Colombelles",
    "Blainville-sur-Orne",
    "Épron",
    "Giberville",
    "Ouistreham",
    "Douvres-la-Délivrande",
    "Bayeux",
    "Lisieux",
    "Vire",
    "Falaise",
    "Honfleur",
    "Villers-Bocage",
    "Saint-Pierre-en-Auge",
    "Ranville",
    "May-sur-Orne",
    "Bernières-sur-Mer",
  ],
  url: "https://proclean-stj.fr",
  googleRating: 5,
  googleReviewCount: 10 as number | null,
  facebookUrl: "",
  googleReviewsUrl: "https://share.google/hW8KXRLQ1IdrR4TQX",
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  /** Chemin de l'image ; null = bloc gris en attente de photo */
  image: string | null;
};

export const services: Service[] = [
  {
    slug: "nettoyage-tertiaire-caen",
    title: "Nettoyage tertiaire",
    shortTitle: "Tertiaire & bureaux",
    description:
      "Bureaux, open spaces et salles de réunion entretenus avant ou après vos heures d'activité.",
    image: null,
  },
  {
    slug: "nettoyage-gss-caen",
    title: "GSS & supermarchés",
    shortTitle: "GSS & supermarchés",
    description:
      "Grandes surfaces alimentaires et spécialisées : sols, rayons, réserves et zones de vente.",
    image: null,
  },
  {
    slug: "nettoyage-medical-caen",
    title: "Nettoyage médical",
    shortTitle: "Médical",
    description:
      "Cabinets, laboratoires et cliniques nettoyés selon des protocoles d'hygiène stricts.",
    image: null,
  },
  {
    slug: "nettoyage-ehpad-caen",
    title: "EHPAD & maisons de santé",
    shortTitle: "EHPAD & santé",
    description:
      "Entretien discret et respectueux des établissements accueillant des personnes fragiles.",
    image: null,
  },
  {
    slug: "nettoyage-collectivites-caen",
    title: "Collectivités & syndics",
    shortTitle: "Collectivités & syndics",
    description:
      "Écoles, équipements sportifs, parties communes et bâtiments publics entretenus au forfait.",
    image: null,
  },
  {
    slug: "nettoyage-commerces-caen",
    title: "Nettoyage de commerces",
    shortTitle: "Commerces",
    description:
      "Boutiques, surfaces de vente et vitrines : une propreté visible dès la porte d'entrée.",
    image: null,
  },
  {
    slug: "nettoyage-restaurants-caen",
    title: "Restaurants & fast food",
    shortTitle: "Restauration",
    description:
      "Cuisines, salles et sanitaires entretenus dans le respect des exigences d'hygiène HACCP.",
    image: null,
  },
  {
    slug: "nettoyage-fin-de-chantier-caen",
    title: "Nettoyage de fin de chantier",
    shortTitle: "Fin de chantier",
    description:
      "Remise en état après travaux : poussière, résidus, sols et finitions avant livraison.",
    image: null,
  },
  {
    slug: "nettoyage-industrie-caen",
    title: "Nettoyage industriel",
    shortTitle: "Industrie",
    description:
      "Usines, entrepôts et ateliers : matériel professionnel et respect des consignes de sécurité.",
    image: null,
  },
  {
    slug: "nettoyage-agroalimentaire-caen",
    title: "Nettoyage agroalimentaire",
    shortTitle: "Agroalimentaire",
    description:
      "Chambres froides, laboratoires et zones de production nettoyés et désinfectés.",
    image: null,
  },
  {
    slug: "nettoyage-vitres-caen",
    title: "Nettoyage de vitres",
    shortTitle: "Vitres",
    description:
      "Vitrines, baies vitrées et façades vitrées, y compris en hauteur, sans traces.",
    image: null,
  },
  {
    slug: "evacuation-dechets-caen",
    title: "Évacuation de déchets",
    shortTitle: "Évacuation déchets",
    description:
      "Enlèvement et évacuation en déchetterie des encombrants et déchets de chantier.",
    image: null,
  },
];

export type ServicePage = {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  includes: string[];
  forWho: string[];
  faq: { question: string; answer: string }[];
};

export const servicePages: Record<string, ServicePage> = {
  "nettoyage-tertiaire-caen": {
    h1: "Nettoyage de bureaux et de locaux tertiaires à Caen",
    metaTitle: "Nettoyage de bureaux à Caen | Entretien de locaux tertiaires",
    metaDescription:
      "PROCLEAN STJ entretient vos bureaux et open spaces à Caen et dans tout le Calvados. Intervention avant ou après vos horaires. Devis gratuit sous 24h.",
    intro:
      "PROCLEAN STJ assure l'entretien régulier des bureaux, open spaces et salles de réunion des entreprises de Caen et du Calvados. Nos équipes interviennent avant l'ouverture ou après la fermeture, pour que vos collaborateurs retrouvent chaque matin des locaux impeccables sans jamais être dérangés dans leur travail.",
    includes: [
      "Aspiration et lavage des sols, moquettes comprises",
      "Dépoussiérage des bureaux, mobiliers et surfaces de contact",
      "Désinfection des poignées, interrupteurs et équipements partagés",
      "Entretien complet des sanitaires et réapprovisionnement des consommables",
      "Nettoyage des espaces de pause, cuisines et distributeurs",
      "Vidage des corbeilles et tri des déchets",
    ],
    forWho: [
      "Sièges sociaux et immeubles de bureaux",
      "Agences commerciales, cabinets d'expertise et études",
      "Espaces de coworking et start-ups",
      "Administrations et sièges d'associations",
    ],
    faq: [
      {
        question: "Pouvez-vous intervenir en dehors des heures de bureau à Caen ?",
        answer:
          "Oui. PROCLEAN STJ intervient tôt le matin, en soirée ou le week-end selon vos contraintes, à Caen et dans tout le Calvados. Nous définissons ensemble un créneau qui ne perturbe pas votre activité.",
      },
      {
        question: "Proposez-vous des contrats d'entretien réguliers pour des bureaux ?",
        answer:
          "Oui. Nous établissons des contrats d'entretien sur mesure, d'une intervention hebdomadaire à un passage quotidien, avec un cahier des charges écrit et un interlocuteur dédié. Appelez le 09 81 94 61 61 pour un devis gratuit.",
      },
    ],
  },
  "nettoyage-gss-caen": {
    h1: "Nettoyage de grandes surfaces et supermarchés à Caen",
    metaTitle: "Nettoyage de supermarchés et GSS à Caen | Calvados",
    metaDescription:
      "Entretien de grandes surfaces alimentaires et spécialisées à Caen et dans le Calvados : sols, rayons, réserves. PROCLEAN STJ, devis gratuit sous 24h.",
    intro:
      "Une grande surface se juge dès les premiers mètres. PROCLEAN STJ entretient les magasins alimentaires et spécialisés de Caen et du Calvados, avec des interventions calées sur vos horaires d'ouverture et un matériel adapté aux grandes superficies.",
    includes: [
      "Lavage mécanisé des sols et des allées de circulation",
      "Nettoyage des rayons, gondoles et têtes de gondole",
      "Entretien des zones alimentaires et des laboratoires",
      "Réserves, quais de déchargement et zones de stockage",
      "Sanitaires clients et personnel",
      "Vitrines, portes automatiques et sas d'entrée",
    ],
    forWho: [
      "Supermarchés et hypermarchés",
      "Grandes surfaces spécialisées (bricolage, sport, équipement)",
      "Magasins de proximité et supérettes",
      "Enseignes de centre commercial",
    ],
    faq: [
      {
        question: "Intervenez-vous avant l'ouverture d'un magasin à Caen ?",
        answer:
          "Oui. Nos équipes interviennent avant l'ouverture ou après la fermeture, à Caen et partout dans le Calvados, afin que la surface de vente soit prête à l'accueil du public sans gêner vos clients.",
      },
      {
        question: "Disposez-vous du matériel pour de grandes superficies ?",
        answer:
          "Oui. PROCLEAN STJ utilise des autolaveuses et des monobrosses professionnelles adaptées aux surfaces importantes, ce qui garantit un résultat homogène dans des délais courts.",
      },
    ],
  },
  "nettoyage-medical-caen": {
    h1: "Nettoyage de cabinets médicaux à Caen",
    metaTitle: "Nettoyage médical à Caen | Cabinets et cliniques",
    metaDescription:
      "Nettoyage et désinfection de cabinets médicaux, laboratoires et cliniques à Caen et dans le Calvados. Protocoles d'hygiène stricts. Devis gratuit sous 24h.",
    intro:
      "Le secteur de la santé ne tolère aucun à-peu-près. PROCLEAN STJ applique des protocoles d'hygiène stricts dans les cabinets, laboratoires et centres de soins de Caen et du Calvados : produits homologués, matériel dédié par zone et traçabilité des passages.",
    includes: [
      "Désinfection des salles de soins et des surfaces de contact",
      "Entretien des salles d'attente et de l'accueil",
      "Protocole séparé entre zones propres et zones à risque",
      "Sanitaires, points d'eau et vestiaires",
      "Gestion des déchets selon les filières applicables",
      "Sols traités avec des produits désinfectants homologués",
    ],
    forWho: [
      "Cabinets de médecine générale et de spécialistes",
      "Cabinets dentaires et d'ophtalmologie",
      "Laboratoires d'analyses",
      "Centres de santé et maisons médicales",
    ],
    faq: [
      {
        question: "Quels protocoles appliquez-vous dans un cabinet médical ?",
        answer:
          "PROCLEAN STJ utilise des produits désinfectants homologués et un matériel distinct selon les zones, afin d'éviter tout transfert de contamination. Chaque intervention suit un protocole écrit, adapté avec vous à votre spécialité.",
      },
      {
        question: "Nettoyez-vous les cabinets médicaux en dehors de Caen ?",
        answer:
          "Oui. Nous intervenons dans tout le Calvados, notamment à Bayeux, Lisieux, Falaise, Vire et Hérouville-Saint-Clair. Appelez le 09 81 94 61 61 pour vérifier la couverture de votre commune.",
      },
    ],
  },
  "nettoyage-ehpad-caen": {
    h1: "Nettoyage d'EHPAD et de maisons de santé à Caen",
    metaTitle: "Nettoyage d'EHPAD à Caen | Maisons de santé, Calvados",
    metaDescription:
      "Entretien d'EHPAD, résidences seniors et maisons de santé à Caen et dans le Calvados. Équipes discrètes, protocoles d'hygiène adaptés. Devis sous 24h.",
    intro:
      "Nettoyer un établissement accueillant des personnes âgées ou fragiles demande autant de rigueur que de délicatesse. Les équipes de PROCLEAN STJ interviennent avec discrétion dans les EHPAD et maisons de santé de Caen et du Calvados, en respectant le rythme des résidents et du personnel soignant.",
    includes: [
      "Chambres, sanitaires et salles de bain des résidents",
      "Circulations, ascenseurs et mains courantes",
      "Salles à manger, salons et espaces d'animation",
      "Désinfection renforcée des points de contact",
      "Locaux du personnel, vestiaires et bureaux",
      "Vitrerie intérieure et extérieure accessible",
    ],
    forWho: [
      "EHPAD publics et privés",
      "Résidences seniors et résidences autonomie",
      "Maisons de santé pluriprofessionnelles",
      "Foyers d'accueil et structures médico-sociales",
    ],
    faq: [
      {
        question: "Vos équipes sont-elles formées au travail auprès de résidents âgés ?",
        answer:
          "Oui. Nos agents sont formés à la discrétion, au respect de l'intimité des résidents et aux protocoles d'hygiène propres aux établissements médico-sociaux. Nous adaptons nos horaires aux temps de repas et de soins.",
      },
      {
        question: "Pouvez-vous intervenir tous les jours dans un EHPAD ?",
        answer:
          "Oui. PROCLEAN STJ met en place des prestations quotidiennes, avec un planning écrit et un référent joignable. Nous intervenons à Caen et dans l'ensemble du Calvados.",
      },
    ],
  },
  "nettoyage-collectivites-caen": {
    h1: "Nettoyage pour collectivités et syndics à Caen",
    metaTitle: "Nettoyage de collectivités et copropriétés à Caen",
    metaDescription:
      "Écoles, équipements publics, parties communes d'immeubles à Caen et dans le Calvados. PROCLEAN STJ intervient pour les collectivités et les syndics.",
    intro:
      "PROCLEAN STJ accompagne les communes, les établissements publics et les syndics de copropriété de Caen et du Calvados. Nous sommes habitués aux marchés publics comme aux contrats de syndic : cahier des charges précis, planning respecté et interlocuteur unique.",
    includes: [
      "Parties communes : halls, escaliers, paliers et locaux vélos",
      "Écoles, salles polyvalentes et équipements sportifs",
      "Vitrerie des bâtiments publics",
      "Sortie et rentrée des conteneurs, entretien des locaux poubelles",
      "Abords immédiats et zones de circulation",
      "Interventions ponctuelles de remise en état",
    ],
    forWho: [
      "Mairies et collectivités territoriales",
      "Syndics de copropriété et bailleurs",
      "Écoles, collèges et lycées",
      "Équipements sportifs et culturels",
    ],
    faq: [
      {
        question: "Travaillez-vous avec les syndics de copropriété du Calvados ?",
        answer:
          "Oui. PROCLEAN STJ entretient les parties communes d'immeubles pour le compte de syndics et de bailleurs à Caen, Hérouville-Saint-Clair, Mondeville, Ifs, Fleury-sur-Orne et dans tout le département.",
      },
      {
        question: "Répondez-vous aux consultations des collectivités ?",
        answer:
          "Oui. Nous répondons aux consultations et marchés des communes du Calvados. Contactez-nous au 09 81 94 61 61 pour recevoir nos références et un chiffrage détaillé.",
      },
    ],
  },
  "nettoyage-commerces-caen": {
    h1: "Nettoyage de commerces et boutiques à Caen",
    metaTitle: "Nettoyage de commerces à Caen | Boutiques et vitrines",
    metaDescription:
      "Entretien de boutiques, surfaces de vente et vitrines à Caen et dans le Calvados. Intervention avant ouverture. PROCLEAN STJ, devis gratuit sous 24h.",
    intro:
      "Dans un commerce, la propreté fait partie de la vitrine. PROCLEAN STJ entretient les boutiques et surfaces de vente de Caen et du Calvados, avec des passages calés avant l'ouverture pour que le magasin soit impeccable à l'arrivée des premiers clients.",
    includes: [
      "Sols de la surface de vente et des cabines d'essayage",
      "Vitrines intérieures et extérieures",
      "Comptoirs, caisses et présentoirs",
      "Sanitaires clients et espaces personnel",
      "Réserves et arrière-boutiques",
      "Dépoussiérage des agencements et luminaires accessibles",
    ],
    forWho: [
      "Boutiques de prêt-à-porter et d'équipement",
      "Commerces de centre-ville et de galerie marchande",
      "Concessions, showrooms et agences",
      "Pharmacies et commerces de proximité",
    ],
    faq: [
      {
        question: "Nettoyez-vous les boutiques avant l'ouverture à Caen ?",
        answer:
          "Oui. Nos équipes interviennent tôt le matin, avant l'arrivée de vos clients, dans le centre-ville de Caen comme dans les zones commerciales du Calvados.",
      },
      {
        question: "Le nettoyage des vitrines est-il inclus ?",
        answer:
          "Oui, la vitrerie peut être intégrée au contrat d'entretien, avec la fréquence de votre choix. PROCLEAN STJ dispose du matériel nécessaire, y compris pour les vitrines en hauteur.",
      },
    ],
  },
  "nettoyage-restaurants-caen": {
    h1: "Nettoyage de restaurants et fast-foods à Caen",
    metaTitle: "Nettoyage de restaurants à Caen | Cuisines et salles",
    metaDescription:
      "Nettoyage de cuisines professionnelles, salles et sanitaires à Caen et dans le Calvados, dans le respect des exigences HACCP. Devis gratuit sous 24h.",
    intro:
      "En restauration, l'hygiène est une obligation réglementaire avant d'être un confort. PROCLEAN STJ intervient dans les restaurants, brasseries et fast-foods de Caen et du Calvados, sur les cuisines comme sur les salles, en dehors des services.",
    includes: [
      "Dégraissage des cuisines, plans de travail et crédences",
      "Nettoyage des sols et des siphons de cuisine",
      "Salles de restaurant, banquettes et mobilier",
      "Sanitaires clients et vestiaires du personnel",
      "Vitrines, devantures et terrasses couvertes",
      "Sortie et entretien des conteneurs à déchets",
    ],
    forWho: [
      "Restaurants traditionnels et brasseries",
      "Fast-foods et chaînes de restauration rapide",
      "Restaurants d'entreprise et cantines",
      "Traiteurs et laboratoires de préparation",
    ],
    faq: [
      {
        question: "Respectez-vous les exigences HACCP dans les cuisines ?",
        answer:
          "Oui. Nos interventions en cuisine professionnelle suivent les exigences d'hygiène applicables en restauration : produits adaptés au contact alimentaire, matériel dédié et séparation stricte des zones.",
      },
      {
        question: "Intervenez-vous entre les services ou la nuit ?",
        answer:
          "Oui. Nous intervenons tôt le matin, tard le soir ou entre deux services, selon votre organisation, à Caen et dans tout le Calvados.",
      },
    ],
  },
  "nettoyage-fin-de-chantier-caen": {
    h1: "Nettoyage de fin de chantier à Caen",
    metaTitle: "Nettoyage de fin de chantier à Caen | Remise en état",
    metaDescription:
      "Remise en état après travaux à Caen et dans le Calvados : poussière, résidus, sols et vitrages. PROCLEAN STJ intervient avant livraison. Devis sous 24h.",
    intro:
      "Une livraison de chantier se joue sur les derniers mètres carrés. PROCLEAN STJ prend en charge la remise en état complète après travaux, à Caen et dans tout le Calvados, pour que le bâtiment soit présentable le jour de la réception.",
    includes: [
      "Dépoussiérage complet, murs, plafonds et gaines",
      "Décollage des étiquettes, films de protection et adhésifs",
      "Nettoyage et lustrage des sols selon leur nature",
      "Vitrages, encadrements et rails de menuiserie",
      "Sanitaires, robinetterie et équipements neufs",
      "Évacuation des derniers déchets et gravats légers",
    ],
    forWho: [
      "Entreprises générales et artisans du bâtiment",
      "Promoteurs et maîtres d'ouvrage",
      "Architectes et maîtres d'œuvre",
      "Enseignes ouvrant un nouveau point de vente",
    ],
    faq: [
      {
        question: "Sous quel délai pouvez-vous intervenir en fin de chantier ?",
        answer:
          "PROCLEAN STJ répond à toute demande de devis sous 24h et peut généralement mobiliser une équipe sous 48h à Caen et dans le Calvados, y compris pour des livraisons urgentes.",
      },
      {
        question: "Intervenez-vous sur des chantiers en dehors de Caen ?",
        answer:
          "Oui. Nous sommes intervenus à Mondeville, Fleury-sur-Orne, Bernières-sur-Mer, Épron, Bayeux et dans de nombreuses communes du Calvados. Appelez le 09 81 94 61 61 pour organiser une visite.",
      },
    ],
  },
  "nettoyage-industrie-caen": {
    h1: "Nettoyage industriel à Caen",
    metaTitle: "Nettoyage industriel à Caen | Usines et entrepôts",
    metaDescription:
      "Nettoyage d'usines, entrepôts et ateliers à Caen et dans le Calvados. Matériel professionnel, respect des consignes de sécurité. Devis gratuit sous 24h.",
    intro:
      "Les sites industriels imposent leurs propres règles : contraintes de production, zones à risques et consignes de sécurité. PROCLEAN STJ intervient dans les usines, entrepôts et ateliers de Caen et du Calvados, avec des équipes formées au travail en environnement industriel.",
    includes: [
      "Sols d'ateliers et d'entrepôts, lavage mécanisé",
      "Dégraissage des machines et abords de lignes",
      "Zones de stockage, quais et allées de circulation",
      "Bureaux techniques, vestiaires et réfectoires",
      "Vitrerie et bardages accessibles",
      "Interventions ponctuelles lors des arrêts techniques",
    ],
    forWho: [
      "Usines et sites de production",
      "Plateformes logistiques et entrepôts",
      "Ateliers de maintenance et garages",
      "Zones d'activité du Calvados",
    ],
    faq: [
      {
        question: "Vos équipes respectent-elles les consignes de sécurité d'un site industriel ?",
        answer:
          "Oui. Nos agents interviennent avec les équipements de protection requis et suivent l'accueil sécurité de votre site avant toute première intervention.",
      },
      {
        question: "Pouvez-vous intervenir pendant un arrêt de production ?",
        answer:
          "Oui. PROCLEAN STJ organise des interventions planifiées lors des arrêts techniques, week-ends ou périodes de fermeture, partout dans le Calvados.",
      },
    ],
  },
  "nettoyage-agroalimentaire-caen": {
    h1: "Nettoyage agroalimentaire à Caen",
    metaTitle: "Nettoyage agroalimentaire à Caen | Chambres froides",
    metaDescription:
      "Nettoyage et désinfection de zones de production, chambres froides et laboratoires agroalimentaires à Caen et dans le Calvados. Devis sous 24h.",
    intro:
      "L'agroalimentaire ne laisse aucune place à l'approximation. PROCLEAN STJ intervient sur les zones de production, chambres froides et laboratoires du Calvados avec des produits compatibles avec le contact alimentaire et une séparation stricte des zones.",
    includes: [
      "Chambres froides positives et négatives",
      "Zones de production et de conditionnement",
      "Laboratoires de préparation et plans de travail",
      "Sols, siphons et évacuations",
      "Désinfection des surfaces en contact alimentaire",
      "Vestiaires, sas d'hygiène et zones de passage",
    ],
    forWho: [
      "Ateliers de transformation alimentaire",
      "Boucheries, poissonneries et traiteurs",
      "Laboratoires de pâtisserie et boulangerie",
      "Entrepôts frigorifiques",
    ],
    faq: [
      {
        question: "Utilisez-vous des produits compatibles avec le contact alimentaire ?",
        answer:
          "Oui. PROCLEAN STJ n'utilise que des produits homologués pour les environnements agroalimentaires, avec un matériel dédié à chaque zone afin d'éviter toute contamination croisée.",
      },
      {
        question: "Nettoyez-vous les chambres froides dans le Calvados ?",
        answer:
          "Oui. Nous réalisons le nettoyage et la désinfection de chambres froides à Caen et dans tout le Calvados, notamment à Villers-Bocage, Bayeux et Lisieux.",
      },
    ],
  },
  "nettoyage-vitres-caen": {
    h1: "Nettoyage de vitres pour professionnels à Caen",
    metaTitle: "Nettoyage de vitres à Caen | Vitrerie professionnelle",
    metaDescription:
      "Nettoyage de vitrines, baies vitrées et façades vitrées à Caen et dans le Calvados, y compris en hauteur. PROCLEAN STJ, devis gratuit sous 24h.",
    intro:
      "Des vitres propres changent immédiatement la perception d'un bâtiment. PROCLEAN STJ nettoie les vitrines, baies vitrées et façades vitrées des professionnels de Caen et du Calvados, avec un matériel adapté y compris pour les surfaces en hauteur.",
    includes: [
      "Vitrines et devantures commerciales",
      "Baies vitrées, verrières et parois intérieures",
      "Encadrements, rails et menuiseries",
      "Vitrages en hauteur avec perche à eau pure",
      "Façades vitrées d'immeubles de bureaux",
      "Passages ponctuels ou contrats réguliers",
    ],
    forWho: [
      "Commerces, pharmacies et agences",
      "Immeubles de bureaux et sièges sociaux",
      "Écoles et équipements publics",
      "Restaurants et hôtels",
    ],
    faq: [
      {
        question: "Nettoyez-vous les vitres en hauteur à Caen ?",
        answer:
          "Oui. PROCLEAN STJ utilise des perches télescopiques à eau pure permettant d'atteindre les vitrages en hauteur sans nacelle dans la plupart des configurations, à Caen et dans le Calvados.",
      },
      {
        question: "À quelle fréquence faire nettoyer ses vitrines ?",
        answer:
          "Pour un commerce en centre-ville, un passage toutes les deux à quatre semaines maintient une vitrine impeccable. Nous établissons avec vous la fréquence adaptée à votre exposition et à votre budget.",
      },
    ],
  },
  "evacuation-dechets-caen": {
    h1: "Évacuation de déchets pour professionnels à Caen",
    metaTitle: "Évacuation de déchets à Caen | Encombrants, chantiers",
    metaDescription:
      "Enlèvement et évacuation d'encombrants et de déchets de chantier à Caen et dans le Calvados, avec dépôt en déchetterie. Devis gratuit sous 24h.",
    intro:
      "Après un chantier, un déménagement ou une remise en état, restent les déchets. PROCLEAN STJ prend en charge leur enlèvement et leur évacuation vers les filières adaptées, à Caen et dans tout le Calvados.",
    includes: [
      "Enlèvement d'encombrants et de mobilier hors d'usage",
      "Évacuation des déchets de chantier non dangereux",
      "Débarras de locaux, réserves et caves",
      "Tri des déchets par catégorie",
      "Dépôt en déchetterie ou centre de tri agréé",
      "Nettoyage des locaux après enlèvement",
    ],
    forWho: [
      "Entreprises du bâtiment",
      "Commerces et bureaux en réaménagement",
      "Syndics et bailleurs",
      "Collectivités",
    ],
    faq: [
      {
        question: "Où sont déposés les déchets que vous évacuez ?",
        answer:
          "Les déchets sont triés puis déposés en déchetterie ou en centre de tri agréé du Calvados, selon leur nature. Nous n'intervenons pas sur les déchets dangereux nécessitant une filière spécialisée.",
      },
      {
        question: "L'évacuation peut-elle être couplée au nettoyage ?",
        answer:
          "Oui, c'est même le plus fréquent : nous évacuons les encombrants puis réalisons la remise en état des locaux dans la foulée. Appelez le 09 81 94 61 61 pour un devis global.",
      },
    ],
  },
};

export type Realisation = {
  slug: string;
  title: string;
  city: string;
  category: string;
  summary: string;
  image: string | null;
};

export const realisations: Realisation[] = [
  { slug: "nettoyage-vitres-lycee-charles-de-gaulle-caen", title: "Nettoyage des vitres d'un lycée", city: "Caen", category: "Vitres", summary: "Nettoyage complet des vitrages intérieurs et extérieurs du lycée Charles de Gaulle, encadrements compris.", image: null },
  { slug: "nettoyage-fin-de-chantier-parties-communes-fleury-sur-orne", title: "Parties communes d'une résidence", city: "Fleury-sur-Orne", category: "Fin de chantier", summary: "Remise en état des parties communes d'une résidence neuve avant la livraison aux occupants.", image: null },
  { slug: "nettoyage-fin-de-chantier-centre-esport-vr-mondeville", title: "Centre eSport et réalité virtuelle", city: "Mondeville", category: "Fin de chantier", summary: "Nettoyage de fin de chantier d'un centre de loisirs numériques avant son ouverture au public.", image: null },
  { slug: "nettoyage-fin-de-chantier-boutique-sport-mondeville", title: "Boutique de sport", city: "Mondeville", category: "Fin de chantier", summary: "Remise en état d'une surface de vente d'articles de sport à la veille de son inauguration.", image: null },
  { slug: "nettoyage-fin-de-chantier-maison-bernieres-sur-mer", title: "Maison livrée par un professionnel", city: "Bernières-sur-Mer", category: "Fin de chantier", summary: "Nettoyage de livraison d'une maison individuelle pour le compte de l'entreprise ayant réalisé les travaux.", image: null },
  { slug: "nettoyage-restaurant-presquile-caen", title: "Restaurant de la presqu'île", city: "Caen", category: "Restauration", summary: "Entretien de la salle, de la cuisine et des sanitaires d'un restaurant de la presqu'île de Caen.", image: null },
  { slug: "nettoyage-vitres-pharmacie-caen", title: "Vitrines d'une pharmacie", city: "Caen", category: "Vitres", summary: "Nettoyage régulier des vitrines et de la devanture d'une pharmacie du centre de Caen.", image: null },
  { slug: "nettoyage-cabinet-medical-ophtalmologique-fleury-sur-orne", title: "Cabinet d'ophtalmologie", city: "Fleury-sur-Orne", category: "Médical", summary: "Entretien et désinfection d'un cabinet d'ophtalmologie selon un protocole d'hygiène dédié.", image: null },
  { slug: "nettoyage-bureau-memorial-caen", title: "Bureaux près du Mémorial", city: "Caen", category: "Tertiaire", summary: "Entretien régulier d'un plateau de bureaux situé à proximité du Mémorial de Caen.", image: null },
  { slug: "nettoyage-chambres-chateau-villers-bocage", title: "Chambres d'un château", city: "Villers-Bocage", category: "Tertiaire", summary: "Nettoyage des chambres et des espaces de réception d'un château accueillant du public.", image: null },
  { slug: "nettoyage-piscine-saint-pierre-en-auge", title: "Centre aquatique municipal", city: "Saint-Pierre-en-Auge", category: "Collectivités", summary: "Entretien des espaces d'accueil, vestiaires et circulations d'un centre aquatique.", image: null },
  { slug: "nettoyage-velo-park-sncf-twisto-caen", title: "Vélo-parks du réseau Twisto", city: "Caen et périphérie", category: "Collectivités", summary: "Nettoyage des vélo-parks du réseau de transport de l'agglomération caennaise.", image: null },
  { slug: "nettoyage-hall-au-poisson-ouistreham", title: "Hall au poisson", city: "Ouistreham", category: "Collectivités", summary: "Nettoyage complet du hall au poisson : sols, surfaces de vente et points d'eau.", image: null },
  { slug: "nettoyage-panneaux-autoroute-falaise", title: "Panneaux de signalisation autoroutière", city: "Falaise", category: "Industrie", summary: "Nettoyage de panneaux de signalisation en bord d'autoroute, avec les protections d'usage.", image: null },
  { slug: "nettoyage-sols-chambres-maison-accueil-ranville", title: "Maison d'accueil", city: "Ranville", category: "Collectivités", summary: "Nettoyage des sols et des chambres d'une maison d'accueil, dans le respect des résidents.", image: null },
  { slug: "nettoyage-chambre-froide-villers-bocage", title: "Chambre froide", city: "Villers-Bocage", category: "Agroalimentaire", summary: "Nettoyage et désinfection complète d'une chambre froide professionnelle.", image: null },
  { slug: "nettoyage-vitres-ecole-may-sur-orne", title: "Vitres d'une école", city: "May-sur-Orne", category: "Vitres", summary: "Nettoyage des vitrages d'un groupe scolaire pendant les vacances scolaires.", image: null },
  { slug: "nettoyage-vitres-ecole-ranville", title: "Vitres d'une école", city: "Ranville", category: "Vitres", summary: "Nettoyage intérieur et extérieur des vitrages d'une école communale.", image: null },
  { slug: "nettoyage-vitres-centre-aquatique-douvres-la-delivrande", title: "Vitrages d'un centre aquatique", city: "Douvres-la-Délivrande", category: "Vitres", summary: "Nettoyage des grandes surfaces vitrées d'un centre aquatique, y compris en hauteur.", image: null },
  { slug: "nettoyage-fin-de-chantier-magasin-mango-caen", title: "Magasin de prêt-à-porter Mango", city: "Caen", category: "Fin de chantier", summary: "Remise en état complète d'une boutique de prêt-à-porter avant son ouverture.", image: null },
  { slug: "nettoyage-fin-de-chantier-boutique-cyrillus-caen", title: "Boutique Cyrillus", city: "Caen", category: "Fin de chantier", summary: "Nettoyage de fin de chantier d'une boutique de centre-ville avant réception.", image: null },
  { slug: "nettoyage-fin-de-chantier-centre-medical-bayeux", title: "Centre médical", city: "Bayeux", category: "Médical", summary: "Remise en état d'un centre médical neuf avant l'installation des praticiens.", image: null },
  { slug: "nettoyage-fin-de-chantier-bureaux-epron", title: "Immeuble de bureaux", city: "Épron", category: "Tertiaire", summary: "Nettoyage de livraison d'un immeuble de bureaux : sols, vitrages et sanitaires.", image: null },
];

export const benefits = [
  {
    icon: "pin",
    title: "Tout le Calvados",
    text: "Basés à Caen, nous intervenons dans l'ensemble du département pour rester proches de vos sites.",
  },
  {
    icon: "clock",
    title: "Réponse sous 24h",
    text: "Toute demande de devis reçoit une réponse sous 24 heures ouvrées, sans exception.",
  },
  {
    icon: "check",
    title: "Qualité contrôlée",
    text: "Des protocoles écrits et des contrôles réguliers sur site pour un résultat constant.",
  },
  {
    icon: "leaf",
    title: "Produits éco-responsables",
    text: "Des produits respectueux de l'environnement et de la santé des occupants de vos locaux.",
  },
  {
    icon: "users",
    title: "Un interlocuteur dédié",
    text: "Un référent unique qui connaît votre site et reste joignable pour toute demande.",
  },
  {
    icon: "quote",
    title: "Prestation sur mesure",
    text: "Une intervention adaptée à votre activité, à vos horaires et à votre budget.",
  },
];

export const processSteps = [
  {
    title: "Vous nous contactez",
    text: "Par téléphone au 09 81 94 61 61 ou via le formulaire. Nous répondons sous 24 heures.",
  },
  {
    title: "Visite et devis",
    text: "Nous nous déplaçons dans vos locaux et établissons un devis détaillé, gratuit et sans engagement.",
  },
  {
    title: "Intervention",
    text: "Nos équipes interviennent selon le planning défini, avec un référent joignable à tout moment.",
  },
];

export const faq = [
  {
    question: "Quelle entreprise de nettoyage choisir à Caen pour des locaux professionnels ?",
    answer:
      "PROCLEAN STJ est une entreprise de nettoyage professionnel basée à Caen (29 rue Ampère, 14000) et créée en 2023. Elle intervient dans tout le Calvados pour les bureaux, cabinets médicaux, commerces, restaurants, sites industriels et chantiers. Devis gratuit sous 24h au 09 81 94 61 61.",
  },
  {
    question: "Intervenez-vous en dehors de Caen, dans le reste du Calvados ?",
    answer:
      "Oui. PROCLEAN STJ intervient dans tout le département du Calvados : Caen et son agglomération, mais aussi Bayeux, Lisieux, Vire, Falaise, Honfleur, Ouistreham et les communes alentour.",
  },
  {
    question: "Quels types de locaux nettoyez-vous ?",
    answer:
      "Nous intervenons sur les bureaux et locaux tertiaires, les grandes surfaces, les cabinets médicaux et EHPAD, les collectivités et copropriétés, les commerces, les restaurants, les sites industriels et agroalimentaires, les chantiers en fin de travaux, ainsi que sur la vitrerie et l'évacuation de déchets.",
  },
  {
    question: "Proposez-vous des contrats d'entretien réguliers ?",
    answer:
      "Oui. Nous mettons en place des contrats sur mesure, d'un passage hebdomadaire à une intervention quotidienne, avec un cahier des charges écrit et un interlocuteur dédié. Les interventions ponctuelles sont également possibles.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Appelez le 09 81 94 61 61 ou remplissez le formulaire de contact du site. Nous répondons sous 24 heures et nous nous déplaçons dans vos locaux pour établir un devis gratuit et sans engagement.",
  },
  {
    question: "Pouvez-vous intervenir en dehors des horaires d'ouverture ?",
    answer:
      "Oui. Nos équipes interviennent tôt le matin, en soirée ou le week-end selon vos contraintes, afin de ne jamais perturber votre activité ni l'accueil de vos clients.",
  },
  {
    question: "Utilisez-vous des produits respectueux de l'environnement ?",
    answer:
      "Oui. PROCLEAN STJ privilégie des produits éco-responsables, respectueux de l'environnement et de la santé des occupants, tout en garantissant l'efficacité attendue sur chaque type de surface.",
  },
  {
    question: "Depuis quand PROCLEAN STJ existe-t-elle ?",
    answer:
      "PROCLEAN STJ a été créée en 2023 et est immatriculée au RCS de Caen. L'entreprise emploie une équipe d'agents formés et intervient auprès des professionnels du Calvados.",
  },
];

/** Vide tant que le client n'a pas fourni de vrais témoignages vérifiables. */
export const testimonials: {
  name: string;
  context?: string;
  date?: string;
  rating: number;
  quote: string;
}[] = [];

/** Vide tant que les photos avant/après ne sont pas fournies. */
export const beforeAfterGallery: { title: string; before: string; after: string }[] = [];

export const legalMentions = {
  companyName: "PROCLEAN STJ",
  legalForm: "SARL (société à responsabilité limitée)",
  capital: "[Capital social à compléter]",
  siren: "951 387 406",
  siret: "951 387 406 00014",
  vatNumber: "[N° TVA intracommunautaire à compléter]",
  rcs: "RCS Caen 951 387 406",
  headOffice: "29 rue Ampère, 14000 Caen",
  insurance: "[Assureur et n° de contrat RC Pro à compléter]",
  insuranceArea: "France métropolitaine",
  qualifications: "[Qualifications et certifications à compléter, le cas échéant]",
  publicationDirector: "Philippe Berthelot Pellerin",
  host: "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com",
  consumerMediator:
    "[Médiateur de la consommation à compléter — obligatoire uniquement en cas de clientèle particulière]",
};
