'use strict';

import utilService from './util.service.js'

export default {
    getNotes,
    createNotes
}

const STORAGE_KEY = 'gNotes'

var gNotes = createNotes()
window.gNotes = gNotes;

function createNotes(){
    gNotes = utilService.loadFromStorage(STORAGE_KEY);
    if (!gNotes){
        gNotes = [
            createNote('text','this is a demo note', 'red'),
            createNote('text','this is a secondssss note', 'red')
        ]
        utilService.saveToStorage(STORAGE_KEY, gNotes)
    }
    return gNotes;
}

function getNotes(){
    return Promise.resolve(gNotes)
}

function createNote(type, content, color){
    return {
        type,
        content,
        color
    }
}

// function getBookById(bookId){
//     let currBook = gBooks.find(book=> book.id===bookId)
//     return Promise.resolve(currBook)
// }

// function findBook(bookId) {
//     return Promise.resolve(gBooks.find((book)=>book.id===bookId))
// }

// function findBookIdx(bookId){
//     return gBooks.findIndex(book => book.id===bookId)
// }

// function deleteReview(bookId, reviewIdx){
//     findBook(bookId)
//         .then(book => {
//                 book.reviews.splice(reviewIdx, 1)
//            }
//         )
// }

// function addReview(bookId, review){
//     var bookIdx = findBookIdx(bookId);
//     if(!gBooks[bookIdx].reviews) gBooks[bookIdx].reviews=[]
//     review.id = utilService.makeId()
//     gBooks[bookIdx].reviews.push(review)
// }

// function deleteBook(bookId) {
//     let bookIdx = gBooks.findIndex((book) => book.id === bookId);
//     gBooks.splice(bookIdx, 1);
// }

// function addBook() {
//     gBooks.unshift(_createBook())
// }