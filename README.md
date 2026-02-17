# TimeTravel Agency - WebApp Interactive

Une application web moderne, immersive et prête pour la production pour une agence de voyage temporel de luxe fictive. Découvrez des animations époustouflantes, une assistance par chat alimentée par l'IA et des recommandations de destinations personnalisées grâce à un design sombre et élégant.

Réalisé par:  
- Pierre TONDEUX

## Aperçu du Projet

TimeTravel Agency est une application interactive à page unique qui permet aux utilisateurs d'explorer des destinations de voyage temporel, d'interagir avec un assistant conversationnel IA, de répondre à un quiz personnalisé et de simuler la réservation d'un voyage temporel.

## Pile Technologique

- **React 18** - Bibliothèque UI moderne avec hooks
- **TypeScript** - Développement typé
- **Vite** - Outil de build rapide et serveur de développement
- **TailwindCSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animation professionnelle
- **Lucide React** - Magnifique jeu d'icônes

## Fonctionnalités

### 1. En-tête de Navigation
- En-tête collant avec effet de flou en arrière-plan
- Navigation par défilement fluide vers les sections
- Menu burger mobile réactif
- Logo avec animations au survol

### 2. Section Héro
- Arrière-plan dégradé immersif avec motif animé
- Typographie élégante avec texte en dégradé
- Bouton d'appel à l'action avec effets de survol
- Animation de l'indicateur de défilement fluide

### 3. Présentation de l'Agence
- Quatre cartes de fonctionnalités présentant :
  - Technologie de Précision Temporelle
  - Protocoles de Sécurité Absolus
  - Standards d'Expérience de Luxe
  - Conseils Historiques d'Experts
- Effets d'entrée animés
- Interactions au survol sur les cartes

### 4. Galerie des Destinations
- Trois destinations sélectionnées :
  - **Paris 1889** - La Belle Époque et l'inauguration de la Tour Eiffel
  - **Période du Crétacé** - Il y a 65 millions d'années avec les dinosaures
  - **Florence 1504** - La Haute Renaissance avec Michel-Ange et De Vinci
- Cartes de destination interactives avec effets de survol
- Panneaux modaux extensibles avec tous les détails
- Informations sur les prix
- Intégration de réservation directe

### 5. Assistant Chatbot IA
- Bulle de chat flottante dans le coin inférieur droit
- Fenêtre de chat extensible avec interface utilisateur moderne
- Système de réponse basé sur des modèles
- Personnalité conversationnelle en tant que consultant de voyage virtuel
- **Intelligence Hybride** : Utilise l'API Google Gemini pour les requêtes avancées, avec un système de repli local (mode dégradé) si l'API n'est pas configurée.
- Fonctionnalités :
  - Recommandations de destinations
  - Informations sur les prix
  - Explications sur la sécurité et les processus
  - Réponses aux FAQ
- Indicateurs de frappe en temps réel
- Historique des messages avec horodatage
- Animations de chargement

### 6. Quiz de Destination Personnalisé
- Questionnaire interactif en 4 étapes
- Les questions couvrent :
  - Préférences d'expérience
  - Intérêts pour les périodes temporelles
  - Préférences d'environnement
  - Activités idéales
- Algorithme de notation pondéré
- Recommandation personnalisée avec explication détaillée
- Option pour refaire le quiz
- Intégration de réservation directe à partir des résultats

### 7. Formulaire de Réservation
- Validation complète du formulaire
- Les champs incluent :
  - Nom complet
  - Adresse e-mail
  - Sélection de la destination
  - Dates de départ et de retour
- Affichage des erreurs en temps réel
- Interface utilisateur de confirmation de succès
- Mise en page réactive

### 8. Fonctionnalités Supplémentaires
- Indicateur de progression du défilement
- Défilement fluide entre les sections
- Pied de page avec coordonnées et liens
- Design entièrement réactif mobile-first
- Implémentation respectueuse de l'accessibilité

## Système de Design

### Palette de Couleurs
- **Primaire** : Accents Ambre/Or (#f59e0b, #eab308)
- **Arrière-plan** : Dégradés de noir à gris foncé (#000000, #111827, #1f2937)
- **Texte** : Nuances de blanc et de gris
- **Bordures** : Bordures grises subtiles avec reflets dorés

### Typographie
- Pile de polices système pour des performances optimales
- Titres en gras avec effets de texte en dégradé
- Corps de texte lisible avec un interlignage approprié
- Hiérarchie claire dans toutes les sections

### Animations
- Durée : 0,6s - 0,8s pour une sensation naturelle
- Courbes d'accélération fluides
- Animations d'entrée avec délais échelonnés
- Interactions au survol et au clic
- Révélations basées sur le défilement

## Structure du Projet

```
src/
├── components/
│   ├── About.tsx           # Section de présentation de l'agence
│   ├── BookingForm.tsx     # Formulaire de réservation avec validation
│   ├── Chatbot.tsx         # Widget d'assistant de chat IA
│   ├── DestinationCard.tsx # Carte de destination individuelle
│   ├── DestinationModal.tsx# Modale de détail de la destination
│   ├── Destinations.tsx    # Section galerie des destinations
│   ├── Footer.tsx          # Composant pied de page
│   ├── Header.tsx          # En-tête de navigation
│   ├── Hero.tsx            # Section Hero
│   ├── Quiz.tsx            # Composant de quiz personnalisé
│   └── ScrollProgress.tsx  # Indicateur de progression du défilement
├── data/
│   ├── chatbotResponses.ts # Logique et réponses du chatbot
│   ├── destinations.ts     # Données des destinations
│   └── quizData.ts         # Questions et logique du quiz
├── types/
│   └── index.ts            # Définitions de types TypeScript
├── assets/
│   └── images/
│       └── destinations/   # Images des destinations
├── App.tsx                 # Composant principal de l'application
├── main.tsx               # Point d'entrée de l'application
└── index.css              # Styles globaux
```

## Intégration de l'IA

Le chatbot utilise un système hybride combinant la reconnaissance de motifs et l'IA générative :

- **API LLM (Google Gemini)** : Pour une compréhension naturelle et des réponses créatives aux questions ouvertes.
- **Mode de repli local** : Si aucune clé API n'est fournie ou en cas d'erreur réseau, le chatbot bascule automatiquement vers un système basé sur des règles locales.
- **Reconnaissance de motifs** : Des expressions régulières correspondent aux entrées de l'utilisateur.
- **Réponses dynamiques** : Réponses contextuelles basées sur les questions de l'utilisateur.
- **Système de repli** : Réponses par défaut pour les requêtes non reconnues en mode local.
- **Personnalité** : Ton professionnel, chaleureux et enthousiaste.
- **Base de connaissances** : Informations sur toutes les destinations, les prix, la sécurité et la réservation.

Le système est conçu pour être facilement extensible avec de nouveaux motifs et réponses.

## Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/PierreTDX/TimeTravelAgency
cd TimeTravelAgency
```

2. Installer les dépendances :
```bash
npm install
```

3. Démarrer le serveur de développement :
```bash
npm run dev
```

L'application sera disponible à l'adresse `http://localhost:5173`

## Construction pour la Production

Créer une version de production optimisée :

```bash
npm run build
```

Prévisualiser le build de production :

```bash
npm run preview
```

## Déploiement

### Vercel (Recommandé)

1. Installer le CLI Vercel :
```bash
npm install -g vercel
```

2. Déployer :
```bash
vercel
```

### Autres Plateformes

L'application est un site statique et peut être déployée sur :
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Tout service d'hébergement statique

Il suffit de téléverser le contenu du dossier `dist` après avoir exécuté `npm run build`.

## Variables d'Environnement

Cette application fonctionne entièrement côté client et ne nécessite aucune variable d'environnement ni service backend.

## Compatibilité Navigateurs

- Chrome/Edge (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Navigateurs mobiles (iOS Safari, Chrome Mobile)

## Performances

- Chargement différé des images
- Animations optimisées avec Framer Motion
- Taille du bundle minimale
- Temps de chargement initial rapide
- Animations fluides à 60 fps

## Accessibilité

- Structure HTML sémantique
- Navigation au clavier
- Attributs ARIA appropriés
- Contraste des couleurs suffisant
- Indicateurs de focus
- Compatible avec les lecteurs d'écran

## Crédits

### Développement
- Construit avec React + TypeScript + Vite
- Stylisé avec TailwindCSS
- Animé avec Framer Motion
- Icônes par Lucide React

### Philosophie de Design
- Thème sombre haut de gamme et luxueux
- Approche responsive mobile-first
- Centré sur l'expérience utilisateur
- Bonnes pratiques du web moderne

### Images
Les images des destinations sont des illustrations représentant :
- Paris 1889 à l'ère de la Belle Époque
- Les paysages préhistoriques de la Période du Crétacé
- Florence 1504 à la période de la Renaissance

## Licence

Ce projet est un concept fictif créé à des fins de démonstration.

## Améliorations Futures

Fonctionnalités potentielles pour les versions futures :
- Intégration d'un backend pour un vrai système de réservation
- Comptes utilisateurs et authentification
- Intégration du traitement des paiements
- Chatbot IA avancé avec NLP
- Davantage de destinations
- Prévisualisations en réalité virtuelle
- Fonctionnalités de partage sur les réseaux sociaux
- Support multilingue

---

**Note** : Ceci est un concept fictif d'agence de voyage temporel de luxe. Aucun service de voyage temporel réel n'est fourni.
