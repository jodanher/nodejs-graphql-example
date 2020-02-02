
exports.up = function (knex) {
    return knex.schema.createTable('usuario_perfil', table => {
        table.integer('usuario_id').unsigned()
        table.integer('perfil_id').unsigned()

        table.foreign('usuario_id').references('usuario.id')
        table.foreign('perfil_id').references('perfil.id')

        table.primary(['usuario_id', 'perfil_id'])
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuario_perfil')
};
