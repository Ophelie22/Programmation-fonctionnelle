/*

For Hitch
=========

Utilisons le tableau de chaînes de caractères `items` pour présenter chaque entrée dans le DOM.

Objectifs
---------
- Contruire une liste HTML (avec des <li>)
- Ajouter la liste dans le ul#result déjà présent dans le HTML

Notions
-------
- DOM : document.getElementById / document.createElement / appendChild
- Array : forEach

*/

const items = ['Sunglasses', 'Suit', 'Business card', 'Jet ski'];
//OU avec anonyme autre facon de de faire avec for Each




// récupérer le ul dans le DOM
const ulElement = document.getElementById('result');
// console.log(ulElement);

// pour chaque élément du tableau items
items.forEach(function(item) {
  // console.log(item);

  //   créer un li
  const liElement = document.createElement('li');

  //   placer la valeur dedans
  liElement.textContent = item;

  //   ajouter le li au DOM (dans le ul)
  ulElement.appendChild(liElement);
});

