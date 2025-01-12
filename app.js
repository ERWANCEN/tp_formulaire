"use strict";

let bouton = document.getElementById('bouton');

let nom = document.getElementById('nom');
let nomErreur = document.getElementById('message_erreur_nom');

let prenom = document.getElementById('prenom');
let prenomErreur = document.getElementById('message_erreur_prenom');

let email = document.getElementById('email');
let emailErreur = document.getElementById('message_erreur_email');

let date = document.getElementById('date');
let dateErreur = document.getElementById('message_erreur_date');

let adresse = document.getElementById('adresse');
let adresseErreur = document.getElementById('message_erreur_adresse');

let erreur = [];
let erreurTypeString = '';
let erreursSansDoublons = [];



/**
 * Fonction permettant l'affichage des erreurs liées au nom
 */
function afficherErreurNom() {
    
    if(erreurTypeString.length > 0){
        nomErreur.innerHTML = 
            `
            <p class="erreur">${erreurTypeString}</p>
            `
    } else {
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
 * Fonction permettant l'affichage des erreurs liées au email
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
 * Fonction permettant l'affichage des erreurs liées à la date
 */
function afficherErreurDate() {
    if(erreurTypeString.length > 0){
        dateErreur.innerHTML = 
            `
            <p class="erreur">${erreurTypeString}</p>
            `
    } else {
        dateErreur.innerHTML = 
            `
            <p></p>
            `
    }
}



/**
 * Fonction permettant l'affichage des erreurs liées à l'adresse
 */
function afficherErreurAdresse() {
    if(erreurTypeString.length > 0){
        adresseErreur.innerHTML = 
            `
            <p class="erreur">${erreurTypeString}</p>
            `
    } else {
        adresseErreur.innerHTML = 
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

    verificationsDate();
    afficherErreurDate();
    refreshErreur();

    verificationsAdresse();
    afficherErreurAdresse();
    refreshErreur();
    
})



/**
 * Function permettant de vérifier différents critères lors de la saisie de la partie "Nom"
 */
function verificationsNom() {

    switch (true) {
        case (nom.value.trim().length < 5 || nom.value.trim().length > 15):
            erreur.push('Votre nom doit contenir entre 5 et 15 caractères');
            // console.log(erreur);
            if (nom.value.trim().length > 0) {
                for (let i = 0; i < nom.value.length; i++) {
    
                    if (nom.value[i] == 0 || nom.value[i] == 1 || nom.value[i] == 2 || nom.value[i] == 3 || nom.value[i] == 4 || nom.value[i] == 5 || nom.value[i] == 6 || nom.value[i] == 7 || nom.value[i] == 8 || nom.value[i] == 9) {

                        erreur.push(' Votre nom ne doit pas contenir de chiffres');
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

                    erreur.push('Votre nom ne doit pas contenir de chiffres');
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
            erreur.push('Votre prénom doit contenir entre 5 et 15 caractères');
            // console.log(erreur);
            if (prenom.value.trim().length > 0) {
                for (let i = 0; i < prenom.value.length; i++) {
                    
    
                    if (prenom.value[i] == 0 || prenom.value[i] == 1 || prenom.value[i] == 2 || prenom.value[i] == 3 || prenom.value[i] == 4 || prenom.value[i] == 5 || prenom.value[i] == 6 || prenom.value[i] == 7 || prenom.value[i] == 8 || prenom.value[i] == 9) {

                        erreur.push(' Votre prénom ne doit pas contenir de chiffres');
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

                    erreur.push('Votre prénom ne doit pas contenir de chiffres');
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



/**
 * Function permettant de vérifier différents critères lors de la saisie de la partie "Email"
 */
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
            erreur.push('Les emails provenant de ce domaine sont interdites');

        }
    }

    erreursSansDoublons = [...new Set(erreur)];
    erreurTypeString = erreursSansDoublons.toString();

}



/**
 * Function permettant de vérifier différents critères lors de la saisie de la partie "Date"
 */
function verificationsDate() {

    console.log(date.valueAsDate);
    console.log(date.value);

    if (date.valueAsDate == null) {
        erreur.push('Veuillez sélectionner une date');
    } else {
        let dateAjd = new Date();
        if(dateAjd < date.valueAsDate){
            erreur.push('Une date de naissance ne peut pas être ultérieure au jour même');
        }
    }
    
    erreursSansDoublons = [...new Set(erreur)];
    erreurTypeString = erreursSansDoublons.toString();
}



/**
 * Function permettant de vérifier différents critères lors de la saisie de la partie "Adresse"
 */
function verificationsAdresse() {
    
    if (adresse.value.length < 5 || adresse.value.length > 200) {
        erreur.push("L'adresse doit contenir entre 5 et 200 caractères");
        console.log('longueur')
    }

    if (!/[a-zA-Z]/.test(adresse.value)) {
        erreur.push("L'adresse doit contenir au moins une lettre");
        console.log('lettres');
        
    }
            
    if (!/\d/.test(adresse.value)) {
        erreur.push("L'adresse doit contenir au moins un chiffre");
        console.log('chiffre');
        
    }

    if (/[^a-zA-Z0-9\s,.'\-]/.test(adresse.value)){ // caractères valides : a-zA-Z / 0-9 /   / , / . / ' / - 
        erreur.push("L'adresse contient des caractères non valides");
        console.log('caractères');
        
    }
    
    erreursSansDoublons = [...new Set(erreur)];
    erreurTypeString = erreursSansDoublons.toString();
}