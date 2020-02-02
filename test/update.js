const db = require('../data/mysql')

const novoUsuario = {
    nome: 'José Daniel Heszenhorn',
    email: 'jose.daniel@pitang.com',
    senha: '6510816851',
}


async function execute() {
    const { qtd } = await db('usuario').count('* as qtd').first()

    if (qtd === 0) {
        await db('usuario').insert(novoUsuario)
    }

    const { id } = await db('usuario').select('id').limit(1).first()

    await db('usuario')
        .where({ id })
        .update({ nome: 'Daniel Herszenhorn' })

    return await db('usuario').where({ id })
}

execute()
    .then(console.log)
    .catch(console.error)
    .finally(() => db.destroy())
