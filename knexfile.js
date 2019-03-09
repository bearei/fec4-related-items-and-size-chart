module.exports = {
    development: {
        client: 'mysql',
        connection: {
            user: 'root',
            // database: 'test',
            database: 'testdb',
        },
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        }
    }
} 