# projects realted to Dom 
## Project Link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-klchvkyv?file=script.js)

# Solution Code

## Project 1 Solution

```javascript
const button = document.querySelectorAll('.button');
// console.log(button);

const body = document.querySelector('body')
// console.log(body)

button.forEach(function (button){
  console.log(button);

  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    else(e.target.id === 'red') 
      body.style.backgroundColor = e.target.id;
  });
});


```

## Project 2 Solution

```javaScript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter Valid Height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter Valid Weight ${weight}`;
  }
  else {
   const BMI =  (weight / ((height*height)/10000)).toFixed(2)

   //show the Results
   results.innerHTML = `<span>${BMI} </span>`
    if(BMI < 18.6){
    results.innerHTML = `<span>${BMI} "please Follow the Dites plan" </span>`
  }
  else if(BMI > 18.6 && BMI < 24.9){
    results.innerHTML = `<span>${BMI} "Keep it up and be natural" </span>`
  }
  else(BMI > 24.9)
    results.innerHTML = `<span>${BMI} "Do Daily Work-Out" </span>`
}
});

```

## Project 3 Solution 
```javascript

const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  // console.log(date.toLocaleDateString());
  clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## Priject 4 Solution

```Javascript
let random_Number = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainig = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOvet = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // 1 to 100

  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater then 1');
  } else if (guess > 100) {
    alert('Please enter a number less then 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${random_Number}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random_Number) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < random_Number) {
    displayMessage(`Number is Too Low`);
  } else if (guess > random_Number) {
    displayMessage(`Numbet is Too High `);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess},  `;
  numGuess++;
  remainig.innerHTML = `${11 - numGuess}  `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOvet.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e) {
    random_Number = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    newGame = 1;
    guessSlot.innerHTML = '';
    remainig.innerHTML = `${11 - numGuess}  `;
    userInput.removeAttribute('disabled');
    startOvet.removeChild(p);
    playGame = true;
  });
}

```


## Project 5 Solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown',(e) =>{
  insert.innerHTML = `
  <div class = "color">
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

  </div>`
})
```

## Project 6 Solution

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```