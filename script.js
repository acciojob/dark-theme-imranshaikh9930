//your code here

const btn = document.querySelector("#swap");
const div = document.querySelector("#app");

btn.addEventListener("click", function () {
    if (div.classList.contains("day")) {
        div.classList.remove("day");
        div.classList.add("night");
        btn.classList.remove("button_day");
        btn.classList.add("button_night");
    } else {
        div.classList.remove("night");
        div.classList.add("day");
        btn.classList.remove("button_night");
        btn.classList.add("button_day");
    }
});
