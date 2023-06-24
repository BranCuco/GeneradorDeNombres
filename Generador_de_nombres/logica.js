document.getElementById("generarBtn").addEventListener("click", generarNombre);

function generarNombre() {
    var nombres = ["Juan", "Maria", "Pedro", "Ana", "Luis"];
    var apellidos = ["Gonzalez", "Lopez", "Rodriguez", "Perez", "Gomez"];

    var nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    var apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];

    var resultado = nombreAleatorio + " " + apellidoAleatorio;

    document.getElementById("resultado").textContent = resultado;
}
