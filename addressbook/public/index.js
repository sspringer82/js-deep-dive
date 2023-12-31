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
  button.classList = 'delete';
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

function addEditButton(id, tr) {
  const td = document.createElement('td');
  const button = document.createElement('button');
  button.id = id;
  button.classList = 'edit';
  button.innerText = 'edit';
  td.appendChild(button);
  tr.appendChild(td);
}

function handleDelete() {
  document.querySelector('tbody').addEventListener('click', (event) => {
    if (event.target.classList[0] === 'delete') {
      const id = event.target.id;
      fetch(`http://localhost:8080/addresses/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        if (response.ok) {
          event.target.parentNode.parentNode.remove();
        }
      });
    }
  });
}

function handleEdit() {
  document.querySelector('tbody').addEventListener('click', async (event) => {
    if (event.target.classList[0] === 'edit') {
      const id = event.target.id;
      const response = await fetch(`http://localhost:8080/addresses/${id}`);
      const data = await response.json();
      Object.entries(data).forEach((entries) => {
        document.querySelector(`#${entries[0]}`).value = entries[1];
      });
    }
  });
}

function createRow(address, tbody) {
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
  addEditButton(address.id, tr);

  tbody.appendChild(tr);
}

document.addEventListener('DOMContentLoaded', () => {
  handleForm();

  handleDelete();
  handleEdit();

  const tbody = document.querySelector('tbody');
  fetch('http://localhost:8080/addresses')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((address) => createRow(address, tbody));
    });
});

function handleForm() {
  const form = document.querySelector('form');
  form.addEventListener('submit', async (event) => {
    const id = document.querySelector('#id').value;

    event.preventDefault();

    // daten sammeln
    const newAddress = {
      firstname: document.querySelector('#firstname').value,
      lastname: document.querySelector('#lastname').value,
      street: document.querySelector('#street').value,
      city: document.querySelector('#city').value,
      zip: document.querySelector('#zip').value,
      country: document.querySelector('#country').value,
    };

    let url = 'http://localhost:8080/addresses';
    let method = 'POST';
    if (id) {
      newAddress.id = id;
      url += '/' + id;
      method = 'PUT';
    }

    // daten zum server senden

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAddress),
    });
    if (!response.ok) {
      throw new Error('Could not save the data');
    }
    const savedData = await response.json();

    if (id) {
      document
        .querySelector('[id="' + id + '"]')
        .parentNode.parentNode.remove();
    }
    const tbody = document.querySelector('tbody');
    createRow(savedData, tbody);
  });
}
