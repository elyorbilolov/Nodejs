//logger.js

const EventEmitter = require("events");
const uuid = require("uuid");

class logger extends EventEmitter {
  log(method, route) {
    this.emit("message", { id: uuid.v4(), method, route });
  }
}

module.exports = logger;
