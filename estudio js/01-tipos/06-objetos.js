// personaje de Tv
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
};

console.log(personaje);
console.log(personaje.edad);
console.log(personaje.anime);

personaje.edad = 13;

delete personaje.anime;

console.log(personaje);