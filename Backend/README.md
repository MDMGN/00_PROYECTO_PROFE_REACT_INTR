# Backend

Esta carpeta se usara mas adelante para crear el servidor con Node.js y Express.

En este proyecto la raiz contiene el frontend React con Vite:

```txt
00_PROYECTO_PROFE/
  public/
  src/
  package.json
```

Y esta carpeta contiene el backend:

```txt
00_PROYECTO_PROFE/
  Backend/
    index.js
    package.json
```

Idea importante para el curso:

- el frontend muestra la interfaz en el navegador,
- el backend recibira peticiones y devolvera datos,
- React no importara archivos directamente desde `Backend/`,
- React se comunicara con el backend mediante HTTP.

Ejemplo futuro:

```js
fetch('/api/contacto')
```

## Archivos actuales

### `index.js`

Sera el punto de entrada del servidor.
Ahora solo muestra un mensaje en consola para no adelantar Express antes de tiempo.

### `package.json`

Contiene el comando basico del backend:

```bash
npm run dev
```

Ese comando ejecuta:

```bash
node index.js
```
