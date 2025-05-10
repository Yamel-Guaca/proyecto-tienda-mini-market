// Función para quitar puntos y comas y convertir a entero
function parseNumber(value) {
  var num = value.replace(/\./g, '').replace(/,/g, '');
  return parseInt(num) || 0;
}

// Función para formatear números con separador de miles (punto)
function formatNumber(num) {
  return num.toLocaleString('es-CO');
}

// Actualiza la suma y el valor a consignar según los valores ingresados
function updateTotals(){
  var totalEfectivo = parseNumber(document.getElementById('total_efectivo').value);
  var niqui = parseNumber(document.getElementById('niqui').value);
  var daviplata = parseNumber(document.getElementById('daviplata').value);
  var yamel = parseNumber(document.getElementById('yamel').value);
  var puntoRed = parseNumber(document.getElementById('punto_red').value);
  var plataforma = parseNumber(document.getElementById('plataforma').value);
  var corresponsal2 = parseNumber(document.getElementById('corresponsal2').value);
  var corresponsal3 = parseNumber(document.getElementById('corresponsal3').value);
  var totalSistema = parseNumber(document.getElementById('total_sistema').value);
  
  var total = totalEfectivo + niqui + daviplata + yamel + puntoRed + plataforma + corresponsal2 + corresponsal3 + totalSistema;
  document.getElementById('total').value = formatNumber(total);
  
  var recaudo = 10000000; // Valor fijo definido
  document.getElementById('recaudo').value = formatNumber(recaudo);
  var consignar = recaudo - total;
  document.getElementById('consignar').value = formatNumber(consignar);
}

// Agregar eventListeners para recalcular en cada cambio
document.getElementById('total_efectivo').addEventListener('input', updateTotals);
document.getElementById('niqui').addEventListener('input', updateTotals);
document.getElementById('daviplata').addEventListener('input', updateTotals);
document.getElementById('yamel').addEventListener('input', updateTotals);
document.getElementById('punto_red').addEventListener('input', updateTotals);
document.getElementById('plataforma').addEventListener('input', updateTotals);
document.getElementById('corresponsal2').addEventListener('input', updateTotals);
document.getElementById('corresponsal3').addEventListener('input', updateTotals);
document.getElementById('total_sistema').addEventListener('input', updateTotals);

// Establece la fecha actual en el campo "fecha"
document.getElementById('fecha').value = new Date().toLocaleString('es-CO');

// Funciones para el manejo de transacciones acumuladas usando localStorage
function getTotalTransacciones(){
  var total = localStorage.getItem('totalTransacciones');
  return total ? parseInt(total) : 0;
}

function setTotalTransacciones(value){
  localStorage.setItem('totalTransacciones', value);
  document.getElementById('total_transacciones').value = formatNumber(value);
}

// Al hacer clic en "Agregar" se suma el valor ingresado en Transacciones al acumulado
document.getElementById('addTransaccion').addEventListener('click', function(){
  var transaccionInput = document.getElementById('transacciones');
  var valor = parseNumber(transaccionInput.value);
  var totalActual = getTotalTransacciones();
  var nuevoTotal = totalActual + valor;
  setTotalTransacciones(nuevoTotal);
  transaccionInput.value = "";
});