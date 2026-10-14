# Tienda - Desarrollo de Aplicaciones Web

Proyecto académico desarrollado con Django y Django REST Framework.

## Recurso desarrollado
- Categorías de productos.

## Tecnologías
- Python
- Django
- Django REST Framework
- SQLite

# Tienda - API REST

## Descripción

Este proyecto consiste en una tienda desarrollada con Django y Django REST Framework. Cuenta con recursos para gestionar categorías y productos, y una interfaz creada con HTML, CSS y JavaScript que se comunica con la API.

## Requisitos

- Python instalado.
- Git instalado.
- Un navegador web.
- Visual Studio Code (opcional, pero recomendado).

## Instalación y ejecución

### 1. Descargar el proyecto

Clonar el repositorio compartido:

```bash
git clone URL_DEL_REPOSITORIO
cd Parcial_Tienda
```

Reemplazar `URL_DEL_REPOSITORIO` por el enlace real del repositorio.

### 2. Crear el entorno virtual

```bash
python -m venv .venv
```

Activarlo en Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

### 3. Instalar las dependencias

```bash
pip install django djangorestframework django-cors-headers
```

### 4. Preparar la base de datos

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Iniciar la API

```bash
python manage.py runserver
```

La API estará disponible en:

- Categorías: http://127.0.0.1:8000/api/categorias/
- Productos: http://127.0.0.1:8000/api/productos/

### 6. Iniciar la página web

Abrir otra terminal en la carpeta principal del proyecto y ejecutar:

```bash
python -m http.server 5500
```

Después abrir en el navegador:

http://127.0.0.1:5500/Frontend/

Para que la página funcione, Django debe seguir ejecutándose y tener habilitado el acceso desde el origen `http://127.0.0.1:5500`.

## Tecnologías utilizadas

- Python
- Django
- Django REST Framework
- HTML
- CSS
- JavaScript
- SQLite
- Git y GitHub

## Autores

Juan Camilo Gomez Muñoz
Valerie Alejandra Bolaños Niño
Laura Camila Constain