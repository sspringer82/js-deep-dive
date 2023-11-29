function createCell(content, tr) {
  const td = document.createElement('td');
  td.innerText = content;
  tr.appendChild(td);
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.innerText = 'click me';
  button.addEventListener('click', (event) => {
    console.log(event.target.parentNode);
  });
  document.body.appendChild(button);

  const tbody = document.querySelector('tbody');
  fetch('http://localhost:8080/addresses')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((address) => {
        const tr = document.createElement('tr');
        /*
        Object.entries(address)
          .filter((entry) => entry[0] !== 'id')
          .forEach(([, content]) => {
            createCell(content, tr);
          });
          */

        createCell(address.firstname, tr);
        createCell(address.lastname, tr);
        createCell(address.street, tr);
        createCell(address.city, tr);
        createCell(address.zip, tr);
        createCell(address.country, tr);
        tbody.appendChild(tr);
      });
    });
});
