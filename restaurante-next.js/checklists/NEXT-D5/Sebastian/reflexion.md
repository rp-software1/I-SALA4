# Reflexión Día 5

## Bloque A
getPedidos() trae todos los pedidos históricos, lo cual no es óptimo para producción pero funciona para el panel actual.

## Bloque B
export const metadata es síncrono porque la ruta es estática. El ordenamiento manual por urgencia fue clave para la UX.

## Bloque C
Partial<Record<...>> es una herramienta genial de TypeScript para evitar tener que poner todos los estados en el objeto SIGUIENTE, permitiendo que entregada y cancelada queden como undefined (sin botón).

## Bloque D
revalidatePath('/comandas') es suficiente para que al navegar se vea actualizado. startTransition ayuda a mantener la UI fluida.

## Bloque E
NavBar integrado con el nuevo link. Todo sin errores TypeScript.
