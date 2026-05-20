# Predicciones Día 3

## Predicción A
¿layout.tsx necesita "use client" para importar PedidoProvider? 
NO. Un Server Component puede importar y renderizar un Client Component.
¿Por qué? Porque Next.js aisla el estado del cliente solo en el componente que tiene 'use client', permitiendo que el layout siga siendo renderizado en el servidor.

## Predicción B
Línea donde va agregarPlato(plato): Dentro de handleAgregar, antes del setAgregado(true).
¿El estado local agregado sigue sirviendo? Sí, sirve para dar feedback visual rápido (poner el botón verde por 1.5s).

## Predicción C
¿metadata funciona en Client Components? NO. metadata es una característica que Next.js procesa en el servidor antes de enviar el HTML.
Si no funciona, ¿cómo se cambia el title? Usando el hook de ciclo de vida o dejando el título por defecto del layout.

## Predicción D
Tipo del parámetro de enviarComanda: EstadoPedidoContext (contiene items, mesaId, tipo, total).
¿El Server Action puede usar useState? NO. Los Server Actions corren en el servidor, no tienen acceso al estado del cliente de React.
