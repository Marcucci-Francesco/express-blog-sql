Ex-express-blog-sql
===
Esercizio di interazione tra Express e MySQL
## Consegna
 Prendiamo le API precedentemente create per il vostro blog ed aggiungiamo la persistenza tramite la connessione a un DB
1. Milestone 1
 - Importiamo il db in allegato su MySQL Workbench
 - Installiamo il client **mysql2** con `npm i mysql2` nell’app Express
 - Creiamo un file di configurazione per connettere il database
 - Inseriamo un console.log nella logica di connessione e proviamo ad avviare l’applicazione per verificare che non ci siano errori.
2. Milestone 2
 - Facciamo sì che l’API di INDEX restituisca la lista di post recuperata dal database in formato JSON
 - Verifichiamo su Postman che la risposta sia corretta
3. Milestone 3
 - Facciamo sì che l’API di DESTROY permetta di eliminare un post dal database
 - Verifichiamo su Postman che la chiamata non dia errore e risponda 204
 - Verifichiamo su MySQL Workbench che il post venga effettivamente rimosso
4. Milestone 4
 - Facciamo sì che l’API di SHOW restituisca il post desiderato in formato JSON
 - Verifichiamo su Postman che la risposta sia corretta

 ## Bonus
  - Far sì che la SHOW restituisca il post comprensivo di tag, recuperandoli grazie alla relazione tra post e tags, esistente sul database
