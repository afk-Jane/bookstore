let showOnlyLikedBooks = false;


let likedBooks = [];


function  init() {
    loadFromLocalStorage();
    renderBooks();
}


function renderBooks (){
    let contentRef = document.getElementById('display-books');
    contentRef.innerHTML = '';
    let filteredBooks = showOnlyLikedBooks ? books.filter(book => book.liked) : books;
    for (let indexBook = 0; indexBook < filteredBooks.length; indexBook++) {
            contentRef.innerHTML += getBookTemplate(indexBook);
            liked(indexBook);
            renderComments(indexBook);
    }
    for (let indexBook = 0; indexBook < filteredBooks.length; indexBook++) {
        commentsEmpty(indexBook);
    }
    saveToLocalStorage();
}


function saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}


function loadFromLocalStorage() {
    let savedBooks = JSON.parse(localStorage.getItem('books'));
    if (savedBooks) {
        books = savedBooks;
    }
}


function getPriceTemplate(indexBook) {
    let priceContentRef = books[indexBook].price;
    priceContentRef.innerHTML += " €";
}


function liked(indexBook) {
    let likedContentRef = books[indexBook].liked;
    if (likedContentRef === true) {
        return getLikedTemplate(indexBook);
    } else {
        return getNotLikedTemplate(indexBook);
    }
}


function like(indexBook) {
    let likeContentRef = books[indexBook].liked;
    let heartIdRef = document.getElementById(`heart${indexBook}`);
    if (likeContentRef === true) {
        heartIdRef.setAttribute('src', './img/heart-empty.png');
        books[indexBook].liked = false;  
        books[indexBook].likes -= 1; 
    } else {
        heartIdRef.setAttribute('src', './img/heart-full.png');
        books[indexBook].liked = true;  
        books[indexBook].likes += 1; 
    }
    saveToLocalStorage();  
    renderBooks(); 
}


function renderComments(indexBook) {
    let commentsContainer = document.getElementById(`book${indexBook}comments`);
    commentsContainer.innerHTML = "";
    for (let indexComment = 0; indexComment < books[indexBook].comments.length; indexComment++) {
        commentsContainer.innerHTML += getCommentsTemplate(books[indexBook].comments[indexComment]);
    }
}


function commentsEmpty(indexBook) {
    let commentContainer = document.getElementById(`book${indexBook}comments`);
    if (!books[indexBook].comments || books[indexBook].comments.length === 0) {
        commentContainer.innerText = 'Keine Kommentare, schreib du den ersten...';
    }
}


function askUsername(indexBook) {
    let userName = prompt("Wie ist dein Name?", "Benutzer");
    if (userName && userName.trim() !== "") {
        sendMessage(indexBook, userName);
    } else {
        alert("Bitte gib deinen Namen ein.");
    }
}


function sendMessage(indexBook, userName) {
    let newCommentInput = document.getElementById(`newComment${indexBook}`); 
    if (newCommentInput.value.trim() !== "") {
        let newComment = {
            name: userName,
            comment: newCommentInput.value
        };
        books[indexBook].comments.push(newComment);
        renderComments(indexBook);
        saveToLocalStorage();
        newCommentInput.value = ""; 
    } else {
        alert("Bitte gib einen Kommentar ein.");
    }
}


function showLikedBooks() {
    let isBookLiked = '';
    let likedBooks = books.filter(getLikedBooks);
    renderBooks();
}


function getLikedBooks() {
    return
}