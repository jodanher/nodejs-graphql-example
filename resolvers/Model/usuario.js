const uuid = require('uuid/v4')
const { usuarioService } = require('../../utils')

module.exports = {
    query: {
        usuarioLogado(parent, args, ctx, info) {
            return usuarioService.findByIndex(0)
        },
        usuarios(parent, { filtro }, ctx, info) {
            return usuarioService.findAll()
        },
        usuario(parent, { id }, ctx, info) {
            return usuarioService.search({ id })
        },
    },
    mutation: {
        novoUsuario(_, { usuario }) {
            return usuarioService.add({
                id: uuid(),
                ...usuario,
                perfil_id: '1',
                status: 'ATIVO'
            })
        },
        alterarUsuario(_, { filtro, usuario }) {
            return usuarioService.set(filtro, usuario)
        },
        excluirUsuario(_, { filtro }) {
            return usuarioService.remove(filtro)
        }
    }
}