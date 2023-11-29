# Aufgabe 3 - Refactoring

1. Routing auslagern
   1. Neues Verzeichnis anlegen `addresses`
   2. Neue Datei `addresses/index.js`
   3. Express Router instanziieren `const router = express.Router();`
   4. Routen definieren `router.get(/, (request, response) => {})...`
   5. Router exportieren
   6. Router in der index.js einbetten: `app.use('/addresses', router)`
2. Request/Response handling auslagern
   1. Neue Datei erzeugen `addresses/controller`
   2. Die Routen-Callbacks in die neue Datei auslagern und in den Router integrieren 
3. Datenhaltung auslagern
   1. Neue Datei erzeugen `addresses/model`
   2. Die Datenhaltung (alles was mit `data` zu tun hat) in die neue Datei auslagern und sauber in Funktionen verpacken und diese exportieren und im controller einbinden.