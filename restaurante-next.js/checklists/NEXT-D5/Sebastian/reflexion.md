# Reflexión Día 5

## Bloque A
getPedidos() trae todos los pedidos. El endpoint PATCH real resultó ser `/pedidos/:id` y no `/pedidos/:id/estado` como asumimos al principio (nos dio 404 y tuvimos que corregirlo).

## Bloque B
export const metadata es síncrono porque la ruta tiene un título fijo. El ordenamiento manual por urgencia (pendiente primero) fue clave para la UX del personal del restaurante.

## Bloque C
Partial<Record<...>> fue vital para no tener que definir todos los estados en SIGUIENTE, pero causó errores de TypeScript porque los nombres en `types/index.ts` eran `preparando` y `listo` en lugar de `en_preparacion` y `lista`. Alinear el código con los tipos fue la solución.

## Bloque D
revalidatePath('/comandas') funciona perfecto para refrescar la lista. Además, solucionamos el error 404 del backend ajustando la URL del Server Action.

## Bloque E
NavBar integrado con el link de Comandas. Todo el proyecto sin errores de TypeScript. El flujo visual de colores (naranja -> azul -> morado -> verde tenue) queda excelente para producción.
