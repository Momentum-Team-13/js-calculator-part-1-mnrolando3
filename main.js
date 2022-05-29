let keys = document.querySelectorAll(".key");

const result = document.querySelector("#result")

for (let key of keys) {
    key.addEventListener("click", function (event) {
        if (event.target.textContent === "=") {
            result.innerText = eval(result.textContent).toPrecision(10);
        } else if (event.target.textContent === "C") {
            result.innerText = ""
        } else {
            result.innerText += event.target.textContent
        };
    });
};
