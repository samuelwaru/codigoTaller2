var canvas = document.getElementById('fondo');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "blue";
ctx.arc(150, 200, 50, 0, Math.PI*2, false);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "25pt Arial";
ctx.fillText("Hola Canvas-Mundo", 300, 100);
ctx.closePath();

var assetManager = new AssetManager();
assetManager.queueDownload("./imagenes/vaca_normal.png","vacanormal");

assetManager.downloadAll(function() {
    var imagen = assetManager.getAsset("vacanormal");
    ctx.drawImage(imagen, 500,225);
	var juego = new Juego(ctx);
	var circulo1 = new Circulo(juego, 0, 125);
    var circulo2 = new Circulo(juego, 0, 225);
	var circulo3 = new Circulo(juego, 0, 325);
	var circulo4 = new Circulo(juego, 300, 425);
	juego.addEntidad(circulo1);
	juego.addEntidad(circulo2);
	juego.addEntidad(circulo3);
	juego.addEntidad(circulo4);
    juego.iniciar();
});