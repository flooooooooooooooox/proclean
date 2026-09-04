# Dossier client — PROCLEAN STJ

> 🔒 Aucun secret ici (pas de clé API / mot de passe).

## Identité
- Entreprise : PROCLEAN STJ (SARL)
- Interlocuteur (nom) : Philippe Berthelot Pellerin (gérant — à confirmer)
- Secteur : Nettoyage professionnel (bureaux, cabinets médicaux, commerces, fin de chantier, vitrerie)
- Ville / zone : Caen (14000) — 29 rue Ampère — zone : tout le Calvados
- Téléphone : [à demander]
- Email : [à demander]
- Canal de contact préféré : [à demander]
- Tarif convenu : **one shot — montant à définir** (le client paie aujourd'hui ~700 €/mois pour son site actuel → argument commercial n°1)

## Statut
- **Étape** (1→9, cf. pipeline.md) : **1 — Prospect** (site existant chez un prestataire)
- **Prochaine action** : audit du site actuel (bloqué depuis cette session, cf. Blocages) + proposition one-shot chiffrée
- **Date de relance** : [à définir]
- Blocages :
  - `proclean-stj.fr` **inaccessible depuis l'environnement Claude Code** (bloqué par le proxy réseau : CONNECT 403). Idem `annuaire-entreprises.data.gouv.fr`. → l'audit du site en ligne doit être fait autrement (voir « Audit »).
  - Coordonnées directes (tel/email) non collectées.

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
- ☐ Horaires
- ☐ Réseaux sociaux
- ☐ Fiche/avis Google (note + textes)

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

## Audit du site actuel (à faire)
Statut : **non réalisé** — domaine bloqué par le proxy réseau de cette session.
Options pour le faire :
1. Coller ici le HTML / des captures d'écran des pages (accueil, `/a-propos`, prestations, mentions légales).
2. Lancer la session Claude Code depuis un environnement à egress ouvert, puis `/controle-final`.
3. Faire l'audit manuellement avec PageSpeed Insights + inspection des mentions légales.
Points à regarder en priorité pour construire l'argumentaire de vente :
- Vitesse mobile (PageSpeed), poids des images
- Mentions légales complètes ? RGPD / cookies ?
- Pages prestation × ville (`/nettoyage-bureaux-caen`, `/nettoyage-fin-de-chantier-caen`…) — le levier SEO n°1, souvent absent
- Données structurées (LocalBusiness), sitemap, robots, `llms.txt` (GEO)
- Preuves : photos avant/après, avis Google affichés, formulaire qui fonctionne vraiment

## Historique des échanges
- 2026-09-04 — Prospect identifié. Il paie ~700 €/mois pour son site actuel ; on vise une refonte
  **one shot**. Dossier créé. Infos publiques (SIRET, forme juridique, adresse, gérant, prestations,
  zone) récupérées via recherche web. Audit du site en ligne impossible depuis l'environnement
  (egress bloqué).

## Ce qui manque (synthèse)
1. **Tel + email + canal préféré** du gérant → indispensable pour relancer
2. **Montant du one shot** à fixer (proposition : 900–1 500 € selon options)
3. **Détail des 700 €/mois** (pub incluse ou pas) + **préavis de résiliation** + **titulaire du domaine**
4. **Audit du site actuel** (voir section Audit)
5. Logo, photos (avant/après), horaires, avis Google, réseaux
6. Légal : capital, RCS, TVA, RC Pro, hébergeur, B2B seulement ou aussi particuliers
