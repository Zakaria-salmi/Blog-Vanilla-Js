# Blog Vanilla JS avec ViteJS et Sass

Ce projet est une application web de blog développée en utilisant **Vanilla JavaScript**, **ViteJS** pour le bundling, et **Sass** pour le préprocesseur CSS. Il permet aux utilisateurs de créer, modifier et supprimer des articles, tout en offrant une interface utilisateur moderne et responsive.


## Fonctionnalités

-   **Créer des articles** : Permet de rédiger et publier de nouveaux articles.
-   **Modifier des articles** : Possibilité de mettre à jour le contenu des articles existants.
-   **Supprimer des articles** : Les articles peuvent être supprimés de manière permanente.
-   **Topbar réutilisable** : Un menu de navigation présent sur toutes les pages.
-   **Sécurité renforcée** : Le contenu des articles est traité comme du texte brut pour prévenir les injections de code HTML ou JavaScript.

## Technologies utilisées

-   **Vanilla JS** : Pour la logique de l'application.
-   **ViteJS** : Pour un bundling rapide et efficace.
-   **Sass** : Pour un préprocesseur CSS plus puissant et maintenable.

## Installation

Pour configurer ce projet localement, suivez ces étapes :

### Prérequis

-   Node.js et npm installés sur votre machine.

### Étapes

1. **Cloner le dépôt :**

    ```bash
    git clone https://github.com/Zakaria-salmi/Blog-Vanilla-Js.git
    cd votre-repo
    ```

2. **Installer les dépendances :**

    ```bash
    npm install
    ```

3. **Lancer le serveur de développement :**

    ```bash
    npm run dev
    ```

4. **Construire pour la production :**

    Pour générer une version optimisée pour la production, exécutez :

    ```bash
    npm run build
    ```

    Les fichiers seront générés dans le dossier `dist/`.

## Utilisation

1. Ouvrez votre navigateur et allez sur `http://localhost:5173`.
2. Naviguez dans le blog, créez de nouveaux articles, modifiez ou supprimez des articles existants.
3. Le menu de navigation (topbar) est présent sur chaque page pour faciliter la navigation.

## Contribuer

Si vous souhaitez contribuer à ce projet, veuillez forker le dépôt et soumettre une pull request. Pour des changements majeurs, veuillez ouvrir une issue d'abord pour discuter de ce que vous aimeriez changer.

## Remerciements

-   [ViteJS](https://vitejs.dev/) pour le bundling rapide.
-   [Sass](https://sass-lang.com/) pour le préprocesseur CSS.
