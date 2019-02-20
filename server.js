 //Das ist eineinzeiliger Kommentar
 // Das ist eineinzeiliger Kommentar.

 /*
 Das
 ist
 ein
 mehrzeiliger
 Kommentar
 */

 const bodyparser = require('body-parser')

 const express =require ('express')
 //express vereinfacht die Programmierung
 // const= konstant

 const app = express()
 //konstante app nimmt App auf und repräsentiert den 
 // Server mit all seinen Funktionen und Einstellungen.
 //App objekt ist das Bindeglied zwischen node und dem Server

app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended: true}))
// funktion auf die App (anweisung)
//soll den Bodyparser einbinden

app.use (express.static('public'))

const server = app.listen(process.env.PORT  || 3000,() => {
    console.log('der Server ist erfolgreich gestartet auf Port %s', server.address().port)
})
// der Client gibt Befehl ein und Server lauscht
//server macht nichts außer lauschen wenn request
// reikommt schickt er ein response

app.get('/',(req, res, next)=>{
    res.render('index.ejs',{
        
    })
})