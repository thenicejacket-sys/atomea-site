# Atomea Site vitrine

Site multi-pages bilingue FR/EN d'**Atomea** cabinet de conseil en transformation d'organisation, automatisation et IA d'entreprise.

## Caractéristiques

- **Multi-pages** : `index`, `services`, `experts-comptables` (landing cold email), `methode`, `realisations`, `apropos`, `faq`, `contact` CSS (`styles.css`) et JS (`app.js`) partagés, aucun build requis
- **Bilingue** : bascule FR/EN (`data-i18n`, dictionnaire EN dans `app.js`), détection pays par IP, choix mémorisé (localStorage)
- **Design « blueprint »** : panneaux marine quadrillés, annotations mono, animation de particules dans le hero le mot ATOMEA se révèle quand la structure s'assemble (« le déclic ») ; frame statique si `prefers-reduced-motion`
- **Positionnement 3 terrains** : cabinets comptables (page dédiée) · rénovation énergétique · PME section « Nos terrains » sur l'accueil
- **Partage** : balises Open Graph sur chaque page + `og-image.png` (1200×630)

## Avant mise en ligne / au passage au domaine custom

- [ ] Brancher le domaine (CNAME + DNS) puis mettre à jour `og:url` / `og:image` sur les 8 pages
- [ ] Remplacer les `mailto:` de conversion par le lien Calendly/Cal.com (boutons `cta-btn`)
- [ ] Ajouter `sitemap.xml` + `robots.txt` une fois le domaine actif

`aymeric-barre.jpg` est la photo de la page À propos (référencée en fichier, plus de base64).
