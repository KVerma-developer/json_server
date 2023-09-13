// server.listen(port);
//how many data or object you want to show in page
//https://hr-and-company.onrender.com/hrAndCompany?_page=1&_limit=2
//for search
//https://hr-and-company.onrender.com/hrAndCompany?q=emp124


const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("hr&CompanyContainer.json");
// const router1= jsonServer.router("companyDetails.json")
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);
server.listen(port);