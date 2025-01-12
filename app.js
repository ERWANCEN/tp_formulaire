"use strict";

let bouton = document.getElementById('bouton');

let nom = document.getElementById('nom');
let nomErreur = document.getElementById('message_erreur_nom');

let prenom = document.getElementById('prenom');
let prenomErreur = document.getElementById('message_erreur_prenom');

let email = document.getElementById('email');
let emailErreur = document.getElementById('message_erreur_email');

let erreur = [];
let erreurTypeString = '';
let erreursSansDoublons = [];



/**
 * Fonction permettant l'affichage des erreurs liées au nom
 */
function afficherErreurNom() {
    console.log('ccc');
    
    if(erreurTypeString.length > 0){
        console.log('ddd');
        
        nomErreur.innerHTML = 
            `
            <p class="erreur">${erreurTypeString}</p>
            `
    } else {
        console.log('eee');
        
        nomErreur.innerHTML = 
            `
            <p></p>
            `
    }
}



/**
 * Fonction permettant l'affichage des erreurs liées au prénom
 */
function afficherErreurPrenom() {
    if(erreurTypeString.length > 0){
        prenomErreur.innerHTML = 
            `
            <p class="erreur">${erreurTypeString}</p>
            `
    } else {
        prenomErreur.innerHTML = 
            `
            <p></p>
            `
    }
}



/**
 * Fonction permettant l'affichage des erreurs liées au prénom
 */
function afficherErreurEmail() {
    if(erreurTypeString.length > 0){
        emailErreur.innerHTML = 
            `
            <p class="erreur">${erreurTypeString}</p>
            `
    } else {
        emailErreur.innerHTML = 
            `
            <p></p>
            `
    }
}



/**
 * Fonction permettant d'effacer le tableau erreur entre chaque lecture et affichage de fonction
 */
function refreshErreur() {
    erreur = []
}


/**
 * Ajout d'un écouteur d'évènements qui déclenchera une fonction anonyme lors d'un clique sur le bouton "Envoyer"
 */
bouton.addEventListener('click', (event) => {

    event.preventDefault();

    verificationsNom();
    afficherErreurNom();
    refreshErreur();

    verificationsPrenom();
    afficherErreurPrenom();
    refreshErreur();

    verificationsEmail();
    afficherErreurEmail();
    refreshErreur();
    
})



/**
 * Function permettant de vérifier différents critères lors de la saisie de la partie "Nom"
 */
function verificationsNom() {

    switch (true) {
        case (nom.value.trim().length < 5 || nom.value.trim().length > 15):
            erreur.push('Votre nom doit comprendre entre 5 et 15 caractères');
            // console.log(erreur);
            if (nom.value.trim().length > 0) {
                for (let i = 0; i < nom.value.length; i++) {
                    
    
                    if (nom.value[i] == 0 || nom.value[i] == 1 || nom.value[i] == 2 || nom.value[i] == 3 || nom.value[i] == 4 || nom.value[i] == 5 || nom.value[i] == 6 || nom.value[i] == 7 || nom.value[i] == 8 || nom.value[i] == 9) {

                        erreur.push(' Votre nom ne doit pas comporter de chiffres');
                        // console.log(erreur);
                        
                    }
                    
                }
            }
            erreursSansDoublons = [...new Set(erreur)];
            // console.log(erreursSansDoublons);
            erreurTypeString = erreursSansDoublons.toString();
            // console.log(erreurTypeString);
            break;

        case (nom.value.trim().length >= 5 || nom.value.trim().length <= 15):

            for (let i = 0; i < nom.value.length; i++) {

                if (nom.value[i] == '0' || nom.value[i] == '1' || nom.value[i] == '2' || nom.value[i] == '3' || nom.value[i] == '4' || nom.value[i] == '5' || nom.value[i] == '6' || nom.value[i] == '7' || nom.value[i] == '8' || nom.value[i] == '9') {

                    erreur.push('Votre nom ne doit pas comporter de chiffres');
                    // console.log(erreur);
                    
                }
                
            }
            erreursSansDoublons = [...new Set(erreur)];
            erreurTypeString = erreursSansDoublons.toString();
            // console.log(erreurTypeString);
            break;
        
        default:
            erreur.push('Une erreur est survenue lors de la saisie de votre nom, merci de réecrir votre nom');

            erreursSansDoublons = [...new Set(erreur)];
            erreurTypeString = erreursSansDoublons.toString();
            // console.log(erreurTypeString);
            break;
    }

}


/**
 * Function permettant de vérifier différents critères lors de la saisie de la partie "Prénom"
 */
function verificationsPrenom() {
    console.log('coucouuu');

    switch (true) {
        case (prenom.value.trim().length < 5 || prenom.value.trim().length > 15):
            erreur.push('Votre prénom doit comprendre entre 5 et 15 caractères');
            // console.log(erreur);
            if (prenom.value.trim().length > 0) {
                for (let i = 0; i < prenom.value.length; i++) {
                    
    
                    if (prenom.value[i] == 0 || prenom.value[i] == 1 || prenom.value[i] == 2 || prenom.value[i] == 3 || prenom.value[i] == 4 || prenom.value[i] == 5 || prenom.value[i] == 6 || prenom.value[i] == 7 || prenom.value[i] == 8 || prenom.value[i] == 9) {

                        erreur.push(' Votre prénom ne doit pas comporter de chiffres');
                        // console.log(erreur);
                        
                    }
                    
                }
            }
            erreursSansDoublons = [...new Set(erreur)];
            // console.log(erreursSansDoublons);
            erreurTypeString = erreursSansDoublons.toString();
            // console.log(erreurTypeString);
            break;

        case (prenom.value.trim().length >= 5 || prenom.value.trim().length <= 15):

            for (let i = 0; i < prenom.value.length; i++) {

                if (prenom.value[i] == '0' || prenom.value[i] == '1' || prenom.value[i] == '2' || prenom.value[i] == '3' || prenom.value[i] == '4' || prenom.value[i] == '5' || prenom.value[i] == '6' || prenom.value[i] == '7' || prenom.value[i] == '8' || prenom.value[i] == '9') {

                    erreur.push('Votre prénom ne doit pas comporter de chiffres');
                    // console.log(erreur);
                    
                }
                
            }
            erreursSansDoublons = [...new Set(erreur)];
            erreurTypeString = erreursSansDoublons.toString();
            // console.log(erreurTypeString);
            break;
        
        default:
            erreur.push('Une erreur est survenue lors de la saisie de votre prénom, merci de réécrie votre prénom');
            
            erreursSansDoublons = [...new Set(erreur)];
            erreurTypeString = erreursSansDoublons.toString();
            // console.log(erreurTypeString);
            break;
    }
}



// function verificationFormatEmail(email) {
//     const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     // return regex.test(email);
//     console.log(regex.test(email));
    
    
// }


function verificationsEmail() {

    // Les emails bannis sont les plus utilisés, mais l'utilisation d'APIs par la suite pour gérer ça sera recommandé
    const emailsBannis = [
        '10minutemail.com',
        'mailinator.com',
        'tempmail.com',
        'yopmail.com',
        'dispostable.com',
        'trashmail.com'
    ]

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email.value)) {

        erreur.push('L\'email que vous avez entré est invalide');

    } else {

        let domaine = email.value.split('@')[1];

        if (emailsBannis.includes(domaine)) {
            erreur.push('Les emails provenant de ce domaine sont interdits');

        }
    }

    erreursSansDoublons = [...new Set(erreur)];
    erreurTypeString = erreursSansDoublons.toString();

}