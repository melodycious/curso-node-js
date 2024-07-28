/* const os = require('node:os')

console.log('Informacion del sistema operativo:')
console.log('--------------------------')
console.log('Nombre del SO:', os.platform())
console.log('Version del SO', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs:', os.cpus())
console.log('Memoria libre:', os.freemem() / 1024 / 1024)
console.log('Memoria total:', os.totalmem() / 1024 / 1024) */

const fs = require('node:fs')

console.log('Leyendo el primer archivo...')

const text = fs.readFile('./clase-1/archivo.txt', 'utf-8', (err, text) => {
    console.log(text)
})

console.log('haciendo cosas')

const testingTest = fs.readFile('./clase-1/archivo2.txt', 'utf-8', (err, testingTest) => {
    console.log(testingTest)
})



