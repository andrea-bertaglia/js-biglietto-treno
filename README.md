# Programma per il calcolo del prezzo del biglietto del treno

---

## Testo dell'esercizio

Il programma dovrà chiedere all'utente:

- il numero di chilometri che vuole percorrere
- l'età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

> Il prezzo è determinato secondo queste regole:
>
> - il prezzo del biglietto è definito in base ai km (0.21 € al km)
> - va applicato uno sconto del 20% per i minorenni
> - va applicato uno sconto del 40% per gli over 65

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

---

## Svolgimento

### 1. Raccolta dati

- [x] Chiedere all'utente il numero dei km da percorrere
- [x] Chiedere all'utente l'età del passeggero

### 2. Logica

- [x] Dichiarazione della variabile sconto
- [x] Dichiarazione della variabile prezzo netto
- [x] Dichiarazione della variabile prezzo lordo e calcolo
      Prezzo lordo = 0.21 x km inseriti
- [x] Controllo del tipo di sconto da applicare
    Se (l'età inserita è < 18)
    calcolo sconto = prezzo lordo x 20 / 100
    Altrimenti se (l'età inserita è > 65)
    calcolo sconto = prezzo lordo x 40 / 100
<!-- Altrimenti
    calcolo sconto = prezzo lordo * 0 / 100 -->
- [x] Calcolo del prezzo netto (prezzo lordo - sconto)
- [x] Trasformazione del prezzo in formato con 2 decimali

### 3. Output

- [x] Preparazione del messaggio con il totale
- [x] Stampa in pagina del totale
