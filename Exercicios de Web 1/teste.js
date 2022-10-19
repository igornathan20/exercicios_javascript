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


document.write("<br/>");   
document.write("conta letras na frase exercicio de javascript");
document.write("<br/>");

var letra= prompt("digite uma letra");
var frase = "exercicio de javascript";
var resultado = 0;


function contaletras(frase, letra){
 for(i=0;i<frase.length;i++){
    
    if (frase[i]===letra){ resultado++;}

}
return resultado;
}

document.write(contaletras(frase,letra));



document.write("<br/>");   
document.write("substring");
document.write("<br/>");

var string = prompt("digite uma string");
var posicao = frase.indexOf(string);

document.write(posicao);