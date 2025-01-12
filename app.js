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

let mdp = document.getElementById('mdp');
let mdpErreur = document.getElementById('message_erreur_mdp');

let confirmMdp = document.getElementById('confirm_mdp');
let confirmMdpErreur = document.getElementById('message_erreur_confirm_mdp');

let classErreur = document.getElementsByClassName('erreur');

let success = document.getElementById('message_success');

let erreur = [];
let erreurTypeString = '';
let erreursSansDoublons = [];
let detectionErreur = false;



/**
 * Fonction permettant l'affichage des erreurs liées au nom
 */
function afficherErreurNom() {
    
    if(erreurTypeString.length > 0){
        nomErreur.innerHTML = 
            `
            <p class="erreur">${erreurTypeString}</p>
            `
        detectionErreur = true;
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
        detectionErreur = true;
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
        detectionErreur = true;
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
        detectionErreur = true;
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
        detectionErreur = true;
    } else {
        adresseErreur.innerHTML = 
            `
            <p></p>
            `
    }
}



/**
 * Fonction permettant l'affichage des erreurs liées au mot de passe
 */
function afficherErreurMdp() {
    if(erreurTypeString.length > 0){
        mdpErreur.innerHTML = 
            `
            <p class="erreur">${erreurTypeString}</p>
            `
        detectionErreur = true;
    } else {
        mdpErreur.innerHTML = 
            `
            <p></p>
            `
    }
}



/**
 * Fonction permettant l'affichage des erreurs liées à la confirmation du mot de passe
 */
function afficherErreurConfirmMdp() {
    if(erreurTypeString.length > 0){
        confirmMdpErreur.innerHTML = 
            `
            <p class="erreur">${erreurTypeString}</p>
            `
        detectionErreur = true;
    } else {
        confirmMdpErreur.innerHTML = 
            `
            <p></p>
            `
    }
}


/**
 * Fonction permettant de vérifier si une erreur est présente dans le formulaire. Si oui, le formulaire n'est pas soumit, si non, il l'est
 */
function erreurQuelquePart() {
    if (classErreur[0] == undefined) {
        success.innerHTML = 
            `
            <p id="success">Votre formulaire a bien été transmit</p>
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

    verificationsMdp();
    afficherErreurMdp();
    refreshErreur();

    verificationsConfirmMdp();
    afficherErreurConfirmMdp();
    refreshErreur();

    erreurQuelquePart();
    
})



/**
 * Function permettant de vérifier différents critères lors de la saisie de la partie "Prénom"
 */
function verificationsNom() {


    if (nom.value.trim().length < 5 || nom.value.trim().length > 15){
        erreur.push('Votre nom doit contenir entre 5 et 15 caractères');
    }

    if (/\d/.test(nom.value.trim())) {
        erreur.push('Votre nom ne doit pas contenir de chiffres');
    }
        
        erreursSansDoublons = [...new Set(erreur)];
        erreurTypeString = erreursSansDoublons.toString();

}



/**
 * Function permettant de vérifier différents critères lors de la saisie de la partie "Prénom"
 */
function verificationsPrenom() {


    if (prenom.value.trim().length < 5 || prenom.value.trim().length > 15){
        erreur.push('Votre prénom doit contenir entre 5 et 15 caractères');
    }

    if (/\d/.test(prenom.value.trim())) {
        erreur.push('Votre prénom ne doit pas contenir de chiffres');
    }
        
        erreursSansDoublons = [...new Set(erreur)];
        erreurTypeString = erreursSansDoublons.toString();

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



/**
 * Function permettant de vérifier différents critères lors de la saisie de la partie "Mot de passe"
 */
function verificationsMdp() {

    if (mdp.value.length < 8) {
        erreur.push("Le mot de passe doit contenir au moins 8 caractères");
    }

    erreursSansDoublons = [...new Set(erreur)];
    erreurTypeString = erreursSansDoublons.toString();
}



/**
 * Function permettant de vérifier différents critères lors de la saisie de la partie "Confirmation mot de passe"
 */
function verificationsConfirmMdp() {

    if (confirmMdp.value.length < 8) {
        erreur.push("Le mot de passe doit contenir au moins 8 caractères");
    }

    if (confirmMdp.value !== mdp.value) {
        erreur.push("La confirmation du mot de passe doit être identique au mot de passe");
    }

    erreursSansDoublons = [...new Set(erreur)];
    erreurTypeString = erreursSansDoublons.toString();
}