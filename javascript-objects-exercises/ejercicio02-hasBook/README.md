# Ejercicio 02 — hasBook

## Contexto

Estás gestionando el catálogo de una pequeña biblioteca digital. La biblioteca se representa como un objeto que contiene el nombre de la sección y un listado de libros disponibles en un array.

## Objeto de ejemplo

```js
const librarySection = {
  sectionName: "Ficción",
  capacity: 50,
  books: ["El Quijote", "1984", "Cien años de soledad", "Fahrenheit 451"]
};
```

## Objetivo

Escribe una función llamada `hasBook` que reciba dos argumentos:

- `sectionObj`: el objeto de la sección de la biblioteca.
- `bookTitle`: una cadena de texto con el título del libro que se quiere buscar.

## Requisitos

- La función debe comprobar si el libro pasado por parámetro se encuentra dentro del array `books` de ese objeto.
- Debe devolver `true` si el libro está en la lista, o `false` en caso contrario. (Pista: investiga si JavaScript tiene algún método de arrays que sirva exactamente para comprobar si un elemento existe dentro de un array).

---

# Exercise 02 — hasBook

## Context

You are managing the catalog of a small digital library. The library is represented as an object that contains the section name and a list of available books in an array.

## Example object

```js
const librarySection = {
  sectionName: "Fiction",
  capacity: 50,
  books: ["Don Quixote", "1984", "One Hundred Years of Solitude", "Fahrenheit 451"]
};
```

## Goal

Write a function called `hasBook` that takes two arguments:

- `sectionObj`: the library section object.
- `bookTitle`: a string with the title of the book to search for.

## Requirements

- The function must check whether the book passed as a parameter is inside the `books` array of that object.
- It must return `true` if the book is in the list, or `false` otherwise. (Hint: look into whether JavaScript has an array method that does exactly this to check if an element exists inside an array).
