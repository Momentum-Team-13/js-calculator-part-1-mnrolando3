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
        console.log(event.target.textContent);
        let resultBox = document.createElement("div")
        //made new element
        resultBox.innerText = event.target.textContent;
        //updated the inner text of that new element to be the contents of the clicked box
        result.appendChild(resultBox);
        //append the new element to the currently empty result element
    });
};

let clear = document.querySelector(".clear");
clear.addEventListener("click", function (event) {
    result.innerText = "";
});
//instead of removing the result, replace the text with blank ("")

// clearButton.remove(resultBox);

// const list = document.getElementById("myList");

// while (result.hasChildNodes()) {
//     result.removeChild(result.firstChild);
// }