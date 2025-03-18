let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ];

  let showOnlyLikedBooks = false;

  window.onload = function() {
    loadFromLocalStorage(); 
    renderBooks(); 

    // let showLikedBooksBtn = document.getElementById("showLikedBooksBtn");
    // showLikedBooksBtn.addEventListener("click", showLikedBooks);
};

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


function renderComments(indexBook) {
    let commentsContainer = document.getElementById(`book${indexBook}comments`);
    commentsContainer.innerHTML = "";

    for (let indexComment = 0; indexComment < books[indexBook].comments.length; indexComment++) {
        commentsContainer.innerHTML += getCommentsTemplate(books[indexBook].comments[indexComment]);
    }
}


function getCommentsTemplate(comment) {
    return `
        <p><strong>[${comment.name}]:</strong> ${comment.comment}</p>
    `;
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
    showOnlyLikedBooks = !showOnlyLikedBooks; 
    renderBooks();
}