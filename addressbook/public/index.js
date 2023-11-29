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

  tbody.appendChild(tr);
}

document.addEventListener('DOMContentLoaded', () => {
  handleForm();

  handleDelete();

  const tbody = document.querySelector('tbody');
  fetch('http://localhost:8080/addresses')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((address) => createRow(address, tbody));
    });
});

function handleForm() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
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

    // daten zum server senden
    /*
    fetch('http://localhost:8080/addresses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAddress),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not save the data');
        }
        return response.json();
      })
      .then((savedData) => {
        // neue Zeile einfügen
        const tbody = document.querySelector('tbody');
        createRow(savedData, tbody);
      });
      */
    communicateWithServer(
      'http://localhost:8080/addresses',
      'POST',
      newAddress,
      (error, result) => {
        if (error) {
          throw new Error('whoops');
        }
        const tbody = document.querySelector('tbody');
        createRow(result, tbody);
      }
    );
  });
}

async function communicateWithServer(url, method, payload = null, callback) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (payload !== null) {
    options.body = JSON.stringify(payload);
  }
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      callback(new Error('Request Failed'));
    }
    const result = await response.json();
    callback(null, result);
  } catch (error) {
    callback(error);
  }
}
