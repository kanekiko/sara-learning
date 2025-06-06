## Cheat Sheet - Programme d'Apprentissage JavaScript

**Ce que nous avons couvert :**

* **Les bases du langage :**
    * **Variables (`let`, `const`) :**
        * `let`: Déclare une variable. La valeur peut être réassignée. Portée de bloc.
        * `const`: Déclare une constante. La valeur ne peut pas être réassignée après l'initialisation. Portée de bloc.
    * **Types de données primitifs :**
        * `number`: Nombres entiers ou à virgule flottante (ex: `10`, `3.14`).
        * `string`: Séquence de caractères (texte) entourée de guillemets simples (`'`) ou doubles (`"`).
        * `boolean`: Valeur logique (`true` ou `false`).
        * `null`: Absence intentionnelle de valeur.
        * `undefined`: Variable déclarée mais n'ayant pas reçu de valeur.
    * **Interactions utilisateur :**
        * `alert(message)`: Affiche une boîte de dialogue avec un message.
        * `prompt(message, [default])`: Affiche une boîte de dialogue pour obtenir une entrée de l'utilisateur. Renvoie la chaîne saisie ou `null`.
        * `confirm(message)`: Affiche une boîte de dialogue avec une question et les boutons OK/Annuler. Renvoie `true` ou `false`.
    * **Conversions de types :**
        * **Implicites :** Conversion automatique par JavaScript lors d'opérations.
        * **Explicites :** Utilisation de fonctions pour convertir :
            * `Number(value)`: Convertit en nombre.
            * `String(value)`: Convertit en chaîne.
            * `Boolean(value)`: Convertit en booléen.
        * `typeof value`: Renvoie le type de la valeur sous forme de chaîne.
    * **Opérateurs :**
        * **Arithmétiques :** `+` (addition/concaténation), `-`, `*`, `/`, `%` (modulo), `**` (exponentiation).
        * **D'assignation :** `=` (assignation), `+=`, `-=`, `*=`, `/=`, `%=`, `**=`.
        * **Incrémentation/Décrémentation :** `++`, `--` (préfixe ou suffixe).
        * **De comparaison :** `==`, `!=`, `===` (strictement égal), `!==` (strictement différent), `>`, `<`, `>=`, `<=`.
        * **Logiques :** `&&` (et), `||` (ou), `!` (non).
        * **De coalescence nulle (`??`) :** Renvoie l'opérande de droite si celui de gauche est `null` ou `undefined`.

* **Structures de contrôle et boucles :**
    * **Conditions (`if`/`else`, `switch`) :**
        * `if (condition) { ... } else if (condition2) { ... } else { ... }`
        * `switch (expression) { case valeur1: ... break; case valeur2: ... break; default: ... }`
    * **Boucles (`for`, `while`, `do...while`) :**
        * `for (initialisation; condition; incrementation) { ... }`
        * `while (condition) { ... }`
        * `do { ... } while (condition);`
    * **Instructions de boucle (`break`, `continue`) :**
        * `break`: Sort de la boucle ou du `switch`.
        * `continue`: Passe à l'itération suivante de la boucle.

### Les fonctions :
* **Définition :** Un bloc de code réutilisable conçu pour effectuer une tâche particulière. Elles aident à organiser le code, le rendre plus lisible et éviter la duplication.
* **Syntaxe de définition :**
    \`\`\`javascript
    function nomDeLaFonction(param1, param2, ...) {
      // Instructions à exécuter
      return valeurDeRetour; // Optionnel
    }
    \`\`\`
    * `function` est le mot-clé pour déclarer une fonction.
    * `nomDeLaFonction` est l'identifiant pour appeler la fonction.
    * `(param1, param2, ...)` sont les paramètres (entrées).
    * `return valeurDeRetour;` permet de renvoyer un résultat.
* **Appel d'une fonction :**
    \`\`\`javascript
    let resultat = nomDeLaFonction(argument1, argument2, ...);
    \`\`\`

### Les objets :

* **Définition :** Une collection de propriétés (clé-valeur).
* **Syntaxe de création (littéral) :**
    \`\`\`javascript
    let monObjet = {
      clé1: valeur1,
      clé2: valeur2,
      methode: function() {
        // ...
      }
    };
    \`\`\`
* **Propriétés :** Associations clé (string/Symbol) - valeur.
* **Accès aux propriétés :**
    * Notation point : \`monObjet.clé1\`
    * Notation crochet : \`monObjet\['clé2'\]\`
* **Méthodes :** Fonctions associées à un objet. Utilisation de \`this\`.

### Les Tableaux : 

1.  **Création :**
    * Littéral de tableau : \`\`\`javascript
      let monTableau = [element1, element2];
      \`\`\`
    * Constructeur \`Array\` (moins courant pour les tableaux simples).

2.  **Accès aux éléments :**
    * Via leur index (qui commence à 0) : \`monTableau[0]\`.
    * Si l'index n'existe pas, on obtient \`undefined\`.

3.  **Propriété \`length\` :**
    * Retourne le nombre d'éléments dans le tableau.
    * Est mise à jour dynamiquement.

4.  **Manipulation des éléments :**
    * **Ajouter :**
        * \`push(element)\`: à la fin.
        * \`unshift(element)\`: au début.
        * Affectation à un index : \`monTableau[index] = valeur\`.
    * **Supprimer :**
        * \`pop()\`: de la fin (renvoie l'élément supprimé).
        * \`shift()\`: du début (renvoie l'élément supprimé).
        * \`splice(index, nombreASupprimer, ...elementsAAjouter)\`: à une position spécifique.

5.  **Autres opérations :**
    * \`slice(debut, fin)\`: extrait une portion (nouveau tableau).
    * \`concat(...tableaux)\`: fusionne des tableaux (nouveau tableau).
    * \`join(separateur)\`: transforme en chaîne.
    * \`indexOf(element)\`: trouve la première occurrence (renvoie l'index ou -1).
    * \`lastIndexOf(element)\`: trouve la dernière occurrence.

6.  **Méthodes d'itération :**
    * \`forEach(fonction)\`: exécute une fonction pour chaque élément.
    * \`map(fonction)\`: crée un nouveau tableau en appliquant une fonction.
    * \`filter(fonction)\`: crée un nouveau tableau avec les éléments qui passent un test.
    * \`reduce(fonction, valeurInitiale)\`: réduit le tableau à une seule valeur.




* **Conseils :**
    * Pratique régulière.
    * Consulter la documentation.
    * Explorer des ressources en ligne.
    * Expérimenter avec le code.

---


