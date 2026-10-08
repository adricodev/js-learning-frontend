const librarySection = {
  sectionName: "Ficción",
  capacity: 50,
  books: ["El Quijote", "1984", "Cien años de soledad", "Fahrenheit 451"]
};

function hasBook(sectionObj,bookTitle){
    return sectionObj.books.includes(bookTitle);
}



console.log(hasBook(librarySection, "1984"));
console.log(hasBook(librarySection, "El Principito"));
