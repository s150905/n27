const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'Training')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Wenn localhost:3000/klasse-objekt-ejs-trainieren aufgerufen wird ...

app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', {                                      
    breite: rechteck.breite,
    laenge: rechteck.laenge,
    geschlecht: schueler.geschlecht,
    vorname: schueler.vorname,
    alter: schueler.alter,
    name: fussballer.name,
    verein: fussballer.verein,
    position: fussballer.position,
    marke: handy.marke,
    modell: handy.modell,
    preis: handy.preis



    })  

})

//Eine KLasse ist ein Bauplan.
//Ein Objekt ist die Umsetzung auf Grundlage des Bauplans.
//Alle Objekte eines Bauplans haben die selben Eigenschaften, aber möglicherweise unterschiedliche Eigenschaftswerte.

//Klassendefinition
//****************** 

class Rechteck {
    constructor() {
        this.laenge
        this.breite
    }
}

class Schueler{
constructor(){
    this.geschlecht
    this.vorname
    this.alter

    }  
}

class Fussballer{
    constructor(){
        this.name
        this.verein
        this.position
    }
}

class Handy{
    constructor(){
        this.marke
        this.modell
        this.preis
    }
}

//Deklaration eines Rechteck-Objekts vom Typ Rechteck
//Deklaration= Bekanntmachung, dass es ein Objekt vom Typ Rechteck geben soll.
// let rechteck = ...
//Wichtig: Klasse schreiben wir groß, das Objekt schreiben wir klein
//Instanziierung erkennt man am reservierten Wort "new".
//Instanziierung reserviert Speicherzellen für das soeben deklarierte Objekt.

//...new Rechteck()

//Initialisierung belegt die reserierten Speicherzellen mit konkreten Eigenschaftswerten.

//rechteck.breite = 3

let rechteck = new Rechteck()
rechteck.breite = 3
rechteck.laenge = 2

console.log("Länge:"+rechteck.laenge)
console.log("Breite:"+rechteck.breite)
console.log(rechteck)

let schueler = new Schueler()
schueler.geschlecht = "w"
schueler.vorname = "Petra"
schueler.alter = 16

let fussballer = new Fussballer()
fussballer.name = "Manuel Neuer"
fussballer.verein = " FC Bayern München"
fussballer.position = "Tor"

let handy = new Handy()
handy.marke = "Samsung"
handy.modell = "S9"
handy.preis = "1356€"





