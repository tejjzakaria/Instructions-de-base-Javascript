// declaration ou reservation des variables en tant que zone memoire dans la ram (random access memory)


var a,b,som,prod,soust,div;  //order envoyee a la memoire pour faire une reservation
// les valeurs 12 et 7.5 sont comme des constantes

//a=12;
//b=57;

// les valeurs doivent etre variables pour l'utilisateur

a=parseFloat(prompt("Entrez la valeur de a :"));
b=parseFloat(prompt("Entrez la valeur de b :"));


// donner l'ordre au cpu au cervau electronique a travers les uals (unite arithmetique et logique)

som=a+b;
prod=a*b;
soust=a-b;
div=a/b;

// le programme donne l'ordre aux peripheriques de sortie imprimante ou ecran ou autre

console.log("a :"+" "+a);
console.log("b :"+" "+b);
console.log("som :"+" "+som);
console.log("prod :"+" "+prod);
console.log("soust :"+" "+soust);
console.log("div :"+" "+div.toPrecision(2));

//Bitage des variables declarees ou reservees dans la memoire

console.log("bitage de a en binaire :"+" "+a.toString(2));
console.log("bitage de b en binaire :"+" "+b.toString(2));
console.log("bitage de som en binaire :"+" "+som.toString(2));
console.log("probitage de prod en binaired :"+" "+prod.toString(2));
console.log("bitage de soust en binaire :"+" "+soust.toString(2));
console.log("bitage de div en binaire :"+" "+div.toString(2));

// savoir le type des donees qui ete affecte aux variables

console.log("a :("+typeof(a)+")"+" "+a);
console.log("b :("+typeof(b)+")"+" "+b);
console.log("som :("+typeof(som)+")"+" "+som);
console.log("prod :("+typeof(prod)+")"+" "+prod);
console.log("soust :("+typeof(soust)+")"+" "+soust);
console.log("div :("+typeof(div)+")"+" "+div);

//affichage des resultats dans la page HTML

document.writeln("a = "+" "+a+'<br><br>');
document.writeln("b = "+" "+b+'<br><br>');
document.writeln("som = "+" "+som+'<br><br>');
document.writeln("prod = "+" "+prod+'<br><br>');
document.writeln("soust = "+" "+soust+'<br><br>');
document.writeln("div = "+" "+div.toPrecision(2));

// hexadecimal

//Bitage des variables declarees ou reservees dans la memoire hexadecimal

console.log("bitage de a en hexadecimal :"+" "+a.toString(16));
console.log("bitage de b en hexadecimal :"+" "+b.toString(16));
console.log("bitage de som en hexadecimal :"+" "+som.toString(16));
console.log("probitage de prod en hexadecimal :"+" "+prod.toString(16));
console.log("bitage de soust en hexadecimal :"+" "+soust.toString(16));
console.log("bitage de div en hexadecimal :"+" "+div.toString(16));

// octal

//Bitage des variables declarees ou reservees dans la memoire octal

console.log("bitage de a en octal :"+" "+a.toString(8));
console.log("bitage de b en octal :"+" "+b.toString(8));
console.log("bitage de som en octal :"+" "+som.toString(8));
console.log("probitage de prod en octal :"+" "+prod.toString(8));
console.log("bitage de soust en octal :"+" "+soust.toString(8));
console.log("bitage de div en octal :"+" "+div.toString(8));