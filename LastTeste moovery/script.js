function inverte(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);


    var aux = num1;

    num1 = num2
    num2 = aux;

    alert("Antes: \n" +
         "numero1=" +document.getElementById("numero1").value+"\n"+
         "numero2=" +document.getElementById("numero2").value+"\n \n"+
         "Invertido:\n"+
         "numero1=" +num1+"\n"+
         "numero2=" +num2+"\n\n");

}