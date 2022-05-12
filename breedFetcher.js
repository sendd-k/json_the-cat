const request = require('request');
const breed = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
// console.log(breed)

request(`${url}`, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit();
  }
  const data = JSON.parse(body);
  if (body.length === 2) {
    console.log('Breed not found');
  } else {
    for (let i = 0; i < data.length; i++) {
      console.log('description: ', data[i].description);
    }
  }
});