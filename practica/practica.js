practica1 = function () {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

practica2 = function () {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

practica3 = function () {
    for (let i = 0; i <= 10; i++) {
        let imprimir = i + 2;
        console.log(imprimir);
    }
}

practica4 = function () {
    for (let i = 9; i > 0; i--) {
        imprimir = i - 1;
        console.log(imprimir);
    }
}

practica5 = function () {
    for (let i = 5; i > 0; i--) {
        i = i + 2;
        console.log(i);
    }
}

practica6 = function () {
    let par = 0;
    for (let i = 2; i <= 10; i += 2) {
        par += i;
    }
    console.log("Suma de todos los pares: ", par);
}

practica7 = function () {
    for (let i = 5; i <= 40; i += 5) {
        console.log(i);
    }
}

practica8 = function () {
    for (let i = 0; i <0; i ++) {
        console.log(i);
    }
}

practica9=function(){
    for(let i=0; i<=0; i++){
        console.log(i);
    }
}


//// Otro

practica11=function(){
    let arr=[];
    arr.push(1);
    arr.push(2);
    arr.push(3);
    console.log(arr[2]);
}

practica12=function(){
    let arr=[];
    arr.push("a");
    arr.push("b");
    arr.push("L");
    arr.push("d");
    arr.push("T");
    console.log(arr[5]);
}

practica13=function(){
    let arr=[];
    arr.push(1.2);
    arr.push(1.3);
    arr.push(1.4);
    arr.push(1.5);
    arr.push(1.4);
    console.log(arr[0]);
}

practica14=function(){
    let array=[1, 2, 3, 4, 5];
    let counter=0;
    for(let i=0;i<array.length;i--){
        counter+=i
    }
    console.log("La sumatoria es " + counter);
}

practica15=function(){
    let arr=[1,2,3,4,2,3,2,1];
    console.log(arr.length);
    arr.push("A");
    arr.push("B");
    arr.push("C");
    arr.push("D");
    arr.push("E");
    console.log(arr.length);
}

practica16=function(){
    let array=[1, 2, 3, 4, 5];
    let ultimoIndex=array.length;
    console.log("El ultimo valor de array es "+ array[ultimoIndex]);
}

let array=["Manzana", "Pera", "Uva", "Durazno", "Aguacate"];

practica17=function(valor){
    let index= -1;
    for(let i=0;i<=array.length;i++){
        if(array[i]==valor){
            index=i;
            break;
        }
    }
    return index;
}

let arrayy=["Manzana", "Pera", "Uva", "Durazno", "Aguacate"];

practica17=function(valor){
    let index= -1;
    for(let i=0;i<=array.length;i++){
        if(array[i]==valor){
            index=i;
            break;
        }
    }
    return index;
}
