var solicitudAsinc; 

function registrarManejadores(){

const imgCss = document.getElementById("csstecprof"); 
if(ingss.addEventListener) {
	imgCss.addEventListener("mouseover", function(){
	 obtenerContenido ("1");
	}, false);
} else if(imgCss.attachEvent) {
	imgCss.attachEvent("onmouseover", function(){ 
		obtenerContenido ("1");
	});
}

if(imgCss.addEventListener) {
	imgCss.addEventListener("mouseout", borrarContenido, false);
} else if(imgCss.attachEvent) { 
	imgCas.attachEvent("onmouseout", borrarContenido);
}

const imgJava = document.getElementById("java8");
if(imgJava.addEventListener) {
imgJava.addEventListener("mouseover", function(){ obtenerContenido ("2");
}, false);
}else if(imgJava.attachEvent) { imgJava.attachEvent("mouseover", function(){ obtenerContenido ("2");
});
}
if(imgJava.addEventListener) {
imgJava.addEventListener("mouseout", borrarContenido, false);
} else if(imgJava.attachEvent) {
imgJava.attachEvent("onmouseout", borrarContenido);
}

const imgNinja = document.getElementById("jsninja");
if(imgNinja.addEventListener) { imgNinja.addEventListener("mouseover", function(){ obtenerContenido ("3");
}, false);
} else if(imgNinja.attachEvent){ imgNinja.attachEvent("onmouseover", function(){ obtenerContenido ("3");
});
}
if(imgNinja.addEventListener) {
imgNinja.addEventListener("mouseout", borrarContenido, false);
} else if(imgNinja.attachEvent) {
imgNinja.attachEvent("onmouseout", borrarContenido);
}
//Cuarta imagen
const imgNode = document.getElementById("nodejs");
if(imgNode.addEventListener) {
imgNode.addEventListener("mouseover", function(){ obtenerContenido ("4");
}, false);
} else if(imgNode.attachEvent) {
imgNode.attachEvent("onmouseover", function(){ obtenerContenido ("4");
});
}

if(imgNode.addEventListener) {
imgNode.addEventListener("mouseout", borrarContenido, false);
} else if(imgNode.attachEvent) { imgNode.attachEvent("onmouseout", borrarContenido);
}
} //Fin de la función que registra eventos sobre las imagenes
function obtenerContenido (id) {
//Intentar crear objeto XMLHttpRequest y realizar la petición
const URL = "https://6538370fa543859d1bb150ca.mockapi.io/api/example/:endpoint" + id;
try
{ //Crear objeto petición XMLHttpRequest
//Cambiar esto por una funcion multinavegador para construir el objeto XMLHttpReques
solicitudAsinc = new XMLHttpRequest();
//Registrar el manejador de eventos
if(solicitudAsinc.addEventListener){
solicitudAsinc.addEventListener("readystatechange", cambiarEstado, false);
}
else if(solicitudAsinc.attachEvent) {
solicitudAsinc.attachEvent("onreadystatechange", cambiarEstado);

}
//Preparar la solicitud
solicitudAsinc.open("GET", URL, true); //Enviar la solicitud solicitudAsinc.send(null);
}
catch(exception) {
alert("No se proceso la petición AJAX")
}
}

function borrarContenido(){
document.getElementById("descriptions").innerHTML =
}
function cambiarEstado(){
if(solicitudAsinc.readyState== 4 && solicitudAsinc.status == 200) (
//Coloca el contenido devuelto en la petición en el div descriptions const jsonDescription = solicitudAsinc.responseText;
document.getElementById("descriptions").innerHTML = JSON.parse(jsonDescription).description;
}
}
if(window.addEventListener) {
window.addEventListener("load", registrarManejadores, false);
}else if(window.attachEvent) {
window.attachEvent("onload", registrarManejadores);
}