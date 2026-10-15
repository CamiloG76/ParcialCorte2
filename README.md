# Tienda - desarrollo de aplicaciones web

Proyecto academico desarrollado con django y django rest framework.

## Recurso desarrollado

- Categorias de productos.
- Productos relacionados con sus categorias.

## Descripcion

Este proyecto consiste en una tienda desarrollada con django y django rest framework. Cuenta con una api rest para gestionar categorias y productos, y una interfaz creada con html, css y javascript que se comunica con la api.

## Requisitos

- Python instalado.
- Git instalado.
- Un navegador web.
- Visual studio code (opcional, pero recomendado).

## Instalacion y ejecucion

### 1. Descargar el proyecto

Clonar el repositorio:

```bash
git clone https://github.com/CamiloG76/ParcialCorte2.git
cd Parcial_Tienda
```

**Nota:** Si la carpeta creada al clonar tiene otro nombre, entrar en esa carpeta en lugar de `Parcial_Tienda`.

### 2. Crear el entorno virtual

```bash
python -m venv .venv
```

Activar el entorno virtual en windows powershell:

```powershell
.\.venv\Scripts\Activate.ps1
```

### 3. Instalar django y las dependencias

Con el entorno virtual activado, ejecutar:

```bash
python -m pip install django djangorestframework django-cors-headers
```

Estas dependencias sirven para lo siguiente:

- **django:** permite desarrollar el proyecto web y gestionar la base de datos.
- **django rest framework:** permite crear la api rest.
- **django-cors-headers:** permite configurar el acceso a la api desde el frontend.

### 4. Preparar la base de datos

Ejecutar los siguientes comandos:

```bash
python manage.py makemigrations
python manage.py migrate
```

`makemigrations` prepara las migraciones de los modelos y `migrate` aplica los cambios en la base de datos.

### 5. Iniciar la api

```bash
python manage.py runserver
```

La api estara disponible en las siguientes direcciones:

- Categorias: http://127.0.0.1:8000/api/categorias/
- Productos: http://127.0.0.1:8000/api/productos/

### 6. Iniciar la pagina web

Mantener la api ejecutandose y abrir una segunda terminal en la carpeta principal del proyecto.

Ejecutar:

```terminal
python -m http.server 5500
```

Despues, abrir en el navegador:

http://127.0.0.1:5500/Frontend/

La carpeta `Frontend` debe contener los archivos html, css y javascript de la interfaz.

Para que la pagina funcione correctamente, django debe permanecer ejecutandose y tener habilitado cors para el origen del frontend.

## Tecnologias utilizadas

- Python
- django
- django rest framework
- html
- css
- javascript
- sqlite
- git y github

## Autores

- Juan Camilo Gomez Muñoz
- Valerie Alejandra Bolaños Niño
- Laura Camila Constain
