var colors = require('colors');


//destructuración
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
// console.log(process.argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo.yellow}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];