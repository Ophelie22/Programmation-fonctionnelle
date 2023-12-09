/*

Chacun son tour
===============

Un intégrateur nous a gentiment préparé des div en `display: none`. 
C'est à nous de les afficher en JS.

Objectifs
---------
- Cibler les div avec la classe CSS `.box`
- Afficher les div une à une avec 1 seconde entre chaque

Notions
-------
- DOM : document.querySelectorAll ou getElementsByClassName
- JS : for ou forEach / setTimeout

*/

// étapes :
// - récupérer les divs
// - boucler sur les divs pour les afficher
// - attendre une seconde entre l'affichage de chaque div

const allBox = document.querySelectorAll('.box');

// affichage de toutes les divs tout de suite
// allBox.forEach((element) => {
//   element.style.display = 'block';
// });

// setTimeout(callback, delay) => exécute la callback au bout de "délai" millisecondes
// const afficherCoucou = () => {
//   console.log('coucou');
// };

// // appelle "afficheCoucou" au bout d'une seconde
// setTimeout(afficherCoucou, 1000);

// afficher toutes les divs au bout d'une seconde
// allBox.forEach((element) => {
//   setTimeout(() => {
//     element.style.display = 'block';
//   }, 1000);
// });

// forEach : deuxième argument optionnel pour la callback, si on l'indique il recevra
// l'index de l'élément courant dans le tableau
// objectif : timer d'une seconde pour la première div, de 2 secondes pour la 2eme, etc
// allBox.forEach((element, index) => {
//   // console.log(`index=${index}`);
//   setTimeout(() => {
//     element.style.display = 'block';
//   }, 1000 * (index + 1));
//   // index commence à 0, et je veux que le timer du premier élément soit 1000 =>
//   // je vais utiliser index+1
// });


// getElementsByClassName => retourne quelque chose qui n'est pas vraiment un tableau,
// on ne peut pas utiliser forEach, il faut utiliser for

//for (var index = 0; index < allBox.length; index++) {
// var => une seule variable qui s'appelle index
// donc après avoir exécuté le forEach et programmé tous les timers, index vaut 9,
// donc quand le traitement des timers s'exécute BOUM (accès à l'index 9 du tableau)

// avec let, c'est un peu comme si on avait une variable pour chaque tour de boucle
// donc au moment d'exécuter le traitement différé on a bien la bonne valeur
for (let index = 0; index < allBox.length; index++) {
  // permet de placer un point d'arrêt, Chrome va s'arrêter à cette ligne et on
  // pourra explorer les variables 
  // debugger;
  setTimeout(() => {
    console.log(index);
    allBox[index].style.display = 'block';
  }, 1000 * (index + 1));
}