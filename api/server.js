const express = require("express");
const server = express();
const helmet = require("helmet");
const projectsRouter = require("./projects/projects-router");
const actionsRouter = require("./actions/actions-router");

server.use(express.json());
server.use(helmet());

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to the the dark side!</h1>
        <p>where all your dreams come true!</p>
      `);
  });
  module.exports = server;
