# reflexion.md

---

## Bloque A

En la instalación de TypeScript, lo que más me confundió fue si el archivo tsconfig.json se generaba automáticamente o si tenía que crearlo manualmente. También no me quedó del todo claro para qué sirven algunas opciones como moduleResolution o useDefineForClassFields. Entiendo que el tsconfig es importante porque define cómo TypeScript va a analizar el proyecto, pero todavía no tengo claro el impacto de cada configuración.

---

## Bloque B

Cuando renombré los archivos de .jsx a .tsx aparecieron varios errores como esperaba, aunque creo que fueron más de los que pensé. Me sorprendió ver errores relacionados con props y funciones sin tipo. No esperaba que simplemente cambiar la extensión generara tantos problemas, pero entendí que TypeScript ahora exige definir los tipos de todo.

---

## Bloque C

El tipado de onAgregar no fue exactamente como lo imaginaba al inicio. No pensaba que se definiera como una función que recibe un objeto completo de tipo Plato. Ahora entiendo que "(plato: Plato) => void" significa que la función recibe un plato y no retorna nada. Me ayudó a entender mejor cómo se tipan funciones en TypeScript.

---

## Bloque D

El uso de union types me pareció mejor que usar string porque evita errores al escribir estados incorrectos. Antes podía escribir cualquier texto y no pasaba nada, pero ahora TypeScript limita los valores posibles. Esto ayuda a evitar errores y también mejora el autocompletado. Aunque al inicio se siente más restrictivo, entiendo que es una ventaja.

---

## Bloque E

Sí tiene sentido tipar el retorno de las funciones de la API porque así sabemos exactamente qué tipo de datos estamos recibiendo. Antes en JavaScript solo asumía la estructura, pero ahora TypeScript me obliga a ser más claro. El beneficio es que el editor puede ayudar más y detectar errores antes de ejecutar el código.

---

## Cierre del día

El concepto que más me costó entender fue el de Promise y cómo interactúa con await en TypeScript. También me confundió cuándo TypeScript infiere tipos automáticamente y cuándo hay que declararlos manualmente. La ventaja más clara que veo frente a JavaScript es que detecta errores antes de ejecutar el código, especialmente con props y datos de la API. El total de errores TypeScript al final del día no lo tengo exacto, pero sé que todavía quedan varios en context y pages que no se trabajaron hoy.
