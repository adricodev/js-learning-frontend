const product={
    id: 101,
    name: "Teclado mecánico",
    stock: 15,
    isAvailable: true
}

function updateStock(productObj,quantitySold){
    productObj.stock -= quantitySold;
    if(productObj.stock <= 0){
        productObj.isAvailable = false;
    }
    return productObj;
}

console.log(updateStock(product, 15));