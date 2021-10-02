const request = require("./node_modules/request");
const breed = process.argv[2]

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, resp, body) => {
  if (error) {
    console.log('error: ', error.message)
    return;
  }

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  
});
// node breedFetcher.js sib
// node breedFetcher.js tomcat
