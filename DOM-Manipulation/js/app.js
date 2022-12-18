// DOM MANIPULATION

                    //-----STYLING ELEMENTS-----//

// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);
// for(i = 0; i < listItems.length; i++){
//     listItems[i].style.color = 'red';
// }

                    //-----CREATING ELEMENTS-----//

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

                    //-----ADDING ELEMENTS-----//
// ul.append(li);

                    //-----MODIFYING TEXT-----//

// li.innerText = 'X-men';

// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

                    //-----MODIFYING ATTRIBUTES & CLASSES----//

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

// li.classList.add('list-items');
// console.log(li.classList.contains('list-items'));

//  REMOVE ELEMENTS  //

// li.remove();

                    //-----ACCESSING ELEMENTS-----//

// GetElementById()
/* 
const title = document.getElementById('main-heading');
console.log(title);

// GetElementByClassName()

/* const listItem = document.getElementsByClassName('list-items');
console.log(listItem);
 
// getElementsByTagName()

const listItem = document.getElementsByTagName('li');
console.log(listItem);

// querySelector()

/* const container = document.querySelector('div');
console.log(container) 

// querySelectorAll()

const container = document.querySelectorAll('div');
console.log(container) */

                    //-----TRAVERSING THE DOM-----//


//  PARENT NODE TRAVERSAL  //

// let ul = document.querySelector('ul');
// console.log(ul);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode);
// console.log(html.parentElement);

//  CHILD NODE TRAVERSAL  //

let ul = document.querySelector('ul');
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

//ul.firstChild.style.backgroundColor = 'blue' // ERRIR
ul.childNodes[1].style.backgroundColor = 'lightblue'; 
console.log(ul.children);


//  SIBLING NODE TRAVERSAL  //