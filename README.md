# 2026-1-t5-g9

Proyecto MyUnits, un convertidor de unidades implementado en Vue y Svelte. Ambas versiones permiten convertir entre categorias como longitud, area, volumen, peso/masa, temperatura, tiempo y velocidad.

## Como ejecutar los proyectos

### Vue

```bash
cd myunits-vue
npm install
npm run dev
```

Luego abrir la URL que muestra Vite en la terminal:

```bash
http://localhost:5173
```

Para generar una version de produccion:

```bash
npm run build
```

### Svelte

```bash
cd myunits-svelte
npm install
npm run dev
```

Luego abrir la URL que muestra Vite en la terminal:

```bash
http://localhost:5173
```

Para generar una version de produccion:

```bash
npm run build
```

## Uso de IA

La IA fue usada como herramienta de apoyo durante el desarrollo, no como reemplazo del trabajo del equipo. Nos ayudo a ordenar la estructura inicial de componentes y proponer una interfaz simple para que el usuario pudiera ingresar valores, elegir unidades y hacer la conversion inversa de forma clara.

Tambien se uso para facilitar partes repetitivas del front, como la organizacion del formulario, la caja de resultado, los estilos base y la repeticion de categorias y unidades entre Vue y Svelte. Esto nos dejo mas tiempo para concentrarnos en entender las diferencias entre ambos frameworks. La IA tambien ayudó a revisar posibles errores. Las decisiones finales fueron hechas por el equipo.

## Autoevaluacion

- Se logro implementar la misma aplicacion en dos frameworks distintos, Vue y Svelte.
- La aplicacion incluye varias categorias de conversion: longitud, area, volumen, peso/masa, temperatura, tiempo y velocidad.
- Ambas versiones estan separadas en componentes, lo que ayuda a entender mejor la responsabilidad de cada parte de la interfaz.
- La IA se uso como apoyo para revisar y ordenar, pero las decisiones del proyecto fueron tomadas por el equipo.
- Se pudo haber pulido mejor detalles visuales y de texto, como tildes, codificacion y nombres mostrados al usuario.
- También se pudieron haber agregado funciones extra, como por ejemplo historial de conversiones, favoritos, redondeo configurable o conversion automatica mientras se escribe.
- Trabajar con dos frameworks distintos fue más complejo, por lo que requirió de más tiempo para entender cada uno.
