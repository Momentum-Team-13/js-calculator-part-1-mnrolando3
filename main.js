let keys = document.querySelectorAll(".key");

const result = document.querySelector("#result")

for (let key of keys) {
    key.addEventListener("click", function (event) {
        if (event.target.textContent === "=") {
            result.innerText = eval(result.textContent);
        } else {
            result.innerText += event.target.textContent
        };
    });
};

let c = document.querySelector(".clear");
c.addEventListener("click", function (event) {
    result.innerText = "";
});
//instead of removing the result, replace the text with blank ("")