# React + Vite

Ce modèle fournit une configuration minimale pour faire fonctionner React avec Vite, incluant le HMR (Hot Module Replacement) et quelques règles ESLint.

Actuellement, deux plugins officiels sont disponibles :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utilise [Babel](https://babeljs.io/) pour le Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utilise [SWC](https://swc.rs/) pour le Fast Refresh.

## Étendre la configuration ESLint

Si vous développez une application de production, nous recommandons d'utiliser TypeScript et d'activer les règles de lint basées sur les types. Consultez le [modèle TypeScript](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) pour intégrer TypeScript et [`typescript-eslint`](https://typescript-eslint.io) dans votre projet.

## Fonctionnalités du projet

- **Gestion des tâches** : Ajoutez, modifiez et supprimez des tâches facilement.
- **Interface utilisateur réactive** : Construit avec React pour une expérience utilisateur fluide et rapide.
- **Performance optimisée** : Utilisation de Vite pour un temps de compilation réduit et un développement rapide.
- **Linting et qualité du code** : Intégration d'ESLint pour maintenir un code propre et cohérent.

## Installation et utilisation

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-utilisateur/task-flow-djeff.git
    cd task-flow-djeff
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```

3. Lancez le projet en mode développement :
    ```bash
    npm run dev
    ```

4. Ouvrez votre navigateur à l'adresse suivante :
    ```
    http://localhost:3000
    ```
