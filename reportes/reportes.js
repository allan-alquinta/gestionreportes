const lista = document.getElementById("listaReportes");
const generarBtn = document.getElementById("generarBtn");

generarBtn.addEventListener("click", () => {
  const tipo = document.getElementById("tipoReporte").value;
  const inicio = document.getElementById("inicio").value;
  const fin = document.getElementById("fin").value;
  const mercado = document.getElementById("mercado").value;
  const formato = document.querySelector("input[name='formato']:checked").value;

  if (!inicio || !fin) {
    alert("Debes seleccionar un período válido.");
    return;
  }

  const nuevoReporte = document.createElement("li");
  const fecha = new Date().toLocaleDateString("es-CL");
  nuevoReporte.innerHTML = `
    <div>
      <strong>${tipo}</strong> - ${mercado} (${formato})
      <br><small>${fecha}</small>
    </div>
    <span>⬇️</span>
  `;
  lista.prepend(nuevoReporte);

  alert(`Reporte generado en formato ${formato}`);
});

function volverDashboard() {
  window.location.href = "../dashboard/dashboard.html";
}
