// fetch("https://www.omdbapi.com/?apikey=f291869b&t=whiplash")
//   .then((file) => file.json())
//   .then((data) => console.log(data));

let title = document.getElementById("titre");
let director = document.getElementById("realisateur");
let year = document.getElementById("année");
let actors = document.getElementById("acteurs");
let description = document.getElementById("description");
let poster = document.getElementById("affiche");

let corps = document.getElementById("corps");
let count = 0;
corps.classList.add("hide");

async function getValue() {
  count++;
  var input = document.getElementById("search").value;
  var url = poster;
  let result = await fetch(
    "https://www.omdbapi.com/?apikey=f291869b&t=" + input
  );
  let data = await result.json();
  if (count > 1) corps.classList.add("show");
  director.innerHTML = data.Director;
  title.innerHTML = data.Title;
  year.innerHTML = data.Year;
  actors.innerHTML = data.Actors;
  description.innerHTML = data.Plot;
  url.setAttribute("src", data.Poster);
}
console.log(getValue());

// function getValue() {
//   var input = document.getElementById("search").value;
//   count++;
//   var url = poster;
//   fetch("https://www.omdbapi.com/?apikey=f291869b&t=" + input)
//     .then((result) => result.json())
//     .then((data) => {
//       if (count > 1) corps.classList.add("show");
//       director.innerHTML = data.Director;
//       title.innerHTML = data.Title;
//       year.innerHTML = data.Year;
//       actors.innerHTML = data.Actors;
//       description.innerHTML = data.Plot;
//       url.setAttribute("src", data.Poster);
//     });
// }

// console.log(getValue());

// let movie = getValue();
// console.log(movie);

// fetch("https://www.omdbapi.com/?apikey=f291869b&t=" + getValue())
//   .then((result) => result.json())
//   .then((data) => {
//     director.innerHTML = "Réalisateur: " + data.Director;
//     title.innerHTML = data.Title;
//     year.innerHTML = "Année de sortie: " + data.Year;
//     actors.innerHTML = "Acteurs: " + data.Actors;
//     poster.innerHTML = poster.setAttribute = data.poster;
//     description.innerHTML = "Synopsys: " + data.Plot;
//     console.log(getValue());
//   });

// var url = poster;
// url.setAttribute("src", "data.Poster");
