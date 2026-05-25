---
sala: I-SALA1
curso: Next.js
dia: 4
estado: completado
loom: https://www.loom.com/share/05d57f16313e48f0b3e580772793e904
---

## Bloques
- [x] A — getMesaById en api.ts (Usando búsqueda en lista por fallback)
- [x] B — page.tsx con fetch real + generateMetadata + notFound()
- [x] C — MesaDetalle Client Component + Suspense manual
- [x] D — Server Action cambiarEstadoMesa + revalidatePath
- [x] E — Verificación TypeScript + flujo completo
- [ ] F — Evaluación entre pares + Loom + PR

## Verificación final
- [x] Clic en mesa → /mesa/[id] muestra datos reales
- [x] Pestaña del browser muestra "Mesa N — Restaurante"
- [x] Cambiar estado → la mesa en /mesas se actualiza
- [x] npx tsc --noEmit → 0 errores

