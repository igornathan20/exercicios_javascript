var num1 = ""
var num2 = ""
var operacao,result 


document.getElementById('soma').addEventListener("click",function(){operacao=1;});
document.getElementById('subtracao').addEventListener("click",function(){operacao=2;});
document.getElementById('multiplicacao').addEventListener("click",function(){operacao=3;});
document.getElementById('divisao').addEventListener("click",function(){operacao=4;});


function igual(){
  
    num1 = document.getElementById('nr1').value
    num2 = document.getElementById('nr2').value

    num1= parseInt(num1);
    num2= parseInt(num2);
 
    
    switch(operacao){
        case 1:
            result=num1+num2
            break;
        case 2:
            result=num1-num2
            break;
        case 3:
            result=num1*num2
            break;
        case 4:
            result=num1/num2
            break;
    }
    
    document.getElementById('resultado').innerHTML = result
}
