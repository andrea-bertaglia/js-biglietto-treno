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

- [ ] Chiedere all'utente il numero dei km da percorrere
- [ ] Chiedere all'utente l'età del passeggero

### 2. Logica

- [ ] Dichiarazione della variabile sconto
- [ ] Dichiarazione della variabile prezzo lordo e calcolo
      Prezzo lordo = 0.21 \* km inseriti
- [ ] Controllo del tipo di sconto da applicare
    Se (l'età inserita è < 18)
    calcolo sconto = prezzo lordo _ 20 / 100
    Altrimenti se (l'età inserita è > 65)
    calcolo sconto = prezzo lordo _ 40 / 100
  <!-- Altrimenti
      calcolo sconto = prezzo lordo * 0 / 100 -->
- [ ] Calcolo del prezzo netto (prezzo lordo - sconto)
- [ ] Trasformazione del prezzo in formato con 2 decimali

### 3. Output

- [ ] Preparazione del messaggio con il totale
- [ ] Stampa in pagina del totale
