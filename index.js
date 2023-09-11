const jsonServer = require("json-server");
const server = jsonServer.create();
const router1 = jsonServer.router("db.json");
const router = jsonServer.router("companyDetails.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);

// Create routes for the two JSON files
server.use("/api", router1); // Access data from "db.json" at /api
server.use("/company", router); // Access data from "companyDetails.json" at /companies

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
