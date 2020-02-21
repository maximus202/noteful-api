const knex = require('knex')
const App = require('./app')

const { PORT, DATABASE_URL, NODE_ENV: environment } = require('./config')

const database = knex({
    client: 'pg',
    connection: DATABASE_URL
})

const options = { environment }
const app = App(options)

app.set('db', database)

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})