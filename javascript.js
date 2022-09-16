function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function createCard() {
    const card = document.createElement('div')
    const title = document.createElement('div')
    const author = document.createElement('div')
    const pages = document.createElement('div')
    const removeCard = document.createElement('button')
    const checked = document.getElementById('read')
    for (let element of myLibrary){
        card.setAttribute('class', 'book')
        title.textContent = `Title: ${element.title}`;
        author.textContent = `Author: ${element.author}`;
        pages.textContent = `Pages: ${element.pages}`;
    }
    removeCard.textContent = 'Delete'
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(removeCard)
    cards.appendChild(card)
    removeCard.addEventListener('click', e => {
        e.currentTarget.parentNode.remove();
    })
}

let myLibrary = [{
    title: 'Stormlight Archive',
    author: 'Branden Sanderson',
    pages: '800'
}]

const body = document.body;
const cards = document.createElement('div');
const modal = document.getElementById('modal');
const newBook = document.getElementById('addBook');
const span = document.getElementsByClassName('close')[0];
cards.setAttribute('id', 'cards');
body.appendChild(cards);

createCard()

// Add-book modal
newBook.addEventListener('click', () => modal.style.display = 'block')
span.addEventListener('click', () => modal.style.display = 'none')
window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
})
const submit = document.getElementById('submit');
form.setAttribute('onsubmit', 'return addBook(this)')

submit.addEventListener('click', () => modal.style.display = 'none')
submit.addEventListener('click', () => myLibrary.push(new Book(form.title.value, form.author.value, form.pages.value, form.read.value)))
submit.addEventListener('click', () => createCard())
submit.addEventListener('click', () => console.log(myLibrary))

