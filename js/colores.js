+var colorRojo = document.querySelector("#colorRojo");
 +var colorVerde = document.querySelector("#colorVerde");
 +var colorAzul = document.querySelector("#colorAzul");
 +
 +var catidadRojo = document.querySelector("#catidadRojo");
 +var catidadVerde = document.querySelector("#catidadVerde");
 +var catidadAzul = document.querySelector("#catidadAzul");
 +
 +var cuadroColores = document.querySelector("#cuadroColores");
 +
 +colorRojo.addEventListener("input", function () {
 +    cantidadRojo.innerHTML = this.value;
 +    cambiarColor();
 +});
 +colorVerde.addEventListener("input", function () {
 +    cantidadVerde.innerHTML = this.value;
 +    cambiarColor();
 +});
 +colorAzul.addEventListener("input", function () {
 +    cantidadAzul.innerHTML = this.value;
 +    cambiarColor();
 +});
 +
 +function cambiarColor(){
 +    cuadroColores.style.background = "rgb(" + colorRojo.value + "," + colorVerde.value + "," + colorAzul.value + ")" ;
 +}
