from http.server import SimpleHTTPRequestHandler, HTTPServer
import webbrowser
import os

# Ruta de trabajo (donde están los archivos HTML/CSS/JS)
web_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(web_dir)

# Configurar puerto
PORT = 8000

# Crear servidor simple
server_address = ("", PORT)
handler = SimpleHTTPRequestHandler
httpd = HTTPServer(server_address, handler)

# Abrir automáticamente el navegador con login.html
webbrowser.open(f"http://localhost:{PORT}/login.html")

print(f"Servidor corriendo en http://localhost:{PORT}/login.html")
print("Presiona Ctrl+C para detenerlo.")

# Iniciar el servidor
httpd.serve_forever()
