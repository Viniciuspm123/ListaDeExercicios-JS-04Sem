var metros = parseFloat(prompt("Digite o valor em metros:"))

if (!isNaN(metros)) {

    var centimetros = metros * 100;
    var milimetros = metros * 1000;

    alert (

        metros + " Metros equivalem a: \n" +
        centimetros + " centimetros" + " e " +
        milimetros + " milimetros"

    );
} else {

    alert ("Por favor, digite um número valido.")
}