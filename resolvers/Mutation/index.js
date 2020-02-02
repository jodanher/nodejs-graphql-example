const { mutation: usuarioMutation } = require('../Model/usuario')
const { mutation: perfilMutation } = require('../Model/perfil')

module.exports = {
    ...usuarioMutation,
    ...perfilMutation,
}