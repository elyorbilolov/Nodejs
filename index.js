/* jshint esversion: 6 */
//index.js
const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => {
  console.log("logging: ", data);
});

logger.log("GET", "/admin/dashboard");
logger.log("POST", "/produtc/add");
logger.log("DELETE", "/users/23656");
