let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {

  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  const newTitle = document.querySelector('#main-title')
  newTitle.textContent = "Shorter Title";

  // Part 2
  const newBackgroundColor = document.querySelector('body')
  document.body.style.backgroundColor = 'red';

  // Part 3 Select DOM's Favorite Things list and remove the last list item.
  const favThings = document.querySelector('#favorite-things');
  favThings.removeChild(favThings.lastElementChild);

  // Part 4Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements.
  const newFontsize = document.querySelectorAll('.special-title');
  newFontsize.forEach(title => {
    title.style.fontSize = '2rem';
  });

  // Part 5
  const list = document.getElementById('past-races');
  const removeChicago = list.childNodes[7]; //suppose to be [3] but 7 seems to be the one that deletes 'Chicago' idk why
  removeChicago.parentNode.removeChild(removeChicago);


  // Part 6
  const listContainer = document.getElementById('past-races')
  const listElement = document.createElement('li');
  listContainer.appendChild(listElement);
  listElement.textContent = 'Atlanta'

  // Part 7
 
  const main = document.getElementById('.main')

  //create new div with class and other elements
  const blogPost = document.createElement('div');
    blogPost.className = 'blog-post purple';
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  //input textContent
  h1.textContent = 'Atlanta'
  p.textContent = 'I hosted the recent Gwinnett drag race sting and succesfully avoided police with my red Miata'

  //append
  main.appendChild(blogPost);
  blogPost.appendChild(h1);
  blogPost.appendChild(p);

}