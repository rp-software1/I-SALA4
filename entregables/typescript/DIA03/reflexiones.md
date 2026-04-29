# Reflexión — Día 3

## Bloque A
El uso de unknown en el catch es más seguro que any porque obliga a validar el tipo antes de usarlo. Esto evita errores cuando el error no es un objeto estándar.

## Bloque B
Omit fue útil para construir el body del POST sin incluir campos generados por el backend. Es una herramienta clave para evitar enviar datos incorrectos.

## Bloque C
useParams fue interesante porque aunque se le pasa un tipo, sigue devolviendo string | undefined. Esto obliga a usar guards y entender mejor el flujo de datos.

## Bloque D
Al inicio del proyecto había varios errores de TypeScript. Después de tipar todo correctamente, se logró llegar a 0 errores. El error más difícil fue alinear los tipos del backend con los mocks en api.ts.

## Bloque E
Aprendí que TypeScript previene errores como acceder a propiedades inexistentes o pasar tipos incorrectos, pero no evita errores de lógica como endpoints incorrectos o fallos del backend.

## Cierre de los 3 días

¿Qué concepto fue más difícil?
El manejo de tipos en context y el uso de genéricos como Omit.

¿Qué error fue más útil?
El error de incompatibilidad entre types y api.ts, porque mostró la importancia de un contrato de datos consistente.

¿Dónde detecto bugs ahora?
En props de componentes, respuestas de API y manejo de estados.

Total de errores:
Inicio Día 1: muchos errores
Final Día 3: 0 errores

¿Qué cambiaría?
Antes no validaba tipos ni estructuras. Ahora siempre definiría tipos desde el inicio del proyecto.