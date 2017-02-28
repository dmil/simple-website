function sayOuch() {
    alert("Ouch, that hurt! Don't Poke Me")
}

var myImage = document.querySelector('#profilepic');

myImage.onclick = function() {
    sayOuch();
}
