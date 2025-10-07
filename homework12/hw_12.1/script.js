let getLink = '';

buttonOne.addEventListener("click", () => {
    const input = prompt('Enter URL...');
    getLink = input;
    return input;
});

buttonTwo.addEventListener("click", () => {
    window.open(getLink);
});