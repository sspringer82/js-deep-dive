function createCell(content, tr) {
  const td = document.createElement('td');
  td.innerText = content;
  tr.appendChild(td);
}

function addDeleteButton(id, tr) {
  const td = document.createElement('td');
  const button = document.createElement('button');
  button.id = id;
  button.innerText = 'löschen';
  // button.addEventListener('click', (event) => {
  //   fetch(`http://localhost:8080/addresses/${id}`, {
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then((response) => {
  //     if (response.ok) {
  //       event.target.parentNode.parentNode.remove();
  //     }
  //   });
  // });
  td.appendChild(button);
  tr.appendChild(td);
}

function handleDelete() {
  document.querySelector('tbody').addEventListener('click', (event) => {
    const id = event.target.id;
    fetch(`http://localhost:8080/addresses/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.ok) {
        event.target.parentNode.parentNode.remove();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  handleDelete();
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

        addDeleteButton(address.id, tr);

        tbody.appendChild(tr);
      });
    });
});
