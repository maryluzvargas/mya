//comentario simple


/*
comentarios en varias lineas
m
y
m
m
*/ 

var NumeroAleatorio = parseInt((Math.random()*100)+1);
var NumPotencia = Math.pow(10,3);
var Logaritmo = Math.log10(1000);

console.log("probando el aleatorio: "+NumeroAleatorio)


// alert("Algoritmos en base 10 de mil es: "+ Logaritmo);

var Listas=["Maryluz","andres","Marcela"]
var Edad=[15,17,23]

console.log(Listas[1]); //muestra en la consola el nombre "andres" 


var casas = [
    {ViveAqui:false,Direccion:"cl 26"},
    {ViveAqui:true,Direccion:"mz e cs 19"}


]
var estudiantes={ 
    Nombre: "maryluz",
    Apellido: "vargas",
    Edad: 26,
    Direccion: "Cl 179 6 64" ,
    hogares: casas
}
console.log(estudiantes);

for (var i = 0; i < 50; i++) {
    console.log(i); 
}
for (var i = 0; i <= 50; i=i+2) {
    console.log(i);   
}
for (var i = 0; i < Listas.length; i++) {
    console.log(Listas[i]);
}     

for (var indice in Listas) {
    console.log(indice);    
}

for (var valor of Listas) {
    console.log(valor);    
}
var mifuntion=function(arg1,arg2,arg3){
    return arg1+arg2+arg3;
}
console.log(mifuntion(1,2,3));
console.log(mifuntion("a",2,4));
var listaPalindrome=["Somos",
"Ligar es ser agil",
"Oso",
"Arañara",
"Reconocer",
"Sometemos",
"Aibofobia",
"Oro",
"Se es o no se es",
"Se laminan animales",
"Anita la gorda lagartona no traga la droga latina",
"Odio la luz azul al oido",
"Amo la pacifica paloma",
"O rey  o joyero",
"Oiras orar a Rosario",
"Sor Rebecca hace berros",
"Anna",
"Yo de lo minimo le doy",
"A ti no  bonita",
"Anita lava la tina",
"Oi lo de mama  me dolio",
"Sometamos o matemos",
"La ruta natural",
"Isaac no ronca asi",
"Aman a Panama",
"82228 (un numero que es palindromo  pero tambien representa el numero de palindromos dados por el pianista Victor Carbajo)",
"¿Acaso comi mocos aca?",
"Asi le follo Felisa",
"A ser prosa ¡sorpresa!",
"No di eso  Poseidon",
"¡Otro coito  tio corto!",
"¡a babor! Ojete jorobaba",
"Nazi: ni vida divinizan",
"“A Dubai cedere” decia Buda",
"A mi monogamo mago no mima",
"Arroz a la dama da la zorra",
"Ajos alojaba bajo la soja",
"Anais repuso su persiana",
"Amaba la rosa a sor Alabama",
"Soñare arte de traer años",
"A la jirafa sana  safari jala",
"Alli  ni cocina ni cocinilla",
"Anularemos a la somera luna",
"Asi rimara poeta ateo para mi risa",
"O partes ese culo  o luces ese trapo",
"A tu padre le traere arte  lerda puta",
"Romano cagado coloco daga con amor",
"Se va su sonoro mozo moro  no sus aves",
"Siete melones al glase no le meteis",
"Su rival fuma cosas o camufla virus",
"Adan no catara banana barata con nada",
"Amigo no gima",
"Alli ves  Sevilla",
"Ali tomo tila",
"Arde ya la yedra",
"Alla cae diagrama y amarga idea calla",
"Ana  ilusa  atara la mala rata a su liana",
"Asi  Maria  raparas a Sara para ir a misa",
"La ruta nos aplica facil paso natural",
"No era mareo ni era marein  o era mareon",
"Oca pedorra jodio roido jarro de Paco",
"Sere ya soledad abobada de los ayeres",
"Yo he dado mala lana anal a la moda de hoy",
"Abajo mortecina madama ni cetro mojaba",
"Da del osado tocologo loco toda soledad",
"Adan no cebara alli racana vacia lusa rapaza para su laica vana carilla arabe con nada",
"Note como solo con amor la osa pelada mamada le paso al romano coloso moceton",
"Anote como Jose  de sobarles el rabo  se desojo  mocetona",
"Ella te dara detalle",
"Edipo lo pide",
"echele leche",
"Atar a la rata",
"Abuson  aca no suba",
"Adan no calla con nada",
"animo Romina",
"Odiosa  ¿has oido?",
"¿Subo tu auto o tu autobus?",
"Si  le dare una lanosa medalla de mason a la nuera de Lis",
"O sea  ¡¿ese peon azul  alado  no da la luz a Noe pese a eso?!",
"Reviver",
"Arenera",
"Recocer",
"Rapar",
"¡A la gorda drogala!",
"No deseo yo ese don",
"No traces en ese carton",
"La tomo como tal",
"atale  demoniaco Cain  o me delata",
"Anas uso tu auto Susana",
"Eso lo dira mi marido  lo se",
"Sarita Sosa es idonea odiseas o satiras",
"¡Y el alababa la ley!",
"Yo soy augur uruguayo  voy alla  alla voy. Augur uruguayo soy",
"Alli ceso tu sed  ¿Oyes eso  Jair amada? ¿Has oido a la odiosa hada Maria Jose? Se yo de su tosecilla",
"Sorbi libros",
"Somos asomos",
"A la luna dañad  anulala",
"Oso come cena  mas amanece mocoso",
"La turba brutal",
"A la ruda mona  tal platano  madurala",
"Nace por otoño  toro pecan",
"agil ligar  fragil liga.",
"Aire bisoño terso os retoño Siberia.",
"Raido sea mi cutis si tu cima es odiar.",
"A Jorge no da ese dogo deseado negro  ¡ja!",
"Salome  me molas.",
"Soborno con robos.",
"Amo idiota  mato idioma.",
"Al amar  aporto otro par ¡Amala!",
"O bebo lo vivo o vivo lo bebo.",
"Ame o poema."];
for(frace of listaPalindrome){
  console.log(palindromos(frace));
}

/*function test(){
    var p = document.getElementById("txtPalabra").value;
    if (palindromos(p)) {
        alert("Si es palindromo");
    }else{
        alert("NO es palindromo");
    }
}*/

function palindromos(letras) {
    var x1= letras.replace(/ /g,"").toUpperCase().split("").reverse();
    var x2=letras.replace(/ /g,"").toUpperCase().split(""); 
    for (var i = 0; i < x1.length; i++) {
        if (x1[i]!=x2[i]) {
            return false;
        }
    }
    return true;
}