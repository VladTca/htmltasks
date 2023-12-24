const task = document.querySelector(".task");

const getRandomInRange = (min, max) => {
    return Math.floor(min + Math.random() * (max - min + 1));
};
let firstRandomNumber = getRandomInRange(1, 9);
let secondRandomNumber = getRandomInRange(1, 9);

task.textContent = `${firstRandomNumber} * ${secondRandomNumber}`;
button.addEventListener("click", () => {
    let result = firstRandomNumber * secondRandomNumber;
    let userAnswer = Number(input.value);
    if (result === userAnswer) {
        alert("Super");
        firstRandomNumber = getRandomInRange(1, 9);
        secondRandomNumber = getRandomInRange(1, 9);
        task.textContent = `${firstRandomNumber} * 
            ${secondRandomNumber}`;
    } else {
        alert("BAD");
    }
    input.value = ``;
    input.focus();
});