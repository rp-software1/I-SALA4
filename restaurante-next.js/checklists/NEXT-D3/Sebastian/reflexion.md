# Reflexión Día 3

## Bloque A
¿La predicción A fue correcta? Sí. layout.tsx no necesita 'use client' para importar PedidoProvider. Next.js maneja la frontera cliente/servidor automáticamente.

## Bloque B
¿El TODO era más simple de conectar de lo que esperabas? Sí, solo fue necesario llamar a la función del Context y mantener el estado local para el feedback visual del botón.

## Bloque C
¿La predicción sobre metadata fue correcta? Sí, metadata no funciona en Client Components. Implica que si una página necesita leer Context o usar useState, no puede exportar metadata y hay que conformarse con el título del layout o usar otras estrategias.

## Bloque D
¿La separación entre lo que hace el Server Action y lo que hace el cliente fue clara? Sí. El Server Action se encarga de la lógica de red (fetch al backend) y retorna un resultado. El cliente (CarritoPage) recibe ese resultado y, si es exitoso, ejecuta limpiarPedido() para actualizar la UI.

## Bloque E
¿Cuántos errores TypeScript había antes de resolver? Ninguno crítico relacionado con el código del día 3, solo ajustes de tipado.
¿El flujo manual encontró algún bug que TypeScript no detectó? No, el flujo manual confirmó que la comanda cruzaba correctamente al backend NestJS.
