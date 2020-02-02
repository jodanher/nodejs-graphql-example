const db = require('../data/mysql')

db.select('nome', 'id').from('perfil').where({ id: '2' }).limit(2).offset(0).orderBy('id')
    .then(res => console.log(res))
    .finally(() => db.destroy())
