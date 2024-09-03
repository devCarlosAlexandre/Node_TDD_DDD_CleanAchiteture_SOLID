import { Express } from "express"
import { bodyParser } from "../middllewares/body-parser"
import { cors } from "../middllewares/cors";

export default (app: Express): void => {
    app.use(bodyParser);
    app.use(cors);
}