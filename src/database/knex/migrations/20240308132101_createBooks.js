
exports.up = (knex) => {
    return knex.schema.createTable("books", (table) => {
        table.increments('id').primary();
        table.string("title").notNullable();
        table.string("author").notNullable();
        table.string("numPag").notNullable();
        table.string("category").notNullable();
        table.boolean("available").defaultTo("true");

        table.timestamp('dateCreate').defaultTo(knex.fn.now());
        table.timestamp('dateUpdate').defaultTo(knex.fn.now());
    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("books")
};
