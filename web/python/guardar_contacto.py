# guardar_contacto.py
from flask import Flask, request, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/guardar_contacto', methods=['POST'])
def guardar_contacto():
    nombre = request.form.get('nombre')
    numero = request.form.get('numero')
    ciudad = request.form.get('ciudad')
    servicio = request.form.get('servicio')
    with open('contactos.txt', 'a', encoding='utf-8') as f:
        f.write(f"Nombre: {nombre} | Número: {numero} | Ciudad: {ciudad} | Servicio: {servicio}\n")
    return "¡Datos guardados correctamente!"

# Sirve el HTML directamente desde Flask
@app.route('/contacto')
def contacto():
    return send_from_directory(os.path.join(app.root_path, '../html'), 'contacto.html')

@app.route('/index.html')
def inicio():
    return send_from_directory(os.path.join(app.root_path, '../html'), 'index.html')

@app.route('/nuestraempresa.html')
def empresa():
    return send_from_directory(os.path.join(app.root_path, '../html'), 'nuestraempresa.html')

@app.route('/transporteespecial.html')
def especial():
    return send_from_directory(os.path.join(app.root_path, '../html'), 'transporteespecial.html')

@app.route('/turismo.html')
def turismo():
    return send_from_directory(os.path.join(app.root_path, '../html'), 'turismo.html')

@app.route('/traslados.html')
def traslados():
    return send_from_directory(os.path.join(app.root_path, '../html'), 'traslados.html')

# NUEVO: Sirve archivos estáticos (CSS)
@app.route('/css/<path:filename>')
def css(filename):
    return send_from_directory(os.path.join(app.root_path, '../css'), filename)

@app.route('/img/<path:filename>')
def img(filename):
    return send_from_directory(os.path.join(app.root_path, '../img'), filename)

@app.route('/js/<path:filename>')
def js(filename):
    return send_from_directory(os.path.join(app.root_path, '../js'), filename)

if __name__ == '__main__':
    app.run(debug=True)