const uuid = require('uuid/v4')
const { perfilService } = require('../../utils')

module.exports = {
    query: {
        perfis(parent, args, ctx, info) {
            return perfilService.findAll()
        },
        perfil(parent, { filtro }, ctx, info) {
            return perfilService.search(filtro)
        },
    },
    mutation: {
        novoPerfil(_, { perfil }) {
            return perfilService.add({
                id: uuid(),
                ...perfil,
            })
        },
        alterarPerfil(_, { filtro, perfil }) {
            return perfilService.set(filtro, perfil)
        },
        excluirPerfil(_, { filtro }) {
            return perfilService.remove(filtro)
        },
    },
}