# Predicciones — Día 3

## Bloque A
Tipo de data después del await:
Mesa[]

Tipo del parámetro err en el catch:
unknown

---

## Bloque B
Campos que van en el body:
mesaId, tipo, estado, items, total

Campos que NO van (los excluye Omit):
_id, creadoEn, actualizadoEn

---

## Bloque C
Tipo de mesaId después de useParams<{ mesaId: string }>():
string | undefined

¿Necesitas un guard de undefined?
Sí, porque useParams no garantiza que exista el parámetro