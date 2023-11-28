# JavaScript Deep Dive

## Links
- Entwicklungsumgebungen:
  - https://code.visualstudio.com/
  - https://www.jetbrains.com/de-de/webstorm/
- https://nodejs.org/en
- Node Version Manager https://github.com/nvm-sh/nvm
- Paketmanager:
  - https://www.npmjs.com/
  - https://yarnpkg.com/
  - https://pnpm.io/
  - https://nodejs.org/dist/latest-v21.x/docs/api/corepack.html
- https://expressjs.com/
- https://npmtrends.com/

## init JS project

1. `npm init` => package.json - immer committen!!! (alternativ: `npm init -y` alle Fragen mit "ja" beantworten)
   1. name: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#name
   2. version: https://semver.org/lang/de/
   3. license: https://choosealicense.com/
2. `.gitignore` - node_modules
3. Einstieg erzeugen: `index.js`
4. Pakete installieren: `npm add express`
   1. node_modules: hier liegen die Pakete (nicht committen! nicht modifizieren!)
   2. package-lock.json: Infos über alle Pakete (Version, Quelle, Checksum) - unbedingt committen!
   3. package.json: dependencies - Paket mit Versionsnummer eingetragen

## project checkout
1. Quellcode laden (download zip des Repos oder git clone)
2. ins Verzeichnis wechseln (`cd js-deep-dive/node-basic`)
3. Abhängigkeiten installieren: `npm install` 
4. Prozess starten: `node index.js` alternativ: `package.json` > `scripts` > `start` => auf der Konsole `npm start`