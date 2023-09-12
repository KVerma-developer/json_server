const express = require("express");
const jsonServer = require("json-server");

const app = express();
const port = process.env.PORT || 8080;

// JSON Server Routers
const router1 = jsonServer.router("companyDetails.json");
const router2 = jsonServer.router("otherData.json");
const router3 = jsonServer.router("hr&CompanyContainer.json");

// Enable CORS for both routers
app.use("/api", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Mount the JSON Server Routers
app.use("/api", router1);
app.use("/api2", router2);
app.use("/hrAndCompany", router3);

app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});


// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("companyDetails.json");
// // const router1= jsonServer.router("companyDetails.json")
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

// server.use(middlewares);
// server.use(router);
// // server.use(router1);
// server.listen(port);