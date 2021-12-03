import axios from "axios";
const Card = (article) => {
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const authorSpan = document.createElement('span');

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = article.headline;
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');
  image.src = article.authorPhoto;
  authorSpan.textContent = `By ${article.authorName}`;

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(image);
  authorDiv.appendChild(authorSpan);

  cardDiv.addEventListener('click', () => {
    console.log(headlineDiv.textContent);
  })

  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/articles`)
    .then(resp => {
      const articles = resp.data.articles;
      const entryPoint = document.querySelector(selector);
      console.log(articles);
      Object.keys(articles).forEach(key => {
        for(let i = 0; i < articles[key].length; i++) {
          entryPoint.appendChild(Card(articles[key][i]));
        }
      });
    })  
}

export { Card, cardAppender }
