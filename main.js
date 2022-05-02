let addToDoButton = document.getElementById('Mitä teet'); 
let toDOContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){  // Mitä tapahtuu kun painaa painiketta.
    var paragraph = document.createElement('p');    // Tehdään elementti 'p'
    paragraph.classList.add('paragraph-styling');   
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){    // Lisätyn mitä teet aiheen poisto
        paragraph.style.textDecoration = "line-through";  // Tehdään viiva postettavan asian päälle 
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);   // Kirjoitetun asian poisto
    })
})
