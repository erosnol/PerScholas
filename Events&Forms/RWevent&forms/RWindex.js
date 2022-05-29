//getting button from html
const btn = document.querySelector('button');
//adding event listner to button and function if needed
btn.addEventListener('click', function(evt) {
  //creating li element 
  const li = document.createElement('li');
  //selecting input from html
  const inp = document.querySelector('input');
  //creating new comment within li & input
  li.textContent = inp.value;
  //appending new comment to DOM
  document.querySelector('ul').appendChild(li);

});

