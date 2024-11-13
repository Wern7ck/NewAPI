const { Router } = require("express");

const usersRouter = require("./users.routes");
const sessionsRouter = require("./sessions.routes")
const moviesRouter = require("./movies.routes");
const tagsRouter = require("./Tags.routes")


const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/movies", moviesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;