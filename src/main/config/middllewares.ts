import { Express } from "express"
import { bodyParser } from "../middllewares/body-parser"
import { cors } from "../middllewares/cors";
import { contentType } from "../middllewares/content-type";

export default (app: Express): void => {
    app.use(bodyParser);
    app.use(cors);
    app.use(contentType);
}