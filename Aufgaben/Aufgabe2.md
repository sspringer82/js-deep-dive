# Aufgabe 2 - CRUD

1. Erzeuge die CRUD-Endpunkte nutze dafür die folgenden Methoden des app-Objekts:
   1. app.get('/addresses', (request, response) => {...}) - Get all - GET /addresses
   1. app.get('/addresses/:id', (request, response) => {...}) - Get one - GET /addresses/1
   2. app.post('/addresses', (request, response) => {...}) - Create - POST /addresses
   3. app.put('/addresses/:id', (request, response) => {...}) - update - PUT /addresses/1
   4. app.delete('/addresses/:id', (request, response) => {...}) - delete - DELETE /addresses/1
2. Nutze für die Erzeugung der Antwort response.json(). Das übergebene Objekt bestimmt die Antwort an den Client
3. Definiere ein Array von Objekten außerhalb der Routing-Funktionen für die Datenhaltung
4. Um auf den Body eines Requests zuzugreifen (CREATE, UPDATE):
   1. `app.use(express.json())` - stellt euch im request-Objekt eine Eigenschaft `body` zur Verfügung
5. Um auf die Variablen im URL-Pfad zuzugreifen (GETONE, UPDATE, DELETE)
   1. `request.params.id`

```js
const data = [
  {id: 1, firstname: 'Klaus', lastname: 'Müller', street: '42 Main st', city: 'New York', zip: '12345', country: 'USA'},
  {id: 2, firstname: 'Lisa', lastname: 'Müller', street: '42 Main st', city: 'New York', zip: '12345', country: 'USA'}
]
```