let keys = document.querySelectorAll(".key");

console.log(keys);

console.log(keys[0].classList)

const result = document.querySelector("#result")

// const button = document.querySelector("button");

// button.addEventListener('click', function (event) {
//     console.log(event.target);
// });

for (let key of keys) {
    key.addEventListener("click", function (event) {
        // console.log(event.target.textContent);
        // let resultBox = document.createElement("div")
        //made new element
        // resultBox.innerText = event.target.textContent;
        //updated the inner text of that new element to be the contents of the clicked box
        // result.appendChild(resultBox);
        //append the new element to the currently empty result element

        result.innerText += event.target.textContent;
        //writing text content of target where event occurred (aka number of key that was clicked) into result (defined above)

        let num1 = event.target.textContent;
        let operation = document.querySelector(".operation")
        let num2 = event.target.textContent; {}
    });
};

let clear = document.querySelector(".clear");
clear.addEventListener("click", function (event) {
    result.innerText = "";
});
//instead of removing the result, replace the text with blank ("")

// clearButton.remove(resultBox);


// function multigreeting(name, lang) {
//     if (lang === "en") {
//         return "Hello, " + name + "!";
//     } else if (lang === "es") {
//         return "¡Hola, " + name + "!";
//     } else if (lang === "fr") {
//         return "Bonjour, " + name + "!";
//     } else if (lang === "eo") {
//         return "Saluton, " + name + "!";
//     } else {
//         return;
//     }
// }