const imprimirTabla = (resultados, titulos_columnas = []) => {
    let columnas_cantidad = 0,
        columnas_tamano = [];

    // Cantidad Columnas
    for (const index of resultados) {
        let numero_llaves = index.length;

        if (columnas_cantidad < numero_llaves)
            columnas_cantidad = numero_llaves;
    }

    if (columnas_cantidad < titulos_columnas.length) {
        columnas_cantidad = titulos_columnas.length;
    }

    for (let index = 0; index < columnas_cantidad; index++) {
        columnas_tamano.push(0);
    }

    // Tamaño Columnas y correción
    for (const arr of resultados) {
        for (let index = 0; index < columnas_cantidad; index++) {
            if (columnas_tamano[index] <= arr[index].length)
                columnas_tamano[index] = arr[index].length;

            while (arr.length < columnas_cantidad) {
                arr.push("");
            }
        }
    }

    if (titulos_columnas.length != 0) {
        for (let index = 0; index < columnas_cantidad; index++) {
            if (columnas_tamano[index] <= titulos_columnas[index].length)
                columnas_tamano[index] = titulos_columnas[index].length;

            while (titulos_columnas.length < columnas_cantidad) {
                titulos_columnas.push("");
            }
        }
    }

    // Alinear
    if (titulos_columnas.length != 0) {
        for (let index = 0; index < columnas_cantidad; index++) {
            titulos_columnas[index] + ";";
            while (titulos_columnas[index].length < columnas_tamano[index]) {
                titulos_columnas[index] += " ";
            }
        }
    }

    for (const arr of resultados) {
        for (let index = 0; index < columnas_cantidad; index++) {
            arr[index] += "";
            while (arr[index].length < columnas_tamano[index]) {
                arr[index] += " ";
            }
        }
    }

    // Impresion
    let titulos = `| ${titulos_columnas.join(" | ")} |\n`,
        separador = "",
        filas = ``,
        resultado_final;

    for (const arr of resultados) {
        filas += `| ${arr.join(" | ")} |\n`;
    }

    while (separador.length < `| ${resultados[0].join(" | ")} |`.length) {
        separador += "-";
    }

    separador += `\n`;

    resultado_final =
        titulos_columnas != 0
            ? separador + titulos + separador + filas + separador
            : separador + filas + separador;

    return resultado_final;
};









/* 
============================================
ÚSO DE EJEMPLO
============================================
*/

let titulos = ["Nombre", "Apellido", "Edad"],
    lista = [
        ["Tiago", "Pujia", 17],
        ["Ingrid", "Monsalve", 24],
        ["Octavio", "Egitto", 18],
    ];

console.log(imprimirTabla(lista, titulos));
console.log(imprimirTabla(lista));