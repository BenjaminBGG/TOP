

const container = document.querySelector('#container');

const p = document.createElement('p');
p.textContent = "I'm red bitch!";
p.style.color = 'red';
container.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm blue dabadebadow";
h3.style.color = 'blue';
p.before(h3);

const div = document.createElement('div');
div.style.borderColor = 'black';
div.style.borderWidth = '2px';
div.style.borderStyle = 'solid';
div.style.backgroundColor = 'pink';
const h1 = document.createElement('h1');
h1.textContent = 'Div baby Div';
const p2 = document.createElement('p');
p2.textContent= 'MEEEEETOOOOOO';
div.append(h1);
div.append(p2);
container.append(div);

// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Mellow Girl");

// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//   }
  
//   // METHOD 2
//   btn.onclick = alertFunction;
  
//   // METHOD 3
//   btn.addEventListener('click', alertFunction);

// btn.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';  
// });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});