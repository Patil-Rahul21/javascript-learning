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