//* To do list
const btn1 = document.getElementById('btn1')
btn1.addEventListener('click', function(e){
    const li = document.createElement('li')
    const inp1 = document.getElementById('inp1')
    li.textContent = inp1.value;
    document.querySelector('ul').appendChild(li);
    evt.preventDefault();
})

//* Form
const button2 = document.getElementById('btn2');
//adding event listner to button and function if needed
button2.addEventListener('click', function(evt) {
  //creating li element 
  const li2 = document.createElement('li');
  //selecting input from html
  const inp2 = document.getElementById('inp2');
  //creating new comment within li & input
  li2.textContent = inp2.value;
  //appending new comment to DOM
  document.querySelector('ul').appendChild(li2);
  //preventing default action
  evt.preventDefault();

});

//* Order Form
//get all name in input
const names = document.querySelectorAll('name').value

//function to add each item added
  console.log(names)
//append to total 


//* forum
const submitForum = document.getElementById('submitForum')

submitForum.addEventListener('click', function(e){
  e.preventDefault()
  const p1 =document.createElement('p')
  const p2 = document.createElement('p')
  const userInput = document.getElementById('user')
  p1.textContent = userInput.value
  const masseg = document.getElementById('mass')
  p2.textContent = masseg.value
  const forum = document.getElementById('forum')
  forum.appendChild(p1)
  forum.appendChild(p2)

  userInput.value = ''
  masseg.value = ''
})
