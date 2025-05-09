"use strict"
/*
 *Exo1 :
 * Demande à l'utilisateur d'entrer son âge en utilisant prompt().
 * Affiche ensuite l'âge qu'il a entré dans une boîte de dialogue alert().
 * Bonus : Essaie de convertir l'âge entré en nombre et affiche l'âge qu'il aura l'année prochaine dans une autre alert().
 */
// let ageUtilisateurStr = prompt("Renseigner votre âge ci-dessous.", "25");
// alert(ageUtilisateurStr);

// let ageUtilisateur = Number(ageUtilisateurStr);
// let ageUtilisateur1 = ageUtilisateur + 1;
// alert(ageUtilisateur1);

/*
 *Exo 2 :
 * Déclare une variable contenant le nombre 10 sous forme de chaîne de caractères (par exemple, "10").
 * Déclare une autre variable contenant le nombre 5 sous forme de nombre (par exemple, 5).
 * Affiche dans la console le résultat de l'addition de ces deux variables. Quel est le résultat ? Pourquoi ?
 * Maintenant, convertis la première variable en nombre et affiche à nouveau le résultat de l'addition.
 * Quel est le nouveau résultat ? Pourquoi ?
*/
// let leNb10Str = "10";
// let leNb5 = 5;
// console.log(leNb10Str + leNb5); //affiche 105 car il y a une concaténation (chaine de carractère + chiffre = string)
// let leNb10 = Number(leNb10Str);
// console.log(leNb10 + leNb5); //affiche 15 car il y a addition

/*
 *Exo 3 :
 * Transforme une boucle for en boucle while
*/
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// let bcl = 1;
// while (bcl <= 5) {
//   console.log(bcl)
//   bcl++;
// }

/*
 *Exo 4 :
 * Écris une boucle (celle de ton choix, for ou while) qui affiche tous les nombres pairs de 0 à 10 inclus.
 * Pense à comment tu peux vérifier si un nombre est pair (l'opérateur modulo % pourrait t'être utile !).
*/
// for (i = 0; i <= 10; i++) {
//   if ((i % 2) === 0) {
//     console.log(i)
//   }
// }

/*
 *Exo 5:
 * Âge futur : Demande l'âge de l'utilisateur avec prompt. Ensuite, affiche dans une alert l'âge qu'il aura dans 10 ans.
*/
// let ageUtilisateurStr = prompt("Renseigner votre âge.");
// let ageUtilisateur = Number(ageUtilisateurStr);
// let ageUtilisateur10Ans = ageUtilisateur + 10;
// alert("Dans 10 ans l'utilisateur aura " + ageUtilisateur10Ans + " ans.");

/*
 *Exo 6:
 * Salutation personnalisée : Demande le prénom de l'utilisateur avec prompt.
 * Affiche une salutation personnalisée dans une alert (par exemple, "Bonjour, [prénom] !").
 * Si l'utilisateur annule, affiche un message générique ("Bonjour !").
*/
// let prenomUtilisateur = prompt("Quel est votre prénom?");
// let prenomAfficher = prenomUtilisateur ?? ""
// alert("Bonjour " + prenomAfficher + "!"); // Bien mais l'énoncé demandait d'afficher un message générique donc if était + adapté
// if (prenomUtilisateur) {
//   alert("Bonjour " + prenomAfficher + "!");
// } else {
//   alert("Bonjour !");
// }

/*
 *Exo 7:
 * Comparaison de nombres : Demande à l'utilisateur d'entrer deux nombres avec deux prompt.
 * Affiche dans une alert si le premier nombre est plus grand, plus petit, ou égal au deuxième.
*/
// let nb1 = Number(prompt("Entrer un premier nombre."));
// let nb2 = Number(prompt("Entrer un deuxième nombre."));
// if (nb1 > nb2) {
//   alert(nb1 + " est plus grand que " + nb2);
// } else if (nb1 < nb2) {
//   alert(nb1 + " est plus petit que " + nb2);
// } else {
//   alert(nb1 + " est égal à " + nb2);
// }

/*
 *Exo 8:
 * Pair ou impair : Demande à l'utilisateur d'entrer un nombre.
 * Utilise une boucle for pour afficher tous les nombres pairs de 0 jusqu'au nombre entré (inclus).
*/
// let nb = Number(prompt("Renseigner un nombre."));
// for (i = 0; i <= nb; i++) {
//   if ((i % 2) === 0) {
//     console.log(i);
//   }
// }


/*
 *Exo 9:
 * Compte à rebours : Écris une boucle while qui compte à rebours de 10 à 1 et affiche chaque nombre dans la console. 
 * Une fois arrivé à 0, affiche "Décollage !".
*/

/*
 *Exo 10:
 * Choix de couleur : Demande à l'utilisateur d'entrer le nom d'une couleur (par exemple, "rouge", "bleu", "vert"). 
 * Utilise une instruction switch pour afficher un message différent pour chaque couleur (par exemple, "Le rouge est une couleur chaude.", "Le bleu est apaisant.", etc.). 
 * Ajoute un cas default pour les couleurs non reconnues.
*/

/*
 *Exo 11:
 * Validation de l'âge (avec do...while): Demande à l'utilisateur d'entrer son âge en utilisant do...while. 
 * Continue de demander jusqu'à ce qu'il entre un nombre positif. Ensuite, affiche l'âge entré.
*/

/*
 *Exo 12:
 * Table de multiplication : Demande à l'utilisateur d'entrer un nombre. 
 * Utilise une boucle for pour afficher la table de multiplication de ce nombre de 1 à 10 (par exemple, si l'utilisateur entre 5, afficher 5x1=5, 5x2=10, ..., 5x10=50).

*/

/*
 *Exo 13:
 * Première lettre : Demande à l'utilisateur d'entrer un mot. Affiche la première lettre de ce mot dans une alert.
*/

/*
 *Exo 14:
 * Vérification de majorité : Demande l'âge de l'utilisateur. 
 * Utilise un opérateur de comparaison et une condition if/else pour afficher s'il est majeur (18 ans ou plus) ou mineur.
*/