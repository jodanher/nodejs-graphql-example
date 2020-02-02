const { query: usuarioQuery } = require('../Model/usuario')
const { query: perfilQuery } = require('../Model/perfil')

module.exports = {
    ...usuarioQuery,
    ...perfilQuery,
}