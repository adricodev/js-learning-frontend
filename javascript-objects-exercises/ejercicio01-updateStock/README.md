# Ejercicio 01 — updateStock

## Contexto

Estás creando la lógica para el panel de gestión de stock de una tienda online. Cada producto se representa como un objeto con sus propiedades y cantidades.

## Objeto de ejemplo

```js
const product = {
  id: 101,
  name: "Teclado Mecánico",
  stock: 15,
  isAvailable: true
};
```

## Objetivo

Escribe una función llamada `updateStock` que reciba dos argumentos:

- `productObj`: el objeto del producto.
- `quantitySold`: un número que indica cuántas unidades se han vendido.

## Requisitos

- La función debe restar la cantidad vendida a la propiedad `stock` actual del producto.
- Si el stock resultante es 0 o menor, la propiedad `isAvailable` debe cambiar automáticamente a `false` (y el stock nunca debería quedar en negativo, o debe manejarse adecuadamente según consideres).
- La función debe devolver el objeto actualizado.

---

# Exercise 01 — updateStock

## Context

You are building the logic for the stock management panel of an online store. Each product is represented as an object with its properties and quantities.

## Example object

```js
const product = {
  id: 101,
  name: "Mechanical Keyboard",
  stock: 15,
  isAvailable: true
};
```

## Goal

Write a function called `updateStock` that takes two arguments:

- `productObj`: the product object.
- `quantitySold`: a number indicating how many units have been sold.

## Requirements

- The function must subtract the sold quantity from the product's current `stock` property.
- If the resulting stock is 0 or less, the `isAvailable` property must automatically change to `false` (and the stock should never go negative, or it should be handled appropriately as you see fit).
- The function must return the updated object.
