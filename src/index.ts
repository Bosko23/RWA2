import {Igrac} from "./igrac"


const i1:Igrac=new Igrac("Curry",30,0);
const i2:Igrac=new Igrac("Lilard",0,0);
const i3:Igrac=new Igrac("Harden",11,0);
const i4:Igrac=new Igrac("Doncic",77,0);
const i5:Igrac=new Igrac("James",23,0);

Promise.all([
    i1.trci(),
    i2.trci(),
    i3.trci(),
    i4.trci(),
    i5.trci(),
]).then(array=>{
    array.sort((a:Igrac,b:Igrac)=> a.getBrojPogodjenih() > b.getBrojPogodjenih() ? 1 : 0);
    console.log(array);
    console.log(`Pobednik je ${array[0].getIme()} sa brojem dresa ${array[0].getBrojDresa()}. Pogodio je ukupno  ${array[0].getBrojPogodjenih()} `);
})