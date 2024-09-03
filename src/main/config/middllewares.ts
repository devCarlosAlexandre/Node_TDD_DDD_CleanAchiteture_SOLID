import { Express } from "express"
import { bodyParser } from "../middllewares/body-parser"

export default (app: Express): void => {
    app.use(bodyParser);
}