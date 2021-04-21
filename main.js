// Parcourir un tableau

// Initialisation d'un tableau
let lesGosses = ['Evie', 'Bahia', 'Anys', 'Lola', 'Maël'];

// Dans le tableau lesGosses, pour chacun (méthode forEach) des éléments représenté par leGosse,
// on affiche dans la console chaque élément du tableau grâce à une arrow function (=>)(fonction anonyme)
lesGosses.forEach((leGosse) => {
    console.log(leGosse);
});


// OR boucle for...of pour parcourir toutes les valeurs du tableau :

// On définit une variable à l'intérieur de la boucle qui stocke les différentes valeurs du tableau une à une -->
// la boucle va exécuter son code en boucle jusqu'à arriver à la fin du tableau
/*
for(let leGosse of lesGosses){
    console.log(leGosse);
}
*/


// OR boucle for : 

// On initialise i au départ > puis jusqu'où va i avant de s'arrêter, ici lorsque i < nbr d'élément du tableau
// > puis on incrémente à chaque tour de boucle
/* 
for(i = 0; i < lesGosses.length; i++){
    console.log(lesGosses[i]);
}
*/