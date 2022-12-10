var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log("hostname: " + q.host);
console.log("pathname: " + q.pathname);
console.log("query string: " + q.search);

var qs = q.query;
console.log("month: " + qs.month);