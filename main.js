function getNumbers() {
  let arrayOfNumbers = [];

  for (let i = 0; i < 7; i++) {
    let number = Math.floor(Math.random() * 48 + 1);
    if(arrayOfNumbers.indexOf(number) == -1) {
      arrayOfNumbers.push(number);
      let circle = document.getElementById("circle"+i);
      circle.innerHTML = arrayOfNumbers[i];
      circle.classList.add("gold");
    } else {
      i--;
    }
  }
}
