# Ejercicio 03 — addSong

## Contexto

Estás construyendo la lógica de una aplicación de música. Cada playlist se representa como un objeto que contiene un título, un creador y un array con las canciones que la forman.

## Objeto de ejemplo

```js
const playlist = {
  title: "Rock clásico",
  creator: "Ana",
  songs: ["Bohemian Rhapsody", "Hotel California", "Stairway to Heaven"]
};
```

## Objetivo

Crea un objeto que represente una playlist musical y una función llamada `addSong` que reciba dos parámetros:

- `playlistObj`: el objeto de la playlist.
- `songTitle`: el título de la nueva canción que se quiere añadir.

## Requisitos

- El objeto debe tener al menos tres propiedades: un título (`title`), un creador (`creator`) y un array de canciones (`songs`) con un par de títulos iniciales en formato texto.
- La función debe añadir esa nueva canción al final del array de canciones del objeto y devolver el objeto actualizado (recuerda el método de arrays que sirve para añadir elementos al final).
- Haz una prueba con un `console.log()` al final para comprobar que funciona al ejecutarlo con Node.js.

---

# Exercise 03 — addSong

## Context

You are building the logic for a music application. Each playlist is represented as an object that contains a title, a creator and an array with the songs that make it up.

## Example object

```js
const playlist = {
  title: "Classic Rock",
  creator: "Ana",
  songs: ["Bohemian Rhapsody", "Hotel California", "Stairway to Heaven"]
};
```

## Goal

Create an object that represents a music playlist and a function called `addSong` that takes two parameters:

- `playlistObj`: the playlist object.
- `songTitle`: the title of the new song to be added.

## Requirements

- The object must have at least three properties: a title (`title`), a creator (`creator`) and an array of songs (`songs`) with a couple of initial titles as text.
- The function must add that new song to the end of the object's songs array and return the updated object (remember the array method used to add elements to the end).
- Add a test with a `console.log()` at the end to check that it works when run with Node.js.
