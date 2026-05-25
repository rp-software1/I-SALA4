# Predicciones Día 4

## Predicción A
¿GET /mesas/:id existe? No, el backend no lo tiene, por lo que usamos la Opción B (buscar en el array de todas las mesas).
¿Qué retorna si el ID no existe? La función lanza un Error que es capturado por el try/catch.

## Predicción B
¿generateMetadata puede hacer await? Sí, es una función async.
¿Puede llamar a getMesaById()? Sí, porque se ejecuta en el servidor antes de enviar el HTML.

## Predicción C
¿Cuándo se muestra el skeleton de MesaDetalle? Durante la hidratación en el cliente.
¿MesaDetalle hace fetch o solo usa los datos que recibe por prop? Solo usa los datos que recibe por prop desde el Server Component.

## Predicción D
¿Next.js actualiza /mesas automáticamente? No en tiempo real, lo hace en el siguiente request a esa ruta.
¿Qué hace revalidatePath? Borra el caché de la ruta para que la próxima visita haga un fetch fresco al backend.
