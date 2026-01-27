# Séance de TP — Développement d’une Application Web de Jeux Vidéo

## Contexte du TP

Ce TP s’inscrit **dans la continuité directe du TD JavaScript Front-End & Back-End avec Node.js & Express**.

Après avoir :

* revu HTML / CSS,
* introduit JavaScript côté navigateur,
* découvert Node.js et Express,

nous allons **commencer le développement progressif de l’application web finale** qui servira de support à vos **jeux vidéo à rendre**.

Ce TP marque le **début concret du projet applicatif**.

---

## 🎯 Objectif global du TP

Construire **pas à pas** une application web complète permettant :

* d’accueillir l’utilisateur (Landing Page)
* d’afficher les jeux que vous avez développés
* de gérer la navigation entre plusieurs pages ( Pour l'instant avec balises <a> redirection manuelle, par la suite SPA ( Single Page APP )
* de préparer les futures fonctionnalités :

  * connexion
  * scoring
  * stockage des résultats

👉 Ce qui est commencé aujourd’hui sera **bien evideamment terminé lors des prochains TP**.

---

## 🧱 Architecture générale visée

À terme, l’application contiendra :

* une **Landing Page** (page d’accueil)
* une **page de connexion**
* une **page listant les jeux**
* une **page par jeu**
* une **page de scoring**
* un **backend Node.js / Express**

Aujourd’hui, nous posons **les fondations**.

---

# 🟦 EXERCICE 1 — Création de la Landing Page

## 🎯 Objectif

Créer la **page d’accueil** de l’application web des jeux vidéo. ( A partir d'une maquette FIGMA pour vous challenger encore un max et devenir un AS un HTML/CSS/JS )

Cette page doit :

* présenter le projet
* donner une première impression professionnelle
* servir de point d’entrée vers les autres pages

---

## 🧩 Contenu attendu de la Landing Page

La Landing Page doit contenir au minimum :

* un **header** avec :

  * le nom de l’application
  * un menu de navigation
* une **section principale** avec :

  * un titre
  * une description du projet
* un **bouton** permettant d’accéder aux jeux

---

## 📁 Structure de fichiers (Front-End)

```
frontend/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
```

---

## 🧪 Travail demandé

### 1️⃣ Créer la structure HTML

* header
* main
* footer

### 2️⃣ Styliser la page en CSS

Contraintes :

* mise en page claire
* typographie lisible
* design simple mais propre

### 3️⃣ Ajouter une interaction JavaScript

* clic sur un bouton
* affichage d’un message ou redirection (plus tard)

Notions mobilisées :

* DOM
* `addEventListener`
* organisation du code

---

# 🟦 EXERCICE 2 — Navigation entre pages

## 🎯 Objectif

Préparer l’application à gérer **plusieurs pages**.

---

## 🧩 Pages à créer

* `index.html` → Landing Page
* `login.html` → Page de connexion
* `games.html` → Liste des jeux

---

## 🧪 Travail demandé

* créer les pages HTML
* mettre en place une navigation avec des liens
* vérifier le bon passage d’une page à l’autre

Notions mobilisées :

* structure HTML
* navigation
* séparation des responsabilités

---

# 🟦 EXERCICE 3 — Connexion & Inscription (une seule page)

## 🎯 Objectif

Créer **une seule page** qui gère à la fois :

* la **connexion**
* l’**inscription**

👉 L’objectif est d’éviter la multiplication des pages et de comprendre comment **afficher / cacher dynamiquement des sections** avec JavaScript.

---

## 🧩 Principe imposé

* **Une seule page HTML** (`auth.html` par exemple)
* Deux formulaires :

  * Connexion
  * Inscription
* Un système de bascule avec JavaScript :

  * `display: none`
  * `display: flex`

📌 Exemple de logique :

* bouton "Inscription" → afficher le formulaire d’inscription
* bouton "Connexion" → afficher le formulaire de connexion

---

## 🧪 Comportement attendu

### Connexion

* empêcher le rechargement de la page
* récupérer les informations saisies
* vérifier si l’utilisateur existe
* * Faire toutes les gestions d'erreurs ( Nb de caractères mdp , adresse email regex )
* stocker l’utilisateur connecté dans :

  * `localStorage` **ou**
  * `sessionStorage`

### Inscription

* empêcher le rechargement de la page
* récupérer les informations saisies
* enregistrer le nouvel utilisateur dans le stockage navigateur

📌 Exemple de données stockées :

* email
* mot de passe (simple, pas de sécurité avancée ici)
* date d’inscription

Notions mobilisées :

* `submit`
* `preventDefault()`
* `style.display`
* `localStorage` / `sessionStorage`

---

## 🧩 Contenu de la page

* un formulaire avec :

  * email
  * mot de passe
* un bouton de validation

---

## 🧪 Comportement attendu

* empêcher le rechargement de la page
* récupérer les valeurs saisies
* **stocker l’utilisateur connecté** dans :

  * `localStorage` **ou**
  * `sessionStorage`
* afficher un message indiquant que l’utilisateur est connecté

📌 Exemple de données stockées :

* email
* date de connexion
* statut connecté / non connecté

Notions mobilisées :

* `submit`
* `preventDefault()`
* `localStorage` / `sessionStorage`
* JSON (`JSON.stringify`, `JSON.parse`)

---

## 🧩 Contenu de la page

* un formulaire avec :

  * email
  * mot de passe
* un bouton de validation

---

## 🧪 Comportement attendu

* empêcher le rechargement de la page
* récupérer les valeurs saisies
* afficher un message de confirmation ou d’erreur

Notions mobilisées :

* `submit`
* `preventDefault()`
* récupération des inputs

---

# 🟦 EXERCICE 4 — Page des jeux vidéo

## 🎯 Objectif

Créer une page affichant **les jeux vidéo du projet**.

---

## 🧩 Contenu attendu

Pour chaque jeu :

* nom du jeu
* description
* bouton "Jouer"

Les jeux peuvent être stockés :

* dans un tableau JavaScript

---

## 🧪 Travail demandé

* parcourir un tableau de jeux
* générer dynamiquement le HTML

Notions mobilisées :

* tableaux
* boucles
* manipulation du DOM

---

# 🟦 EXERCICE 5 — Introduction au scoring (préparation)

## 🎯 Objectif

Mettre en place la **logique de scoring des jeux** avec une **persistance locale des données**.

---

## 🧩 Travail demandé

* simuler un score pour un jeu
* afficher le score à l’écran
* **enregistrer les scores** dans :

  * `localStorage`
  * ou `sessionStorage`
  * ou `cookies` (au choix)

📌 Exemple de données stockées :

* nom du jeu
* score
* date
* utilisateur associé

Notions mobilisées :

* variables
* logique conditionnelle
* stockage côté navigateur

---

## 🧩 Travail demandé

* simuler un score
* afficher un score à l’écran
* préparer une structure pour stocker les scores

Notions mobilisées :

* variables
* logique conditionnelle
* affichage dynamique

---

# 🧠 Focus pédagogique — LocalStorage, SessionStorage & Cookies

Avant d’aller plus loin, il est **essentiel de comprendre ce qu’est le stockage côté navigateur**.

---

## 📦 Qu’est-ce que le LocalStorage ?

Le **LocalStorage** est un espace de stockage **fourni par le navigateur**.

👉 Il permet de **sauvegarder des données côté client**, directement dans le navigateur de l’utilisateur.

Caractéristiques importantes :

* les données sont stockées sous forme **clé / valeur**
* les données **persistent même après la fermeture du navigateur**
* les données sont propres à un navigateur et à un site donné

📌 Exemple de cas d’usage :

* utilisateur connecté
* scores de jeux
* préférences utilisateur

---

## 🧠 SessionStorage : quelle différence ?

Le **SessionStorage** fonctionne comme le LocalStorage **mais** :

* les données sont **supprimées dès que l’onglet ou le navigateur est fermé**

👉 Il est utile pour :

* une session temporaire
* un score provisoire
* des données non critiques

---

## 🛠️ Méthodes principales à connaître

### Enregistrer une donnée

```js
localStorage.setItem("user", JSON.stringify({ email: "test@mail.com" }));
```

### Lire une donnée

```js
const user = JSON.parse(localStorage.getItem("user"));
```

### Supprimer une donnée

```js
localStorage.removeItem("user");
```

### Vider complètement le stockage

```js
localStorage.clear();
```

⚠️ Important :

> Le LocalStorage ne stocke que des **chaînes de caractères**, d’où l’utilisation de `JSON.stringify` et `JSON.parse`.

---

## 🍪 Cookies (optionnel)

Les **cookies** permettent aussi de stocker des données côté client, mais :

* leur capacité est limitée
* ils sont souvent utilisés pour l’authentification

👉 Dans ce TP, les cookies sont **optionnels**.

---

## 🎯 Message important aux étudiants

L’objectif de ce TP **n’est pas de devenir expert en LocalStorage aujourd’hui**.

Vous devez :

* comprendre le principe
* savoir enregistrer, lire et supprimer des données
* vous concentrer sur **ce qui est demandé dans ce document**

👉 **En cas de besoin**, je pourrai vous aider et approfondir ces notions pendant le TP.

---

# 🧠 Notions clés travaillées pendant le TP

* Organisation d’un projet Front-End
* Navigation entre pages
* DOM avancé
* Stockage côté navigateur
* Vision Full Stack

---

# 🟦 EXERCICE 6 — Transition vers une vraie base de données (BONUS)

## 🎯 Objectif

Remplacer le stockage local (LocalStorage / SessionStorage / Cookies) par une **vraie base de données**.

---

## 🧩 Travail demandé (BONUS)

* On va aller créer un Cluster sur ATLAS ( AWS ou Azure peu importe ), récuperer l'API KEY pour l'utiser sur mongoose afin de manipuler votre BDD.
* utiliser **Mongoose** pour :

  * créer des modèles (User, Game, Score)
  * enregistrer les utilisateurs
  * enregistrer les scores

📌 Principe clé :

> Ce qui était stocké dans le navigateur sera désormais stocké sur le serveur.
> Quand on arrivera a cette etape, vous aurez déja vu en TD comment lancer un serveur Node Js et comment utiliser mongoose et mongodb, ne vous en faites en pas :) 

---

# 🟨 BONUS AVANCÉ — Connexion avec Google

## 🎯 Objectif

Mettre en place une **authentification avec Google**.

⚠️ Ce bonus sera **expliqué et réalisé uniquement en fin de module**.

---

## 🧩 Principe général (sans implémentation immédiate)

* création d’un projet sur **Google Cloud Console**
* activation des **API Google Identity / OAuth 2.0**
* récupération d’un `client_id`
* intégration d’un bouton "Se connecter avec Google"
* vérification du token côté backend

👉 Cette partie nécessite :

* Node.js
* Express
* compréhension des API

---

# 🟪 ÉTAPE FINALE — Déploiement de l’application

## 🎯 Objectif

Déployer l’application complète **Front-End + Back-End**.

---

## 🧩 Déploiement attendu

* Front-End : **Vercel**
* Back-End (Node.js / Express) : **Vercel**
* connexion Front ↔ Back via `fetch`

📌 Cette étape sera **expliquée et réalisée progressivement lors des séances de TD** dédiées à Node.js.

---

# 🧠 Vision pédagogique finale

Cette application suit une **progression professionnelle réelle** :

1. Stockage local (navigateur)
2. Backend Node.js / Express
3. Base de données MongoDB
4. Déploiement cloud


---

## 🏁 Message pédagogique final

Le but n’est pas seulement de faire fonctionner un jeu.

Le but est de comprendre **comment construire, structurer, stocker et déployer une application web complète**.

---

**Othman MEKOUAR**
Chargé de TD/TP — Application Web — MIAGE
