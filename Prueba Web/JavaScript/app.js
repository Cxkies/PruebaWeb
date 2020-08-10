function confirmacion() {
	var pregunta = confirm("¿Deseas confirmar el registro?")
	if (pregunta){
		window.location = "/HTML/Registro_exitoso.html";
	}
	else{
		alert("Quizás en otro momento...")
	}
}

