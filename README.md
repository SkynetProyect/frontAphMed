# Frontend (React + TypeScript + Vite)

Descripción
-
Frontend implementado con React + TypeScript y construido con Vite. La estructura de carpetas sigue una organización modular (componentes, páginas, servicios, modelos, interfaces) inspirada en arquitecturas más estructuradas para mantener orden.

Acceso a la documentación de la API (Swagger)
-
- La documentación de la API está en el backend. Para ver los endpoints y probar métodos use Swagger UI en: http://localhost:3000/apidocs
- Desde el frontend las llamadas HTTP deben apuntar al endpoint base del backend; revise `src/enviroments/enviroment.ts` para la URL base de la API.

Cómo ejecutar (desarrollo)
-
1. Instalar dependencias:

```
cd front
npm install
```

2. Levantar servidor de desarrollo:

```
npm run dev
```

Dependencias principales (con versiones)
-
- `react` — ^19.2.5
- `react-dom` — ^19.2.5
- `vite` — ^8.0.9
- `@vitejs/plugin-react` — ^6.0.1
- `react-router-dom` — ^7.15.1
- `tailwindcss` — ^4.3.0
- `@tailwindcss/vite` — ^4.3.0
- `socket.io-client` — ^4.8.3
- `react-hot-toast` — ^2.6.0
- `lucide-react` — ^1.14.0
- `typeorm` — ^0.3.28 (si se usa en frontend para modelos compartidos)

Arquitectura y organización
-
- Estructura principal:
	- `src/components` — componentes UI reutilizables
	- `src/pages` — vistas / páginas por sección
	- `src/services` — adaptadores / funciones para consumir la API (ej. `PacienteAdapter.ts`, `ProcedimientoAdapter.ts`)
	- `src/interfaces` / `src/models` — tipados TypeScript para DTOs y modelos
	- `src/guards` — protecciones de rutas (autenticación / token)
	- `src/enviroments/enviroment.ts` — configuración de entornos (URL de la API)

Notas
-
- El frontend espera consumir la API del backend; para probar interacciones con Swagger abra http://localhost:3000/apidocs y use los endpoints descritos.
- Asegúrese de autenticar (obtener JWT) y enviar `Authorization: Bearer <token>` para las rutas protegidas.



