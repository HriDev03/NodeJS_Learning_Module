"use strict";
/*
   
    Interface TypeScript ka ek powerful feature hai jo humein ek object ke structure (shape) ka "contract"
    banane deta hai. Matlab, hum define kar sakte hain ki kisi object ke paas kaun-kaun se properties (keys) honi chahiye aur unka
    type kya hoga (jaise string, number, etc.).
   
    Ye ensure karta hai ki object sahi format mein
    ho aur galat type ki values use karne par error mile.

    object types , type alias , interfaces

    these days type alias is used but no a days Interfaces come into play

*/
const personn1 = {
    name: "Insaan",
    age: 20
};
function greeet(person) {
    console.log(`Hello ${person.name} You are ${person.age} years old`);
    
}

greeet(personn1);
