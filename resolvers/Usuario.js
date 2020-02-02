const { perfilService } = require('../utils')

module.exports = {
    perfil(usuario) {
        return perfilService.findById(usuario.perfil_id)
    },
    salario(usuario) {
        return usuario.salario_real
    }
}