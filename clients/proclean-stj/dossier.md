# Dossier client — PROCLEAN STJ

> 🔒 Aucun secret ici (pas de clé API / mot de passe).

## Identité
- Entreprise : PROCLEAN STJ (SARL)
- Interlocuteur (nom) : **Philippe BERTHELOT PELLERIN**, gérant (confirmé — RCS Caen)
- Secteur : Nettoyage professionnel (bureaux, cabinets médicaux, commerces, fin de chantier, vitrerie)
- Ville / zone : Caen (14000) — 29 rue Ampère — zone : tout le Calvados
- Téléphone : 09 81 94 61 61
- Email : proclean.caen@hotmail.com (⚠️ hotmail — devrait être contact@proclean-stj.fr)
- Canal de contact préféré : [à demander]
- **Origine du contact** : Josselyn (**associé**, artisan) → un contact à lui → le prospect.
  Chaîne à 3 relais : les infos techniques se déforment, tout faire passer par écrit via Josselyn.
- **Le prospect est déjà intéressé** par un site one-shot : il trouve les 700 €/mois trop chers.
- ⚠️ **Il ignore que son agence lui fait tourner des Google Ads** → risque majeur : s'il résilie tout,
  ses campagnes s'arrêtent et ses demandes de devis peuvent chuter. **Le prévenir AVANT** (fait le
  2026-09-04 via Josselyn) : crédibilité + protection si les leads baissent après la bascule.
- Tarif convenu : **750 € one-shot (site), proposé le 2026-09-09** (le client paie aujourd'hui ~700 €/mois pour son site actuel → argument commercial n°1)

## Statut
- **Étape** (1→9, cf. pipeline.md) : **4 — Construit** (site généré, build OK) / offre à 750 € en attente
- **Prochaine action** : déployer en préversion Vercel pour montrer le site au client, puis
  collecter logo + photos + infos légales manquantes, puis `/controle-final`.
- **Date de relance** : [à définir]
- Blocages :
  - `proclean-stj.fr` inaccessible depuis l'environnement (proxy : CONNECT 403). Audit fait sur le
    HTML de l'accueil sauvegardé le 2026-09-04. Les autres pages restent à auditer de la même façon.
  - **Le site actuel est de bonne qualité** → l'argument « votre site est mauvais » ne tient pas.
  - **Google Ads actif** → risque de lui faire perdre ses leads en cassant l'existant.

## Offre en cours (proposée le 2026-09-09)
- **Site : 750 € one-shot** (proposé à M. Berthelot).
- **Publicité : agence partenaire trouvée → 900 € de mise en place + 250 €/mois.**
- Comparatif : aujourd'hui 8 400 €/an. Nouvelle formule année 1 = 750 + 900 + 3 000 = **4 650 €**
  (≈ 3 750 € économisés), puis ~3 180 €/an (≈ 5 200 €/an économisés).

### Montage retenu
- **Le client paie les 250 €/mois de Google Ads directement à l'agence pub.** Pas de revente,
  pas de trésorerie avancée, pas de responsabilité sur la performance des campagnes.
- **Nous facturons uniquement le site : 750 € one-shot.**
- Seul point à exiger de l'agence pub : **le compte Google Ads ouvert au nom de PROCLEAN STJ**,
  avec le client en accès administrateur (sinon on reproduit le problème qu'on vend comme solution).

### ⚠️ « À l'identique » — risque de contrefaçon
Le site actuel appartient à EP DIGITAL X tant qu'il n'est pas cédé : **code, design et textes sont
protégés par le droit d'auteur**. Ne pas reproduire à l'identique.
- Reprenable : structure, faits (prestations, villes, chantiers, horaires, coordonnées), photos
  **si elles appartiennent au client** (à vérifier).
- Non reprenable : textes mot pour mot, maquette graphique, code.
- Formuler « un site équivalent, aussi complet », jamais « à l'identique ».
- ❌ **Ne PAS reprendre les faux témoignages** (Sophie Lefèvre, Marc Durand…) ni le
  « +10 ans d'expérience » (société créée en 2023) : on en deviendrait juridiquement responsable.

## Le prestataire actuel
- **EP DIGITAL X** — Daniel Sammy FERRAS, président. 5 rue Capitaine Boualam, 14000 Caen.
  Programmation informatique, créée en 2019, 3 salariés, capital 2 500 €.
- C'est une **vraie agence de développement locale**, pas un freelance à distance. Ne pas la
  sous-estimer ni la dénigrer : le travail livré est correct.
- Le compte Google Ads est ouvert **à son nom**. Possiblement par simple commodité et de bonne foi —
  **ne jamais l'accuser de rétention** (risque de diffamation, et mauvais calcul commercial).
  Formuler comme un **risque** : « aujourd'hui, si vous partez, vous n'avez aucun droit dessus ».

## Contexte commercial
- Le client **paie déjà ~700 €/mois** pour son site actuel (≈ 8 400 €/an).
- Notre offre : **création en one shot**, sans abonnement → économie immédiate massive.
- Angle de vente : « vous payez en 1 mois ce que coûte votre site à vie chez nous ».
- ⚠️ À vérifier avec le client avant de promettre : ce que couvre réellement les 700 €/mois
  (hébergement ? maintenance ? **campagnes Google Ads** ? SEO ? téléphone/standard ? propriété du
  domaine ?). Souvent l'abonnement inclut de la pub — si on la retire, il perd des leads.
- ⚠️ **Propriété du domaine** `proclean-stj.fr` : vérifier qui en est titulaire (whois) — si c'est le
  prestataire actuel, prévoir le transfert avant toute bascule.
- ⚠️ Contrat en cours : durée d'engagement / préavis de résiliation à vérifier.

## Projet
- Variante de design attribuée : **V21 Orange Proclean (sur mesure)** — reprend l'orange du logo client
- Fonctionnalités activées : avant/après ☐ (photos manquantes) · carte ☑ · avis ☐ (aucun vrai avis
  fourni) · formulaire ☑ · FAQ ☑ · Pourquoi ☑ · Comment ☑ · barre mobile ☑ · pages prestation ☑ (12)
  · réalisations ☑ (24)
- Repo GitHub : flooooooooooooooox/proclean
- URL preview (Vercel) : [à créer — voir guide de déploiement]
- URL production / domaine : proclean-stj.fr (site actuel, pas le nôtre)

## Infos collectées (☑ = reçu)
- ☐ Logo
- ☐ Photos réalisations / avant-après
- ☑ Liste des prestations (depuis site actuel : bureaux, cabinets médicaux, commerces, fin de chantier, vitrerie) — à faire valider
- ☑ Zone (Caen + tout le Calvados) — communes prioritaires à définir
- ☑ Horaires : Lun–Ven 7h–19h
- ☐ Réseaux sociaux
- ☑ Fiche Google : https://share.google/hW8KXRLQ1IdrR4TQX — note affichée 5,0 (à vérifier : nb d'avis réels)

## Légal (☑ = fourni) — cf. legal.md
- ☑ Forme juridique : SARL — capital : [à demander]
- ☑ SIRET : 951 387 406 00014 — SIREN : 951 387 406
- ☑ RCS Caen 951 387 406 (confirmé)
- ☐ N° TVA
- ☑ Adresse du siège : 29 rue Ampère, 14000 Caen
- ☐ Assurance RC Pro (nettoyage : RC Pro indispensable, décennale non applicable)
- ☐ Qualifications / certifications (produits écologiques annoncés → label ?)
- ☑ Directeur de la publication : Philippe BERTHELOT PELLERIN (gérant, confirmé RCS Caen)
- ☐ Hébergeur (sera Vercel si on héberge)
- ☐ Médiateur de la consommation — **a priori non requis** : clientèle B2B (pros). À confirmer :
  s'il fait aussi du particulier, c'est **obligatoire**.
- Autres infos publiques : société créée le 01/04/2023, 6 à 9 salariés (2023), activité nettoyage
  courant des bâtiments / nettoyage industriel.

## Technique / déploiement
- Compte Resend créé : non
- Variables Resend configurées sur Vercel : non
- Formulaire testé (email bien reçu) : non
- Domaine acheté : le client possède déjà `proclean-stj.fr` — **titulaire à vérifier**
- Domaine branché + `siteConfig.url` à jour : non

## Audit du site actuel — FAIT (2026-09-04, sur HTML sauvegardé de l'accueil)

**Technologie** : SPA React/Vite (bundle `app-CDznO9kG.js`), react-helmet (`data-rh`), **fait avec Lovable**
(l'image du schema pointe encore vers un bucket de preview `lovable.app`). Assets sur Cloudflare R2.

### Points forts (ne pas sous-estimer — le site est bon)
- **12 pages prestation × ville** déjà en place : /nettoyage-tertiaire-caen, -gss-, -medical-, -ehpad-,
  -collectivites-, -commerces-, -restaurants-, -fin-de-chantier-, -industrie-, -agroalimentaire-,
  -vitres-, /evacuation-dechets-caen
- **23 pages de réalisations** individuelles avec chantiers réels et nommés (Lycée Charles de Gaulle,
  Mango, Cyrillus, Twisto, Château de Villers-Bocage, piscine Saint-Pierre-en-Auge, Bayeux, Épron…)
- Pages /services, /zones-intervention, /realisations, /a-propos, /mentions-legales,
  /politique-de-confidentialite, /demande-de-devis
- **Bandeau cookies + Google Consent Mode v2** (refus par défaut) — correctement implémenté
- Schema.org ProfessionalService (tel, email, adresse, horaires, areaServed, sameAs Google)
- 35 images : **100 % WebP, 100 % avec alt, 33/35 en lazy**, hero en fetchpriority=high
- Formulaire de devis complet (nom, email, tél, entreprise, service, message, consentement) + reCAPTCHA
- Sections : hero, chiffres, 9 services, pourquoi nous, secteurs, réalisations (carousel),
  zone d'intervention, comment ça marche, 6 avis, FAQ (6 questions), formulaire, footer riche

### 🔴 Failles réelles (= argumentaire de vente)
1. **Faux témoignages** — « Sophie Lefèvre / Cabinet médical Côte de Nacre », « Marc Durand / Boutique
   Mode & Accessoires », « Jean-Pierre Martin / Restaurant Le Normand », « Claire Dubois / Résidence
   Les Tilleuls », « Thomas Bernard / BTP Normandie », « Isabelle Morin / Agence digitale Caen ».
   Noms génériques manifestement inventés → **pratique commerciale trompeuse (L121-2 code conso)**,
   jusqu'à 300 000 € ou 10 % du CA. Contrôles DGCCRF actifs sur les faux avis.
2. **« +10 ans d'expérience »** affiché 2× alors que la société est créée le **01/04/2023** (3 ans).
   Même qualification juridique.
3. **Chiffres contradictoires sur la même page** : hero « 200+ clients satisfaits » vs section chiffres
   « +50 clients professionnels » ; « 100 % Zone Caen & agglomération » vs « tout le Calvados » partout ailleurs.
4. **Aucune balise `og:image` ni `twitter:image`** → aperçu vide quand il partage son lien
   (WhatsApp, LinkedIn, email). Perte directe pour de la prospection B2B.
5. **Image du schema = capture d'écran de la preview Lovable** (bucket R2 `id-preview-...lovable.app`).
6. **Email hotmail** au lieu d'une adresse au domaine.
7. **« ★ 5/5 — Avis clients vérifiés »** sans modalités de collecte/vérification (art. L111-7-2 code conso).
8. Schema perfectible : `sameAs` en string au lieu d'array, pas de `@id`, pas de `logo`, pas de `geo`,
   pas de `priceRange`, pas d'`aggregateRating`.

### Vérifications terrain (2026-09-04, captures d'écran)
- **`site:proclean-stj.fr` → INDEXÉ** : accueil, /nettoyage-gss-caen, pages /realisations remontent
  avec titres + meta descriptions propres. L'hypothèse « SPA non indexée » est **écartée**.
- **Centre de transparence publicitaire — recherche par DOMAINE `proclean-stj.fr` → 3 ANNONCES**
  (la recherche par nom d'entreprise ne renvoyait rien : il fallait chercher le domaine).
  ⚠️ **L'annonceur déclaré est « Daniel FERRAS » — une personne physique, PAS la société.**
  **Identifié (2026-09-04) : Daniel Sammy FERRAS, président d'EP DIGITAL X**, agence web caennaise
  (5 rue Capitaine Boualam, 14000 Caen — programmation informatique, créée en 2019, 3 salariés,
  capital 2 500 €). **Aucun mandat chez PROCLEAN STJ** → c'est bien le prestataire, pas le gérant.
  Le gérant de PROCLEAN STJ est Philippe BERTHELOT PELLERIN (RCS Caen).
  Campagnes **actives** : les 3 annonces sont toujours diffusées sur le filtre « 7 derniers jours ».
  → **le compte Google Ads appartient au prestataire, pas au client.** S'il part, il perd le compte,
  l'historique d'optimisation, les mots-clés et les données de conversion.
  Google signale aussi : « ce domaine inclut des résultats pour **plusieurs comptes d'annonceur** ».
  Annonces : « Nettoyage Bureaux Caen – Société Nettoyage Tertiaire », « Entreprise Nettoyage B2B –
  Société Nettoyage Caen », « Nettoyage Vitres Pro Caen ». Elles affichent « 200+ clients » —
  chiffre contredit par le site lui-même (« +50 clients professionnels »).
  ⚠️ Filtre utilisé = « Date indifférente » (tout l'historique) → **reste à vérifier si les campagnes
  tournent actuellement** (filtre 7 / 30 derniers jours).
- **Pack local « nettoyage Caen » → PROCLEAN STJ est n°1**, devant Propre Eclat et ESM Propreté.
  C'est la position la plus rentable en B2B local. Son acquisition vient très probablement de là.
- **Avis Google : 5,0 ★ mais seulement 10 avis.** Concurrents : Propre Eclat 4,8 (61 avis),
  ESM Propreté 4,7 (19 avis). → **Position n°1 fragile**, le volume d'avis est un critère majeur.
- Incohérence NAP : fiche Google « ferme à 20:00 » vs site « Lun–Ven 7h–19h ».
- Reste à vérifier : sitemap.xml, robots.txt, llms.txt, PageSpeed mobile, schema des pages internes,
  positions organiques réelles (l'artisan ne ressort pas en top sur « entreprise nettoyage Caen »).

### 💰 LE POINT DE VENTE (corrigé après recherche par domaine)
Les 700 €/mois financent bien de la publicité Google : 3 annonces existent sur le domaine.
**Mais le compte d'annonceur est au nom de « Daniel FERRAS », pas de PROCLEAN STJ.**
→ L'argument n'est plus le prix, c'est la **dépendance totale** : site + domaine + compte Ads +
historique d'optimisation, rien ne lui appartient. 8 400 €/an pour louer sa propre acquisition.
Reste à trancher : les campagnes tournent-elles encore (filtre 30 derniers jours) ?
Si elles sont à l'arrêt → il paie pour un service qui ne tourne plus, argument décisif.

### 🎯 Angles de vente recommandés (par ordre de force)
1. **La dépendance** (le plus fort, vérifiable à l'écran devant lui) : le compte Google Ads est au nom
   de Daniel FERRAS. Site, domaine, compte Ads, historique : rien n'est à lui. 3 ans = 25 000 € versés
   pour ne rien posséder. Ne PAS critiquer le site : il est bon et il en est fier.
2. **Les avis Google** : 10 avis contre 61 chez Propre Eclat. Sa position n°1 est en sursis.
   → vrai service à valeur ajoutée, bien plus utile qu'une refonte.
3. **Conformité** : faux témoignages + « +10 ans d'expérience » (société créée en 2023) = risque
   DGCCRF que son prestataire actuel lui a créé.
4. **Détails qui prouvent le manque de suivi** : pas d'og:image, image de schema = preview Lovable,
   email hotmail, horaires incohérents entre fiche Google et site.

### ⚠️ Prudence avant l'appel
- Reconfirmer l'absence d'annonces (recherche validée sur `proclean-stj.fr`) avant toute affirmation.
- Ne jamais dire « votre site est mauvais » : il est bon, et c'est vérifiable.
- Ne pas promettre de gérer du Google Ads si on ne sait pas le faire.

## État du site construit (2026-09-09)
- Next.js 16 / App Router / Tailwind v4 — **52 pages**, build et lint OK.
- Variante **V21 Orange Proclean (sur mesure)** : reprend l'orange du logo existant du client.
- **URLs alignées sur le site actuel** (indispensable : les annonces Google pointent dessus) :
  `/demande-de-devis`, les 12 `/[service]-caen`, `/entreprise-nettoyage-caen`, les 24 slugs
  `/realisations/...`. Redirection 301 `/contact` → `/demande-de-devis`.
- SEO : métadonnées + canonical par page, sitemap, robots, **og:image** (absente du site actuel).
- GEO : `/llms.txt`, robots IA autorisés, JSON-LD `CleaningService` enrichi (GeoCircle 45 km,
  knowsAbout, makesOffer, SIREN/SIRET, foundingDate).
- Formulaire Resend fonctionnel (repli propre si clé absente).
- **Non repris volontairement** : faux témoignages, « +10 ans d'expérience », « 200+ clients ».
  Textes, design et code entièrement réécrits → pas de risque de contrefaçon vis-à-vis d'EP Digital X.

### Reste à obtenir du client
- Logo (fichier) — logo textuel provisoire en place
- Photos : hero, 12 prestations, 24 réalisations, équipe (vérifier **qui en est propriétaire**)
- Légal : capital social, n° TVA, assurance RC Pro, confirmation clientèle 100 % B2B

## Historique des échanges
- 2026-09-09 — **Site construit** (52 pages) puis passé en palette orange pour coller au logo
  client. URLs alignées sur celles du site existant pour ne pas casser les annonces Google.
- 2026-09-09 — **Offre posée : 750 € one-shot pour le site.** Agence pub partenaire trouvée
  (900 € de mise en place + 250 €/mois). Points bloquants à lever : ce que couvrent les 250 €
  (budget média inclus ou non), le compte Ads au nom du client, qui facture qui, et le risque de
  contrefaçon si le site est refait « à l'identique ».
- 2026-09-04 — Contexte clarifié : Josselyn est l'associé, le prospect est **déjà demandeur** d'un
  one-shot mais **ignore l'existence de ses Google Ads**. Message d'information rédigé
  (`messages.md`) et transmis via Josselyn : on l'alerte sur le risque avant toute résiliation, et
  on lui donne les 5 questions à poser à son agence. Pas de prix annoncé tant que le scénario
  (garde les pubs / coupe tout) n'est pas tranché.
- 2026-09-04 — **Google Ads : 3 annonces trouvées via la recherche par domaine.** Annonceur =
  « Daniel FERRAS » (personne physique), pas la société → **le compte Ads appartient au prestataire**.
  Corrige la conclusion précédente (« aucune pub »), issue d'une recherche par nom d'entreprise.
  Angle de vente recentré sur la dépendance/propriété. Reste à vérifier si les campagnes sont actives.
- 2026-09-04 — **Vérifications terrain** : site bien indexé (site: OK), **aucune Google Ads active**
  (Centre de transparence vide), **n°1 du pack local sur « nettoyage Caen »**, mais seulement 10 avis
  contre 61 pour Propre Eclat. → Les 700 €/mois ne financent ni pub ni développement : c'est une
  location d'un site déjà fini. Nouvel angle de vente : propriété + acquisition d'avis Google.
- 2026-09-04 — **Audit de l'accueil réalisé** (HTML sauvegardé). Site fait avec Lovable, de bonne
  qualité (12 pages prestation×ville, 23 réalisations, consent mode v2, images WebP/alt/lazy).
  Failles exploitables : faux témoignages, « +10 ans » alors que société créée en 2023, chiffres
  contradictoires, pas d'og:image, image de schema = preview Lovable, email hotmail.
  **Découverte clé : tag Google Ads AW-18152940761 → les 700 €/mois sont surtout de la pub.**
  Réorientation de l'approche commerciale : propriété du site + conformité légale, pas le prix.
- 2026-09-04 — Prospect identifié. Il paie ~700 €/mois pour son site actuel ; on vise une refonte
  **one shot**. Dossier créé. Infos publiques (SIRET, forme juridique, adresse, gérant, prestations,
  zone) récupérées via recherche web. Audit du site en ligne impossible depuis l'environnement
  (egress bloqué).

## Ce qui manque (synthèse)
1. Canal de contact préféré du gérant (tel et email connus : 09 81 94 61 61 / proclean.caen@hotmail.com)
2. **Montant du one shot** à fixer (proposition : 900–1 500 € selon options)
3. **Détail des 700 €/mois** (pub incluse ou pas) + **préavis de résiliation** + **titulaire du domaine**
4. Audit des autres pages (mentions légales surtout) + sitemap/robots/llms.txt + PageSpeed mobile
5. Logo, photos (avant/après), horaires, avis Google, réseaux
6. Légal : capital, RCS, TVA, RC Pro, hébergeur, B2B seulement ou aussi particuliers
