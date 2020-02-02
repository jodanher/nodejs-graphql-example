const db = require('../data/mysql')

// const novo = {
//     nome: "TESTE",
//     rotulo: "Teste"
// }

// db('perfil')
//     .insert(novo)
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => db.destroy())

const perfilSU = {
    nome: `root${Math.random()}`,
    rotulo: 'Super usuário',
}

db.insert(perfilSU).into('perfil')
    .then(res => res[0])
    .then(id => `Id ${id}`)
    .then(string => console.log(string))
    .catch(console.error)
    .finally(() => db.destroy())