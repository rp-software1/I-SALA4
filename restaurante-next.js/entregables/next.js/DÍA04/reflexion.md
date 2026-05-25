# Reflexión Día 4

## Bloque A
El backend no tenía el endpoint GET /mesas/:id, por lo que tuvimos que hacer un fallback buscando en la lista completa. Es válido para el bootcamp pero en producción se preferiría un endpoint directo.

## Bloque B
generateMetadata es muy útil para el SEO y la experiencia del usuario (título dinámico en la pestaña). Hacer el mismo fetch en metadata y en el componente está bien porque Next.js lo optimiza.

## Bloque C
useTransition es mucho mejor que un useState de loading porque no bloquea la interfaz del usuario mientras espera la respuesta del servidor.

## Bloque D
revalidatePath es la magia que conecta las mutaciones del servidor con la interfaz. Al cambiar el estado, invalidar /mesas hace que al volver atrás se vea el color actualizado sin recargar manualmente.

## Errores resueltos
1. getMesaById se duplicó en api.ts, causando errores de TypeScript (resuelto eliminando el duplicado).
2. MesaCard no era un enlace <Link>, por lo que no se podía navegar al detalle (resuelto envolviéndolo en Link).
3. El backend no tenía la ruta GET /mesas/:id (resuelto con la Opción B de búsqueda en lista).
