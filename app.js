"use strict";

let bouton = document.getElementById('bouton');
let nom = document.getElementById('nom');
let nomErreur = document.getElementById('message_erreur_nom');
let erreur = [];
let erreurTypeString = '';
let erreursSansDoublons = [];

function afficherErreur() {
    if(erreurTypeString.length > 0){
        nomErreur.innerHTML = 
            `
            <p class="erreur">${erreurTypeString}</p>
            `
    }
}

function refreshErreur() {
    erreur = []
}

bouton.addEventListener('click', (event) => {

    event.preventDefault();

    verificationsNom();
    afficherErreur();
    refreshErreur();
    erreurTypeString = '';
    erreursSansDoublons = [];
    
})





function verificationsNom() {

    // if (nom.value.trim().length > 0) {
    //     // let verifierPresenceChiffre = nom.value.split('');
    //     // console.log(verifierPresenceChiffre);

    //     for (let i = 0; i < nom.value.length; i++) {
    //         console.log(nom.value[i]);
            
    //         // return nom.value[i];
    //         // console.log(nom.value[i]);
    //         // console.log(typeof nom.value[i]);
    //         // console.log(typeof parseInt(nom.value[i]));
    //         // console.log(typeof nom.value[i]);
            

    //         // if (typeof parseInt(nom.value[i]) !== 'NaN') {
    //         //     erreur += 'Votre nom ne doit pas comporter de chiffres. ';
    //         // }
            
    //         if (nom.value[i] == 0 || nom.value[i] == 1 || nom.value[i] == 2 || nom.value[i] == 3 || nom.value[i] == 4 || nom.value[i] == 5 || nom.value[i] == 6 || nom.value[i] == 7 || nom.value[i] == 8 || nom.value[i] == 9) {
    //             erreur += 'Votre nom ne doit pas comporter de chiffres. '
    //         }

    //     }
    // }
    

    switch (true) {
        case (nom.value.trim().length < 5):
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

        case (nom.value.trim().length > 15):
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
            erreurTypeString = erreursSansDoublons.toString();
            // console.log(erreurTypeString);
            break;

        case (nom.value.trim().length > 4):

            for (let i = 0; i < nom.value.length; i++) {

                if (nom.value[i] == '0' || nom.value[i] == '1' || nom.value[i] == '2' || nom.value[i] == '3' || nom.value[i] == '4' || nom.value[i] == '5' || nom.value[i] == '6' || nom.value[i] == '7' || nom.value[i] == '8' || nom.value[i] == '9') {
                    erreur.push('Votre nom ne doit pas comporter de chiffres');
                    // console.log(erreur);
                    
                }
                
            }
            erreursSansDoublons = [...new Set(erreur)];
            erreurTypeString = erreursSansDoublons.toString();
            console.log(erreurTypeString);
            break;
    }

}