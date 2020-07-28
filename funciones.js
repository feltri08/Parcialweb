var editar=false;

function Editable(nodo)
{
	if (editar == false) 
	{
	var nodoTd = nodo.parentNode;
	var nodoTr = nodoTd.parentNode; 
	var nodoContForm = document.getElementById('contForm');
	var nodosEnTr = nodoTr.getElementsByTagName('td');
	var alimento = nodosEnTr[0].textContent; var calorias = nodosEnTr[1].textContent;
	var grasas = nodosEnTr[2].textContent; var proteina = nodosEnTr[3].textContent;
	var carbohidratos = nodosEnTr[4].textContent; var ok= nodosEnTr[5].textContent;
	var opciones = nodosEnTr[6].textContent;

	var nuevo= '<td><input type="text" name="alimento" id="alimento" value="'+alimento+'" size="10"></td>'
	+'<td><input type="text" name="calorias" id="calorias" value="'+calorias+'" size="5"></td>'
	+'<td><input type="text" name="grasas" id="grasas" value="'+grasas+'" size="5"></td>'
	+'<td><input type="text" name="proteina" id="proteina" value="'+proteina+'" size="5"></td>'
	+'<td><input type="text" name="carbohidratos" id="carbohidratos" value="'+carbohidratos+'" size="5"></td>'
	+'<td><select><option value=&#128512>bien</option><option value=&#128542>mal</option></select></td> <td>En edición</td>';

	nodoTr.innerHTML = nuevo;
	nodoContForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
	'<form name = "formulario" action="editado.html" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
	'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
	editar = "true";}

	else 
	{
		alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
	}
}

function capturarEnvio()
{
var nodoContForm = document.getElementById('contForm');
nodoContForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
'<form name = "formulario" action="editado.html" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
'<td><input type="text" name="alimento" value="'+document.querySelector('#alimento').value+'"></td>'+
'<td><input type="text" name="calorias" value="'+document.querySelector('#calorias').value+'"></td>'+
'<td><input type="text" name="grasas" value="'+document.querySelector('#grasas').value+'"></td>'+
'<td><input type="text" name="proteina" value="'+document.querySelector('#proteina').value+'"></td>'+
'<td><input type="text" name="carbohidratos" value="'+document.querySelector('#carbohidratos').value+'"</td>>'+
'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
document.formulario.submit();
}
 


function anular()
{
	window.location.reload();
}