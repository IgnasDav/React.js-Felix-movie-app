import logger from "./logger";
import { apiMiddleware } from "redux-api-middleware";

const allMiddlewares = [logger, apiMiddleware];

export default allMiddlewares;
