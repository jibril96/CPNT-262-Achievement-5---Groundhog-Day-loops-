const moviesList = ['Braveheart','Rudy', 'Forrest Gump','The Shawshank Redemption','Scarface','Lion King','Ride Along'];
const container = document.querySelector('.movies-list');
let output = "";
const title = document.querySelector('.title');
title.textContent = 'Good Movies'
console.log(title.textContent)

console.log(moviesList);
for (let i = 0; i < moviesList.length; i++) {
    output += `<li>${moviesList[i]}</li>`;
}

container.innerHTML = output;

console.log('All movies now looped');
