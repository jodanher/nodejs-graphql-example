
exports.up = function (knex) {
    return knex.schema.createTable('perfil', table => {
        table.increments('id').primary()
        table.string('nome').notNull().unique()
        table.string('rotulo').notNull()
    }).then(function () {
        return knex('perfil').insert([
            { nome: 'ADM', rotulo: 'Administrador' },
            { nome: 'USU', rotulo: 'Usuário' },
            { nome: 'COM', rotulo: 'Comum' },
        ])
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('perfil')
};
