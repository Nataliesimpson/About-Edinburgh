
var quotes = [
  {name: "Natalie", surname: "Simpson", comment: "Loving the content on this page!"}, 
  {name: "Louise", surname: "Newsham", comment: "Can't wait to visit Edinburgh again for Hogmany!"},
  {name: "Megan", surname: "Strachan", comment: "You have to visit the Botanic Gardens - spectacular!"},
  {name: "J", surname: "Kearns", comment: "I stayed in the Grassmarket on my last trip to Edinburgh, so central!"},
  {name: "Iain", surname: "Stewart", comment: "I'm definitely coming back next year for the festival!"}
  ]

window.onload = main;  

function main() {
  for(quote in quotes) {
  var li = document.createElement( 'li' );
  li.innerText = " ' " + quotes[quote].comment + " ' --- " + quotes[quote].name + " " + quotes[quote].surname; 

  var ul = document.getElementById('comment-list');
  ul.appendChild( li );

  var form = document.getElementById('comment-form');
  form.onsubmit = function( event ) {
  event.preventDefault();
  // checkForBlankField();
  handleClick();
    }
  }
}

function handleClick( event ) {
  var nameInput = document.getElementById('name-text-input');
  var surnameInput = document.getElementById('surname-text-input');
  var commentInput = document.getElementById('comment-text-input')

  if (commentInput.value == ""){
    appendError("* The message field is empty, it is a required field and must be filled in. *")
    document.getElementById('comment-text-input').style.borderColor = "red";
  } else {

  var userInput = " ' " + commentInput.value + " ' --- "  + nameInput.value + "  " + surnameInput.value;
  appendQuote(userInput);
  }
}

function appendQuote(quote) {
  var quotesList = document.getElementById('comment-list');
  var li = document.createElement( 'li' );
  li.innerText = quote;
  quotesList.appendChild( li )
}

function appendError(error) {
  var errorList = document.getElementById('error-list');
  var li = document.createElement('li');
  li.innerText = error;
  errorList.appendChild( li )
}

function changeText(id, text){
  document.getElementById(id).innerHTML = text;
}

var counter = 0;
var places = ['Holyrood Palace', 'Arthurs Seat', 'Portobello Beach', 'Dynamic Earth', 'The Botanic Gardens', 'Edinburgh Castle', 'Royal Yacht Britannia', 'Edinburgh Dungeons', 'The Grassmarket', 'National Galleries Scotland', 'Calton Hill', 'The Shore in Leith']

function changePlace(){
  changeText('place', places[counter++]);
  if (counter >= places.length) counter = 0;
}







