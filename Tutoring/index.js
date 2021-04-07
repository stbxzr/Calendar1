
var root = document.getElementById('root-div')
var nextButton = document.getElementById('next-button')
var title = document.getElementById('moves-list-title')
var movesList = document.getElementById('moves-list')
var nameArray = ['pikachu', 'squirtle', 'mewtwo', 'meowth']
var index = 0;

function someFunction() {

        fetch('https://pokeapi.co/api/v2/pokemon/' + nameArray[index])
            .then(response => response.json())
            .then(data => {
                console.log(data)
                title.innerHTML = data.species.name + ' moves list'
                while(movesList.firstChild){
                    movesList.removeChild(movesList.firstChild)
                }
                for(let i = 0; i < data.moves.length; i++) {
                    var moveName  = data.moves[i].move.name;
                    var moveRow = document.createElement('li');
                    moveRow.innerHTML = moveName;
                    movesList.appendChild(moveRow)
                }
             
            })
}
function endPokemon(){
   
}
nextButton.addEventListener('click', function(event) {
    if(index < nameArray.length) {
       someFunction()
        index++

   } else {
       endPokemon()
   }
})




