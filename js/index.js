/*******************************************************************************
    Bloquer le défilement dans la page lorsque le menu adaptatif est affiché
*******************************************************************************/
/* [À compléter : étape 5b] */
/* Explication détaillée : selon l'état de la case à cocher associée avec le menu
adaptatif (à savoir, cochée ou décochée), on veut bloquer ou débloquer la 
possibilité de défiler la page. Ceci est important car si le menu adaptatif est 
affiché, on ne veut pas que l'utilisateur puisse défiler la page, mais lorsque 
le menu n'est pas affiché, on veut évidement permettre le défilement dans la page 
à nouveau. */

// 1) Saisir la case à cocher qui contrôle le menu adaptatif ...
let ccNavPrincipale = document.querySelector('#cc-nav-principale');

// 2) ... et lui associer un écouteur d'événement.
ccNavPrincipale.addEventListener('click', gererDefilement);

/**
 * 3) Gestionnaire de l'événement
 * Bloque ou débloque la possibilité de défiler dans le document selon l'état de
 * la case à cocher.
 */
function gererDefilement() {
    // Solution 1 (avantage : la barre de défilement reste apparente, ce qui 
    // évite le déplacement visuel du contenu)
    if(ccNavPrincipale.checked == true) {
        document.body.style.position = 'fixed';
    }
    else {
        document.body.style.position = 'static';
    }

    // Solution 2 (désavantage : la barre de défilement est retirée, ce qui 
    // cause un déplacement horizontal visible dans le contenu)
    // if(ccNavPrincipale.checked == true) {
    //     document.body.style.overflow = 'hidden';
    // }
    // else {
    //     document.body.style.overflow = 'scroll';
    // }
}

/*******************************************************************************
    Fermer le menu adaptatif lorsque un de ses items est cliqué
*******************************************************************************/
/* [À compléter : étape 5c] */
/* Explication détaillée : lorsqu'un des items dans le menu adaptatif est cliqué, 
le menu doit alors être "refermé" pour permettre à l'utilisateur de continuer 
à intéragir avec la page. */

// 1) Saisir *TOUS* les items (liens) contenus dans le menu adaptatif ...
let itemsNav = document.querySelectorAll('.nav-principale a');

// 2) ... puis leur associer chacun le même écouteur d'événement
for(let unItem of itemsNav) {
    unItem.addEventListener('click', fermerMenu);
}

/**
 * 3) Gestionnaire de l'événement
 * Simule un clique sur la case à cocher associée à notre menu adaptatif (mais 
 * seulement si elle est actuellement cochée).
 */
function fermerMenu() {
    // Fermer le menu en cliquant programmatiquement une case à cocher cochée
    if(ccNavPrincipale.checked == true) {
        ccNavPrincipale.click();
    }
}