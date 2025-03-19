function getBookTemplate (indexBook){
    let formattedPrice = books[indexBook].price.toFixed(2);
    return /*html*/`
        <div class="aBook" id="book${indexBook}">
            <div class="book-title">
                <h2>${books[indexBook].name}</h2>
            </div>
            <div class="fancy-line">
            </div>
            <div class="display-bookcover">
                <img src="./img/book-icon.png" alt="book icon" class="book-icon">
            </div>
            <div class="fancy-line">
            </div>
            <div class="all-data">
                <div class="price-n-likes">
                    <p class="bookPrice">${formattedPrice} €</p>
                    <div class="display-likes">
                        <p class="likes">${books[indexBook].likes}</p>
                        <div class="like" id="heart${indexBook}" onclick="like(${indexBook})">${liked(indexBook)}</div>
                    </div>
                </div>
                <div class="book-data" id="">
                    <div class="author-date">
                        <p class="author" id=""> <strong>Author :</strong> ${books[indexBook].author}</p>
                    </div>

                    <div class="publishedYear-data">
                        
                        <p class="publishedYear" id=""> <strong>Erschienungsjahr :</strong> ${books[indexBook].publishedYear}</p>
                    </div>

                    <div class="genre-data">
                    <p class="genre" id=""> <strong>Genre :</strong> ${books[indexBook].genre}</p>
                    </div>
                </div>
            </div>

            <div class="fancy-line">
            </div>

            <div class="display-comments">
                <h3>Kommentare:<br></h3>
                    <div class="prev-Comments" id="book${indexBook}comments">
                    </div>
                    <div class="post-comment">
                    <input type="text" id="newComment${indexBook}" class="comment-intput" placeholder="Schreibe deinen Kommentar...">
                        <img src="./img/paper-airplane.png" class="send-icon" onclick="sendMessage(${indexBook}, prompt('Wie ist dein Name?', 'Benutzer'))">
                    </div>
            </div>
        </div>
    `;
}


function getLikedTemplate(indexBook){
    return /*html*/`
        <img src='./img/heart-full.png' class="heart" id="heart${indexBook}" alt="heart icon">
    `;
}


function getNotLikedTemplate(indexBook){
    return /*html*/`
        <img src='./img/heart-empty.png' class="heart" id="heart${indexBook}" alt="outline of a heart">
    `;
}


function getCommentsTemplate(comment) {
    return `
        <p><strong>[${comment.name}]:</strong> ${comment.comment}</p>
    `;
}