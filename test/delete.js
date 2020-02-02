const db = require('../data/mysql')


async function execute() {
    const { qtd } = await db('usuario').count('* as qtd').first()

    const filter = await db('usuario').select('id').limit(1).first()
    if (qtd > 0) {

        await db('usuario').where(filter).delete()
    }

    return await db('usuario').where(filter)
}

execute()
    .then(console.log)
    .catch(console.error)
    .finally(() => db.destroy())
