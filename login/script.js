document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "admin@biokelp.com" && password === "12345") {
    alert("Inicio de sesión exitoso");
    // Aquí podrías redirigir al dashboard:
    window.location.href = "../dashboard/dashboard.html";
  } else {
    alert("Credenciales inválidas");
  }
});
