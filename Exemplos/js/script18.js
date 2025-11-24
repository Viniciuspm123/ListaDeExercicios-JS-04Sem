const carroMarca = ["BMW", "Volvo", "Saab", "Ford"];
let tamanho = carroMarca.length;

let contadora = 2;

let texto = "";
for (; contadora < tamanho; contadora++) {
  console.log("As marcas de solicitadas são : "+carroMarca[contadora] + "<br>");
}