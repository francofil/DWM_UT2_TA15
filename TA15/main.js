const text = document.getElementById("input");
const lista = document.getElementById("lista");

document.getElementById("añadir").addEventListener("click", function () {
  if (text.value !== "") {
    const liAgregado = document.createElement("li");
    liAgregado.textContent = text.value; // Obtenemos el valor del input directamente
    lista.appendChild(liAgregado);       // Agregamos el nuevo <li> a la lista
    text.value = "";             // Limpiamos el input
  }

});

document.getElementById("eliminar").addEventListener("click", function () {
  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild)
  }
});