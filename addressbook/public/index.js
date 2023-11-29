const h1 = document.querySelector('h1'); // <h1>
const h2 = document.querySelector('.heading'); // <h1 class="heading">
const h3 = document.querySelector('#heading'); // <h1 id="heading">

const div = document.createElement('div');
div.innerText = 'Hallo Client';
document.body.appendChild(div);

fetch('http://localhost:8080/addresses', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  // body: JSON.stringify({}),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
