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

# Initialisation de l'app

Pour initialiser notre application on va utiliser un outil appelé *vite*

**Creation du projet** : `npm create vite@latest ./ -- -- template react`  
**Installation des packages** :   
                                -  `npm install -D tailwindcss `
                                -  `npx tailwindcss init`
                                -```npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser
                                framer-motion react-router-dom```

