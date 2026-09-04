# Dossier client — PROCLEAN STJ

> 🔒 Aucun secret ici (pas de clé API / mot de passe).

## Identité
- Entreprise : PROCLEAN STJ (SARL)
- Interlocuteur (nom) : Philippe Berthelot Pellerin (gérant — à confirmer)
- Secteur : Nettoyage professionnel (bureaux, cabinets médicaux, commerces, fin de chantier, vitrerie)
- Ville / zone : Caen (14000) — 29 rue Ampère — zone : tout le Calvados
- Téléphone : 09 81 94 61 61
- Email : proclean.caen@hotmail.com (⚠️ hotmail — devrait être contact@proclean-stj.fr)
- Canal de contact préféré : [à demander]
- Tarif convenu : **one shot — montant à définir** (le client paie aujourd'hui ~700 €/mois pour son site actuel → argument commercial n°1)

## Statut
- **Étape** (1→9, cf. pipeline.md) : **1 — Prospect** (site existant, bon, chez un prestataire — vente difficile)
- **Prochaine action** : appeler le gérant. Faire ventiler les 700 €/mois (pub / gestion / site) et
  vérifier qui possède le domaine et le code. Puis positionner l'offre sur la PROPRIÉTÉ + la CONFORMITÉ,
  pas sur le prix du site.
- **Date de relance** : [à définir]
- Blocages :
  - `proclean-stj.fr` inaccessible depuis l'environnement (proxy : CONNECT 403). Audit fait sur le
    HTML de l'accueil sauvegardé le 2026-09-04. Les autres pages restent à auditer de la même façon.
  - **Le site actuel est de bonne qualité** → l'argument « votre site est mauvais » ne tient pas.
  - **Google Ads actif** → risque de lui faire perdre ses leads en cassant l'existant.

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
- Variante de design attribuée : [à faire — /site-artisan]
- Fonctionnalités activées : avant/après ☐ · carte ☐ · avis ☐ · formulaire ☑ (devis 24 h) · FAQ ☐ · Pourquoi ☐ · Comment ☐ · barre mobile ☐
- Repo GitHub : flooooooooooooooox/proclean
- URL preview (Vercel) :
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
- ☐ RCS ou RM + ville (probable RCS Caen — à confirmer)
- ☐ N° TVA
- ☑ Adresse du siège : 29 rue Ampère, 14000 Caen
- ☐ Assurance RC Pro (nettoyage : RC Pro indispensable, décennale non applicable)
- ☐ Qualifications / certifications (produits écologiques annoncés → label ?)
- ☑ Directeur de la publication : Philippe Berthelot Pellerin (à confirmer par le client)
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

### À vérifier (impossible depuis cette session — domaine bloqué par le proxy)
- HTML servi vide (SPA client-side) ? → impact SEO potentiellement lourd
- `sitemap.xml`, `robots.txt`, `llms.txt` (GEO / référencement IA)
- Scores PageSpeed mobile
- Schema sur les pages prestation et réalisations
- Nombre réel d'avis Google

### 💰 Découverte critique pour la vente
Le site contient **`gtag('config', 'AW-18152940761')`** = **tag Google Ads actif**. Le bandeau cookies
mentionne explicitement « mesurer la performance de nos publicités (Google Ads) ».
→ **Les 700 €/mois ne paient pas un site : ils paient de la pub Google + sa gestion** (typiquement
~400 € de budget média + ~300 € de gestion). Le site est probablement inclus quasi gratuitement.
→ **Ne PAS vendre un remplacement de site en promettant une économie** : s'il résilie, il coupe sa pub
et perd ses leads. Il t'en tiendra responsable.

### 🎯 Angles de vente recommandés
1. **Propriété** : « Si vous arrêtez demain, vous gardez le site, le code et le domaine ? » — réponse
   quasi toujours non. C'est là qu'est la vente.
2. **Conformité** : faux avis + « 10 ans d'expérience » = risque juridique que son prestataire lui a créé.
3. **Ventilation du prix** : lui faire dire combien va en budget pub / gestion / site.
4. Ne pas toucher aux Google Ads tant qu'il n'a personne pour les reprendre.

## Historique des échanges
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
