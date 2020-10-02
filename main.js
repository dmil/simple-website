function sayOuch() {
    alert("Ouch, that hurts!Please Don't Poke Me")
}

var myImage = document.querySelector('#profilepic');

myImage.onclick = function() {
    sayOuch();
}
