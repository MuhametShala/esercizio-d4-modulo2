/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
 */
/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

  /* let dispari=[];

  for (let index = 0; index <= 100; index++) {
    if (index%2!==0){
      dispari.push(index);
    }
  }
    console.log(dispari); */
   

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

 /*  let pari=[1,2,4,5,8,10,22,15,45,44];

  for (let index = 0; index <= pari.length; index++) {
    if (pari[index]%2===0){
    console.log(pari[index]);
  }

  }; */
    


/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */
/* 
   let array=[2,6,4,22,55,77,56,32];
   let sum=0;
   for(let i=0;i<array.length;i++) {
    sum+=array[i];
   }
   console.log(sum); */


   

/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/
/* let numbers=[2,6,4,22,55,77,56,32];

for (let index = 0; index < numbers.length; index++) {
  numbers[index]=numbers[index]+1;
}
console.log(numbers); */
/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

/* let numeri = [1, 7, 11, 12, 15, 56, 78, 90, 1000, 123, 150, 60, 4, 6];
for (let index = 0; index < numeri.length; index++) {
  if (numeri[index] % 2 === 0) {
      numeri.pop(numeri[index])
  }
}
console.log(numeri) */

/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */


/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
/* let lista=["ciao","stringadue","stringa"];

for (let index = 0; index < array.length; index++) {
  if(lista[index]=="");
  
}
console.log([Math.floor[Math.randomparseInt[lista[index]]]]); */


/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

/* let lista=[1,2,3,4,5];

lista.reverse();
console.log(lista); */

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/
/* let lista=[1,4,3,55,75,38];

console.log("Max:"+Math.max.apply(null, lista)); */


/* /* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
/* */ const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
] 

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

/*  let filmPiùVecchio= movies[0];

 for (let index = 0; index < movies.length; index++) {
   if (parseInt(movies[index].Year) < parseInt(filmPiùVecchio.Year)) {
    filmPiùVecchio = movies[index];
   }
 }
 console.log(filmPiùVecchio); */

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

/* let numero = movies.length;
console.log(numero); */

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
/* for (let index = 0; index < movies.length; index++) {
  if(movies[index].Title<=movies[index].Title){
    console.log(movies[index].Title)
  }
  
} */



/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
/* let thisMilleniumFilm=[];
let currentEra = 2000;
for (let index = 0; index < movies.length; index++) {
  if(parseInt(movies[index].Year)>=currentEra){
    thisMilleniumFilm.push(movies[index]);
  }

  }
  console.log(thisMilleniumFilm) */



/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
/*  const id = 'tt0355702' 
 for (let index = 0; index < movies.length; index++) {
  if(movies[index].imdbID===id){
    console.log(movies[index]);
  }
 } */

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
/* let sum=0;
for (let index = 0; index < movies.length; index++) {
  sum+=parseInt(movies[index].Year);
}
console.log(sum); */



/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
/* let givenWord= "movie"
for (let index = 0; index < movies.length; index++) {
  if(movies[index].Type.includes(givenWord)){
    console.log(movies[index]);
  }
  else{
    console.log("nothing here");
  }
  
}
 */
