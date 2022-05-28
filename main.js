let keys = document.querySelectorAll(".key");
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");

const result = document.querySelector("#result")

for (let key of keys) {
    key.addEventListener("click", function (event) {
        console.log(event.target.textContent)
        // result.innerText += event.target.textContent;
        if (event.target.textContent === "=") {
            // console.log(result.textContent)
            result.innerText = eval(result.textContent);
        } else {
            // if (event.target.textContent === `${numbers}`) {
            result.innerText += event.target.textContent
            // } else if (event.target.textContent === `${operations}`) {
            //     result.innerText += event.target.textContent
            // } else if (event.target.textContent === "c") {
            //     result.innerText = ""
        };
        // console.log(event.target.textContent);
        // let resultBox = document.createElement("div")
        // //made new element
        // resultBox.innerText = event.target.textContent;
        // //updated the inner text of that new element to be the contents of the clicked box
        // result.appendChild(resultBox);
        // //append the new element to the currently empty result element
    });
};

// let numbers = document.querySelectorAll(".number");

// for (let number of numbers) {
//     number.addEventListener("click", function (event) {
//         result.innerText += event.target.textContent;
//         //writing text content of target where event occurred (aka number of key that was clicked) into result (defined above)
//         console.log(result)

//         // let num1 = event.target.textContent;
//         // let num2 = event.target.textContent;
//     });
// };

// let operations = document.querySelectorAll(".operation");

// for (let operation of operations) {
//     operation.addEventListener("click", function (event) {
//         // result.innerText = event.target.textContent;
//         console.log(operation.textContent)
//     });
// };

let c = document.querySelector(".clear");
c.addEventListener("click", function (event) {
    result.innerText = "";
});
//instead of removing the result, replace the text with blank ("")