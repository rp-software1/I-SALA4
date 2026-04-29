# Reflexión Día 2

## A
Centralizar los tipos en un solo archivo permite evitar duplicación y facilita el mantenimiento del código. Si el backend cambia, solo se modifica un archivo.

## B
El autocompletado mejora significativamente porque todos los componentes usan los mismos tipos. También se reducen errores de inconsistencias.

## C
Sin el guard en el context, un componente podría usar usePedido fuera del Provider y romper la app en runtime al intentar acceder a propiedades undefined.

## D
Aprendí que los union types permiten limitar los valores posibles de una variable, evitando errores. También entendí por qué createContext con undefined obliga a validar el contexto.

## E
El concepto más difícil fue entender por qué el contexto puede ser undefined y cómo el hook personalizado soluciona ese problema.

## Cierre del día
Total de errores TypeScript: 0

Centralizar tipos mejora la escalabilidad del proyecto.  
El concepto más importante del día fue el tipado del contexto y la reutilización de tipos.