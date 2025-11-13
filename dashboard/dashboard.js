// Redirección de cierre de sesión
function logout() {
  window.location.href = "../login/login.html";
}

// Gráfico de producción semanal
const ctx1 = document.getElementById("chartSemanal").getContext("2d");
new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    datasets: [{
      label: "Producción (kg)",
      data: [250, 280, 310, 290, 350, 400, 380],
      borderColor: "#005cff",
      backgroundColor: "rgba(0, 92, 255, 0.1)",
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } }
  }
});

// Gráfico por tipo de alga
const ctx2 = document.getElementById("chartTipo").getContext("2d");
new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Sargazo", "Ulva", "Durvillaea", "Porphyra"],
    datasets: [{
      label: "Toneladas",
      data: [500, 400, 300, 200],
      backgroundColor: ["#005cff", "#00a65a", "#6a1b9a", "#ff9800"]
    }]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } }
  }
});
