# Tabla de Texto Puro

Se trata de crear una tabla sin hacer uso de etiquetas HTML ni nada por el estilo, con solo texto. Ejemplo:
~~~
-----------------------------
| Nombre  | Apellido | Edad |
-----------------------------
| Tiago   | Pujia    | 17   |
| Ingrid  | Monsalve | 24   |
| Octavio | Egitto   | 18   |
-----------------------------
~~~

Para esto nos apoyamos del archivo "_script.js_" y la función "_imprimirTabla()_", está recibe 2 parametros:
1. Lista
2. [Encabezado]

La lista será un arreglo, en que dentro contendra arreglos con los datos que se mostraran.

El encabezado es opcional y son los titulos de cada columna.

No es necesario que todos los datos tengan la misma cantidad de columnas.