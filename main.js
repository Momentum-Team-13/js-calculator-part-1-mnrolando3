let keys = document.querySelectorAll(".key");
console.log(keys);

console.log(keys[0].classList)

// const button = document.querySelector("button");

// button.addEventListener('click', function (event) {
//     console.log(event.target);
// });

for (let key of keys) {
    key.addEventListener("click", function (event) {
        console.log(event.target.textContent);
    });
};

let result = target.textContent

// let operations = document.querySelectorAll(".operation")
// for (let operation of operations) {
//     operation.addEventListener("click", function (event) {
//         console.log(event.target)
//     });
// };