let keys = document.querySelectorAll(".key");

const result = document.querySelector("#result")

for (let key of keys) {
    key.addEventListener("click", function (event) {
        if (event.target.textContent === "=") {
            // if (result.textContent.length >= 11) {
            //     result.innerText = math.eval(result.textContent).toPrecision(10);
            // }
            // need to build if clause for evaluation being greater than or equal to 11 digits, then make it a string to check the length/find function to check length of number, then proceed
            // console.log(result.innerText);
            result.innerText = math.eval(result.textContent);
            // math.eval(result.textContent);
            // result.innerText = answer

            //     if (result.textContent.length >= 11) {
            //         result.innerText = result.textContent.toPrecision(10);
            //     }
            // }
        } else if (event.target.textContent === "C") {
            result.innerText = ""
        } else {
            result.innerText += event.target.textContent
        };
    });
};
