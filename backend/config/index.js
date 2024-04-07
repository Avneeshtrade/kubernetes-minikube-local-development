const { DB_NAME, DB_PORT, DB_USERNAME, DB_PASSWORD, ENV, DB_HOST } = process.env
module.exports = {
    dev: {
        db: {
            name: DB_NAME,
            port: DB_PORT,
            username: DB_USERNAME,
            password: DB_PASSWORD,
            host: DB_HOST
        }
    },
    env: ENV
}