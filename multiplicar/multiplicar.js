//requireds

const fs = require('fs');
var colors = require('colors');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} *  ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`El archivo tabla-${base}.txt ha sido creado!`)
        });
    });
}

//valor por defecto en los parametros por si no recibe valor
let listarTabla = (base, limite = 10) => {

    console.log('======================================='.red);
    console.log(` tabla de ${base}`.red);
    console.log('======================================='.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} *  ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}