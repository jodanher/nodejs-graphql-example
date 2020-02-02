const { usuarios } = require('../data/mysql')

function indiceUsuario(filtro) {
    const { id, email } = filtro
    if (id) {
        return usuarios.findIndex(u => id === u.id)
    } else if (email) {
        return usuarios.findIndex(u => email === u.email)
    }

    return -1
}

function existeUsuarioComEmail({ id, email }) {
    return usuarios.some(u => u.id !== id & u.email === email)
}

module.exports = {
    findAll() {
        return usuarios
    },
    findByIndex(i) {
        return usuarios[i]
    },
    search(filtro) {
        return usuarios[indiceUsuario(filtro)]
    },
    add(usuario) {
        if (existeUsuarioComEmail(usuario)) {
            throw new Error('E-mail cadastrado')
        }

        usuarios.push(novo)
        return usuario
    },
    set(filtro, usuario) {
        const i = indiceUsuario(filtro)
        const usuarioDB = usuarios[i]
        if (existeUsuarioComEmail({ ...filtro, id: usuarioDB.id })) {
            throw new Error('E-mail cadastrado')
        }

        usuarios.splice(i, 1, {
            ...usuarioDB,
            ...usuario,
        })
        return usuarios[i]
    },
    remove(filtro) {
        const i = indiceUsuario(filtro)
        if (i !== -1) {
            const excluido = usuarios.splice(i, 1)
            return excluido[0]
        }
    },
}