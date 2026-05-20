# Predicciones Día 4

## Predicción A
¿GET /mesas/:id existe? Sí.
¿Qué retorna si el ID no existe? Un error 404.

## Predicción B
¿generateMetadata puede hacer await? Sí.
¿Puede llamar a getMesaById()? Sí, porque se ejecuta en el servidor.

## Predicción C
¿Cuándo se muestra el skeleton de MesaDetalle? Durante la carga del cliente.
¿MesaDetalle hace fetch o solo usa los datos que recibe por prop? Solo usa los datos por prop.

## Predicción D
¿Next.js actualiza /mesas automáticamente? No en tiempo real, en el siguiente request.
¿Qué hace revalidatePath? Borra el caché de la ruta para que se vuelva a consultar al backend.
