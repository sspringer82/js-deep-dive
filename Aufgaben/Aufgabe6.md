# Aufgabe 6 - Datensätze löschen

1. füge in jede Zeile einen Button ein
2. Beschrifte den Button mit dem Text "löschen"
3. Füge einen `click` Listener hinzu
4. Innerhalb des Click-Listeners schicke einen DELETE-Request für den Datensatz an den Server
5. Sobald der Datensatz auf dem Server gelöscht ist, lösche auch die Tabellenzeile (Tipp: event.target.parentNode.parentNode.remove())

```js
fetch(`http://localhost:8080/addresses/${id}`, {
  method: 'DELETE', 
  headers: {'Content-Type': 'application/json'}
}).then(response => {
  if (response.ok) {
    // Zeile löschen
  }
})
```