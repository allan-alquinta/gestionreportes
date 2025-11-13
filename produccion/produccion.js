const form = document.getElementById("produccionForm");
const tabla = document.querySelector("#tablaProduccion tbody");
let registros = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fecha = document.getElementById("fecha").value;
  const tipo = document.getElementById("tipo").value;
  const peso = document.getElementById("peso").value;
  const destino = document.getElementById("destino").value;

  const nuevo = { fecha, tipo, peso: parseFloat(peso), destino };
  registros.push(nuevo);
  actualizarTabla();
  actualizarGrafico();

  form.reset();
});

function actualizarTabla() {
  tabla.innerHTML = "";
  registros.forEach((r, i) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${r.fecha}</td>
      <td>${r.tipo}</td>
      <td>${r.peso}</td>
      <td>${r.destino}</td>
      <td class="acciones-btn">
        <button class="editar" onclick="editarRegistro(${i})">✏️</button>
        <button class="eliminar" onclick="eliminarRegistro(${i})">🗑️</button>
      </td>
    `;
    tabla.appendChild(fila);
  });
}

function editarRegistro(i) {
  const r = registros[i];
  document.getElementById("fecha").value = r.fecha;
  document.getElementById("tipo").value = r.tipo;
  document.getElementById("peso").value = r.peso;
  document.getElementById("destino").value = r.destino;
  eliminarRegistro(i);
}

function eliminarRegistro(i) {
  registros.splice(i, 1);
  actualizarTabla();
  actualizarGrafico();
}

// === GRÁFICO DINÁMICO ===
const ctx = document.getElementById("graficoBarras").getContext("2d");
let grafico = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [{
      label: "Producción (kg)",
      data: [],
      backgroundColor: "#0044cc"
    }]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } }
  }
});

function actualizarGrafico() {
  const tipos = {};
  registros.forEach(r => {
    tipos[r.tipo] = (tipos[r.tipo] || 0) + r.peso;
  });

  grafico.data.labels = Object.keys(tipos);
  grafico.data.datasets[0].data = Object.values(tipos);
  grafico.update();
}
