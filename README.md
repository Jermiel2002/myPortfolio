# Portfolio explication

C'est plus facile lorsqu'on a compris quelques concept liés à la camera, l'éclairage et la geometrie.

Durant la création de ce site web, j'ai aussi appris à utiliser 
  1. une librairie graphique 3D (threejs)
  2. une librairie particulière pour threejs dans react (react three fiber)
  3. tailwindcss un framework css populaire, axé sur l'utilité d'abord
  
  > tailwind CSS est un framework CSS open source. La principale caractéristique de cette bibliothèque est que, contrairement à d’autres frameworks CSS comme Bootstrap,       > elle ne fournit pas une série de classes prédéfinies pour des éléments tels que des boutons ou des tables. Au lieu de cela, il crée une liste de classes CSS «             > utilitaires » qui peuvent être utilisées pour styliser chaque élément en mélangeant et en faisant correspondre.
      
  4. Framer Motion, une bibliothèque d'animation populaire pour les applications React qui fournit une API simple et intuitive pour créer des animations époustouflantes

  J'ai aussi appris:
  + comment charger, créer et personnaliser des modèles 3D et des géométries époustouflants à l'aide de différentes lumières
  +  comprendre le monde 3D avec la caméra et le positionnement d'un objet dans l'espace
  +  rendre notre code réutilisable, scalable avec des composants d'odre supérieurs et les meilleurs pratiques de l'industrie
  + implémenter l'envoie d'email depuis notre site web avec Email js et assurer la responsivité de mon site web

---

# Initialisation de l'app et mise en place des dossiers et fichiers nécessaires

Pour initialiser notre application on va utiliser un outil appelé *vite*

**Creation du projet** : `npm create vite@latest ./ -- -- template react`  

**Installation des packages** :   
                                1. `npm install -D tailwindcss `  
                                2. `npx tailwindcss init`  
                                3. ```npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser
                                framer-motion react-router-dom```
                                4. `npm install --legacy-peer-deps -D postcss autoprefixer`
                                
**Dossiers et fichiers nécessaires** :  
+ un dossier *public* contenant les modèles 3d (bureau d'ordianteur et planète)
+ un dossier *assets* qui contient tous les images et icônes pour notre application
+ un dossier *components* qui contient tous les composants de notre site web
+ On supprime le fichier `App.css` et on modifie le fichier `App.js` fournit par vite:
  > ```
  > const App = () => {
  > return (
  >   <div>
  >     3D Developper Portfolio
  >   <div>
  > )
  > export default App
  > ```
+ on modifie le fichier `index.css` qui contient les gradients, les box-shadows de même que les imports tailwind et l'import des fonts qui seront utilisés
+ on crée un fichier `style.js` où on crée des styles tailwindcss qui nous sera utile pour le *heroHeadText*, *heroSubText*, *sectionHeadText* et *sectionSubText*
+ on configure notre fichier `tailwind.config.cjs` qui va contenir des couleurs qu'on nommera *primary*, *secondary* et *tertiary* , *black-100*, *black-200* et *white-100*  on aura aussi un style *boxShadow*, *screens* et un *backgroundImage*
+ on crée un dossier `utils` dans lequel on crée un fichier `motion.js` qui va contenir quelques animations Framer motion qu'on va utiliser dans notre projet
+ on crée un dossier `constants` et un à l'intérieur un nouveau fichier `index.js` qui va contenir touts les contenus qu'on aura dans notre application (  services, technologies, experiences, testimonials, projects)

---
# Lancement de l'application
`npm run dev`

---
# Creation de la squelette de notre projet dans le fichier `App.jsx`
> ```
> import { BrowserRouter } from 'react-router-dom';
> import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
>
> const App = () => {
>   return (
>     <BrowserRouter>
>      //on met tout le contenu
>     </BrowserRouter>
>   )}
> ```
> + React Router DOM est une bibliothèque JavaScript utilisée avec React pour gérer la navigation dans une application web. Elle permet de créer des routes, de gérer les URL et d'afficher les composants correspondants en fonction de l'URL actuelle.
> + la balise <BrowserRouter> est utilisée pour encapsuler votre application et fournir un contexte de routage. Elle facilite la gestion de l'historique de navigation, des routes et permet à React Router DOM de gérer la navigation de manière efficace et réactive dans votre application React.

---
# Creation de la barre de navigation

> ```
> import React, { useEffect, useState } from 'react';
> import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
>  ```
> on utilise la balise nav pour indiquer qu'il s'agit du menu de navigation et la balise link qui pointe sur le top de notre page
> Si on veut personnalisation la maière dont s'affiche notre page dans son onglet sur le navigateur, on va dans le fichier `index.html` où on renomme le titre et on importe notre logo à l'aide de la balise `<link rel="icon" type="image/svg+xml" href="/logo.svg"` 

---
# Creation de la section Hero
> ```
> import { motion } from 'framer-motion';
> import { styles } from '../styles';
> import { ComputerCanvas } from './canvas';
>  ```
