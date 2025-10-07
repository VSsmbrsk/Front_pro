const wrapper = document.getElementById("mybuttons");

wrapper.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const clickedItemText = event.target.textContent;
        alert("Клікнуто на кнопці: " + clickedItemText);
    }
});