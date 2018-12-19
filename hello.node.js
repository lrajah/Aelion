/**
 * @name hello.node
 * @description Juste pour les algorithmes
 * @author Aélion - Déc. 2018
 * @version 1.0.1
 * Hello
 */

/**
 * Retourne la valeur min entre 2 valeurs
 * private int min(int currentValue, int value)
 * @param {*} currentValue Valeur min courante
 * @param {*} value Valeur lue dans le tableau
 * @returns La valeur la plus faible entre currentValue et value
 */

function min(currentValue, value) {

    if (value > currentValue) {
        return currentValue
    }
    else {
        return value;
    }

}

/**
* Retourne la valeur maximum entre 2 valeurs
* private int max(int currentValue, int value)
* @param {*} currentValue Valeur max courante
* @param {*} value Valeur lue dans le tableau
* @param {*} decide Si = 1 calcule le max si =0 le min
* @returns La valeur la plus élevée entre currentValue et value
*/
function max(currentValue, value) {

    if (value > currentValue) {
        return value;
    }
    else {
        return currentValue;
    }

}


/**
 * Retourne la valeur maximum entre 2 valeurs
 * private int maxOrMin(int currentValue, int value, boolean decide = true)
 * @param {*} currentValue Valeur max courante
 * @param {*} value Valeur lue dans le tableau
 * @param {*} decide Si = 1 calcule le max si =0 le min
 * @returns Retourne le max ou le min
 */
function maxOrMin(currentValue, value, decide = true) {

    if (decide) return max(currentValue, value);
    else return min(currentValue, value);

}


// Création d'une table
/**
 * @var array
 * Tableau de nombres entiers
 */
const tab = [25, 50, 256, 312, 3, 22, 8];
var tab2 = new Array(7);

/**
 * Définition des variables
 */
let sum = 0;
let maxi = tab[0];
let mini = tab[0];
// Boucle de parcours du tableau
for (let i = 0; i < tab.length; i++) {
    console.log('Indice ' + i + ' => ' + tab[i]);
    /*  if (tab[i] % 2 == 0) {
         console.log('Nombre paire: ' + tab[i]);
     }
     else console.log('Nombre impaire: ' + tab[i]);
      */
    //Calcule la somme
    sum += tab[i];
    // Calcule le max
    maxi = maxOrMin(maxi, tab[i]);
    mini = maxOrMin(mini, tab[i], 0);

}
console.log('La somme est: ' + sum + ', le max est: ' + maxi + ', le min est ' + mini);

/* let indice=0;
var tab2=[];
let minTmp=tab[0];
while(tab.length>0){
    mini=tab[0];
    minTmp=tab[0];
    indice=0;
    for (let i = 0; i < tab.length; i++) {
        mini=maxOrMin(mini,tab[i],0);
        if(mini!=minTmp){
            indice=i;
            minTmp=mini;
        }
        
    }
    //console.log('Indice ' + indice + ' => ' + tab.length);
    tab2.push(mini);
    tab.splice(indice,1);
} */

let change = 1;
let j = 0;
while (change) {
    change = 0;
    for (let i = 1; i < tab.length - j; i++) {
        if (tab[i - 1] > tab[i]) {
            let tmp = tab[i - 1];
            //console.log('Indice ' + i + ' => ' +tmp);
            tab[i - 1] = tab[i];
            tab[i] = tmp;
            change = 1;
        }
    }
    j++;
}
for (let i = 0; i < tab.length; i++) {
    console.log('Indice ' + i + ' => ' + tab[i]);
}

