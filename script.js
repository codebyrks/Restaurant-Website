let buttons = document.querySelectorAll(".btn");
let menu = document.querySelectorAll(".menu-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let filter = button.getAttribute("food-filter");

        menu.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            }
            else {
                item.style.display = "none";
            }
        });
    });
});