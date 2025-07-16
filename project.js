let colours = ["red", "green", "yellow"];
let index = 0;

function changeLights() {
    index = index + 1;
    if (index == colours.length)
        index = 0;
    let object1 = document.getElementById('object1');
    let object2 = document.getElementById('object2');
    let object3 =document.getElementById('object3')
    object1.style.backgroundColor = colours[index];
    object2.style.backgroundColor = colours[index];
    object3.style.backgroundColor = colours[index];
};

setInterval(function() {
    changeLights()
}, 3000);

changeLights();
