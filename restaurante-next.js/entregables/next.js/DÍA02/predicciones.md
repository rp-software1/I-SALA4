# Predicciones — Día 2

## Bloque A

Prefijo para variables accesibles en el browser:
NEXT_PUBLIC_

Prefijo para variables solo del servidor:
Sin prefijo

---

## Bloque B

El usuario ve durante el fetch:
El layout con loading.tsx mientras carga la información.

¿Quién muestra el loading?
loading.tsx

---

## Bloque C

error.tsx captura:
Errores del fetch y errores de renderizado de la ruta.

¿Qué pasa si getMesas() lanza Error(""503"")?
Se renderiza error.tsx mostrando el mensaje del error.

---

## Bloque D

¿Crear loading.tsx en /menu?
SÍ — para mostrar skeleton mientras cargan los platos.

¿Crear error.tsx en /menu?
SÍ — para manejar errores del fetch del menú.
