# Predicciones Día 5

## Predicción A
¿GET /pedidos?estado=pendiente funciona? No, el backend no filtra por query params, trae todo.
URL exacta de PATCH para cambiar estado: PATCH /pedidos/:id (sin /estado al final, porque el backend daba 404 con /estado).

## Predicción B
¿Puede ser síncrona? Sí.
¿Por qué? Porque el título "Comandas — Restaurante" es fijo, no depende de datos dinámicos del backend.

## Predicción C
Para un pedido "para_llevar" muestra: "Para llevar"
Para un pedido "mesa" muestra: "Mesa [numero]"

## Predicción D
¿La lista se actualiza automáticamente? Sí, al próximo request gracias a revalidatePath.
¿router.refresh() sería necesario? No fue necesario, revalidatePath fue suficiente al combinarlo con startTransition.
