from http.server import SimpleHTTPRequestHandler, HTTPServer
import webbrowser
import os

# Ruta del directorio raíz del proyecto (no solo /login)
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(base_dir)  # Cambia al nivel principal del proyecto

# Configurar puerto
PORT = 8000

# Crear servidor simple
server_address = ("", PORT)
handler = SimpleHTTPRequestHandler
httpd = HTTPServer(server_address, handler)

# Abrir automáticamente el navegador con el login
webbrowser.open(f"http://localhost:{PORT}/login/login.html")

print(f"Servidor corriendo en http://localhost:{PORT}/login/login.html")
print("Presiona Ctrl+C para detenerlo.")

# Iniciar servidor
httpd.serve_forever()
