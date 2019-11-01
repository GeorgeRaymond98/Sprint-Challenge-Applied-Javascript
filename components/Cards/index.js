// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">DONE
//   <div class="headline">{Headline of article}</div>DONE
//   <div class="author">DONE
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => {
    console.log(res.data.articles);
    const bootstrap = res.data.articles.bootstrap;
    const javascript = res.data.articles.javascript;
    const jquery = res.data.articles.jquery;
    const node = res.data.articles.node;
    const technology = res.data.articles.technology;


    bootstrap.forEach(course => {
        const newCard = createCard(course);
        cardContainer.appendChild(newCard);
    });
    javascript.forEach( course => {
        const newCard = createCard(course);
        cardContainer.appendChild(newCard);
    })
    jquery.forEach( course => {
        const newCard = createCard(course);
        cardContainer.appendChild(newCard);
    })
    node.forEach( course => {
        const newCard = createCard(course);
        cardContainer.appendChild(newCard);
    })
    technology.forEach(course => {
        const newCard = createCard(course);
        cardContainer.appendChild(newCard);
    })
})
.catch(error => {
    console.log("The data was not returned", error);
})

const cardContainer = document.querySelector('.cards-container');

function createCard(cardItem) {
    const card = document.createElement('div');
    const authorHeadLine = document.createElement('div');
    const author = document.createElement('div');
    const authorImgDiv = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    cardContainer.appendChild(card);
    card.appendChild(authorHeadLine);
    card.appendChild(author);
    author.appendChild(authorImgDiv);
    authorImgDiv.appendChild(authorImg);
    author.appendChild(authorName);

    card.classList.add('card');
    authorHeadLine.classList.add('headline');
    author.classList.add('author');
    authorImgDiv.classList.add('img-container');

    authorHeadLine.textContent = cardItem.headline;
    authorImg.src = cardItem.authorPhoto;
    authorName.textContent = cardItem.authorName;
    



    return(card);

} 
/* <div class="card">DONE
//   <div class="headline">{Headline of article}</div>DONE
//   <div class="author">DONE
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div> */