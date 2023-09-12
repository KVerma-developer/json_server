const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("companyDetails.json");
const router2 = jsonServer.router("otherData.json"); 
const hrAndCompany = jsonServer.router("hr&CompanyCotainer.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);

// Use multiple routers
server.use("/hr&company_container", router); // Use the first JSON file under the /api route
server.use("/api2", router2); // Use the second JSON file under the /api2 route
server.use("/hrAndCompany", hrAndCompany); // Use the second JSON file under the /api2 route

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
