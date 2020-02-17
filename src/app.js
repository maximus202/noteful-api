const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const foldersRouter = require('../folders/folders-router')
const notesRouter = require('../notes/notes-router')

const App = (options = {}) => {
    const { environment = 'development' } = options
    const app = express()

    const morganOption = (environment === 'production')
        ? 'tiny'
        : 'common';

    app.use(morgan(morganOption))
    app.use(helmet())
    app.use(cors())

    app.use('/api/folders', foldersRouter)
    app.use('/api/notes', notesRouter)

    app.use(function errorHandler(error, req, res, next) {
        let response
        if (environment === 'production') {
            response = { error: { message: 'server error' } }
        } else {
            console.error(error)
            response = { message: error.message, error }
        }
        res.status(500).json(response)
    })
    return app
}




module.exports = App