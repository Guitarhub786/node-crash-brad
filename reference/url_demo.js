const url = require('url');

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString()); // same thing //mywebsite.com:8080
// Host (root domain)
console.log(myUrl.host);
// Hostname
console.log(myUrl.hostname); // doesnt inlude the port //mywebsite.com
// Pathname
console.log(myUrl.pathname); // /hello.html
// Serialized query
console.log(myUrl.search);
// Params object
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.search);        // ?id=100&status=active&abc=123
console.log(myUrl.searchParams);
// Loop through params (each value pair)
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

