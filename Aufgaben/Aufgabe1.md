# Aufgabe 1 - Backend setup

1. Neues Verzeichnis `addressbook`
2. `npm init -y`
3. in der package.json => `"type": "module"` für neues Modulsystem
4. `.gitignore` mit Inhalt `node_modules` erzeugen
5. `npm add express`
6. `index.js` erzeugen
7. Applikation starten: `node index.js` - im Browser `http://localhost:8080`
8. (optional): in der `package.json`
   1. `scripts: {"start": "node --watch index.js"}` - `npm start`



```js
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hallo Client');
});

app.listen(8080, () =>
  console.log('Server is listening to http://localhost:8080')
);
```