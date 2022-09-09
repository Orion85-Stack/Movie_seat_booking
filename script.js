const container = document.querySelector('.container');         // will select just one
//will select all and put them into a node / array format.
// also there should be no space between :not() otherwise it will raise an exception
const seats = document.querySelectorAll('.row .seat:not(.occupied)');      
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = +movieSelect.value;


//Event listener
container.addEventListener('click', (e) => {
    console.log(e.target)
})
