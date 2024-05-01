const myBox1 = document.getElementById("myBox1");
const myBox2 = document.getElementById("myBox2");
const myButton = document.getElementById("myButton");

myBox1.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!😫";
});

myBox1.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it!😣";
});


myBox1.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me!😁";
});

myButton.addEventListener("click", event => {
    myBox2.style.backgroundColor = "tomato";
    myBox2.textContent = "OUCH!😫";
});

myButton.addEventListener("mouseover", event => {
    myBox2.style.backgroundColor = "yellow";
    myBox2.textContent = "Don't do it!😣";
});


myButton.addEventListener("mouseout", event => {
    myBox2.style.backgroundColor = "lightgreen";
    myBox2.textContent = "Click Me!😁";
});

