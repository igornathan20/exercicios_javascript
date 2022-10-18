var i,x,a,b;
var tam = prompt("digite o tamanho da matriz");
var numeros=[1,2,3];
var soma = 0;


document.write("hello world");
document.write("<br/>");
document.write("<br/>");
document.write("triangulo");
document.write("<br/>");

for (i=0;i< 7; i++){
    for(x=0;x<=i;x++){
    document.write("#") ;}
    document.write('<br/>')}

document.write("<br/>");   
document.write("xadrez");
document.write("<br/>");


for(i=0;i<tam;i++){
    for(x=0;x<tam;x++){
        if((i+x)%2 == 0){
            document.write("#");}
        else{
            document.write("0");}
        }
        document.write('<br/>')}


document.write("<br/>");   
document.write("soma da array");
document.write("<br/>");     

for(i=0;i<numeros.length;i++){soma= soma+numeros[i]}
document.write(soma)

document.write("<br/>");   
document.write("array reversa");
document.write("<br/>");  

for(i=0;i<numeros.length;i++);
document.write(numeros.reverse());

        
