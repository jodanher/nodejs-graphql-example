const { perfis } = require('../data/mysql')

function indice(field, value, lista) {
    return lista.findIndex(o => o[field] === value)
}

function indicePerfil({ id, nome }) {
    if (id) {
        return perfis.findIndex(p => p.id === id)
    } else if (nome) {
        return perfis.findIndex(p => p.nome === nome)
    }

    return -1
}

function existPerfilName({ id, nome }) {
    return perfis.some(p => p.id !== id && p.nome === nome);
}

module.exports = {
    findAll() {
        return perfis
    },
    findById(id) {
        return perfis[indice('id', id, perfis)]
    },
    search(filtro) {
        return perfis[indicePerfil(filtro)]
    },
    add(perfil) {
        if (existPerfilName(perfil)) {
            throw new Error('Nome cadastrado')
        }

        perfis.push(perfil)
        return perfil
    },
    set(filtro, perfil) {
        const i = indicePerfil(filtro)
        const perfilDB = perfis[i]
        if (existPerfilName({ ...filtro, id: perfilDB.id })) {
            throw new Error('E-mail cadastrado')
        }

        perfis.splice(i, 1, {
            ...perfilDB,
            ...perfil,
        })
        return perfis[i]
    },
    remove(filtro) {
        const i = indiceUsuario(filtro)
        if (i !== -1) {
            const excluido = perfis.splice(i, 1)
            return excluido[0]
        }
    },
}