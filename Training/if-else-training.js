/**
 * Hier können Sie IF und ELSE trainieren
 * Am besten dazu den nodemon starten:
 * 
 * .\node_modules\.bin\nodemon Training\if-else-training.js
 * 
 * und die Ausgabe im Terminal beobachten.
 * 
 */

 //Die Zahl 1 wird zugewiesen an eine Variable x

 let x = undefined
 let y = 1

 if("GW11B".includes("11") &&"GW11B".startsWith("G")){
    console.log("Die Prüfung ist WAHR. ES werden die Anweisungen im Rumpf if ausgeführt")
}else{
    console.log("Die Prüfung ist FALSCH. ES werden die Anweisungen im Rumpf ELSE ausgeführt")
}



//20.If("GW11B".includes("11")) Die Prüfung ist wahr. Die Methode includes prüft,ob ein String einen anderen enthält.

//19.if("GW11B".endsWith("B")) Die Prüfung ist wahr. Die Methode endsWith prüft, ob ein String mit einem anderen String endet.

//18.if("GW11B".startsWith("GT"))Die Prüfung ist falsch. Die Methode "startsWith" prüft, ob ein String mit einem anderen String beginnt.

//17.if("GW11B".length) Die Prüfung ist wahr. Der Wert von ("GW11B".length) ist 5.

//16. if(undefined) Die Prüfung ist Falsch. Wenn ein Objekt nicht existiert ist es undefined.

//15.if(0>x||x<10) Logisches oder. Die Prüfung ist wahr, wenn die linke,oder die rechte oder beide Prüfungen wahr sind.

//14.if(0<x&&x>11) Logisches Und. Die Prüfung ist wahr, wenn beide Prüfungen wahr sind.

//13.if("") Die Prüfung ist falsch.

//12.if("Hannah") Die Prüfung ist wahr. Alle Zeichenketten(strings) sind wahr.Alle nicht leeren Zeichenketten sind wahr.

//11.if(23) Die Prüfung ist wahr. Alle Zahlen außer 0 sind wahr.

//10.If(0) Die Prüfung ist Falsch. 

//9.if(false) Die Prüfung ist falsch. Der Rumpf von if ist  unerreichabrer Code.

//8.if(true) Die Prüfung ist wahr. Der Ausdruck true ist auch true. Der Rumpf von else ist unerreichbarer Code.

//7.if (1===²1²) Prüfung auf Gleicheit des Wertes und Gleicheit des Typs. Die Prüfung ist falsch.

//6.if (0!=1) Prüfung auf ungleichheit. Die Prüfung ist wahr.

//5.if (0<=1) Prüfung auf kleiner gleich. Die Prüfung ist wahr.

//4. if (0>=1)Prüfung auf größer gleich. Die Prüfung ist falsch.

//3. if (0<1) Prüfung auf kleiner als. Die Prüfung ist wahr

//2. if(0>1)  Prüfung auf größer als. Die Prüfung ist falsch.

//1. if(1==1) Prüfung auf Gleicheit des Wertes. Die Prüfung ist wahr.