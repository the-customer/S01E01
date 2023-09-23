console.warn("LES CONDITIONS");
// console.error("LES CONDITIONS");
// console.info("LES CONDITIONS");
// console.log("LES CONDITIONS");


// Les conditions nous permettent de faire des tests:
// Les reponses possibles sont : oui (true) ou non (false)
//Condition simple:
// // if(contidion){
// // //   ...  
// // }
// //
// const age = prompt('Entez votre age');

// console.log("Vous avez : ",age,"ans");
// if(age >=18){
//     console.log('Vous etes majeur');
// }
// //
// if(age < 18){
//     console.log('Vous etes mineur');
// }

//Conditions alternatives:

const age = prompt('Entez votre age');

console.log("Vous avez : ",age,"ans");
if(age >=18){
    console.log('Vous etes majeur');
    console.log('Vous pouvez voter');
}else{
    console.log('Oust! Vous etes mineur');
}