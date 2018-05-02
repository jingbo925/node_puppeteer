import bodyParser from "koa-bodyparser";
import logger from 'koa-logger'
export const addBodyParset = app => {
    app.use(bodyParser())
}

export const addLogger = app => {
    app.use(logger())
}