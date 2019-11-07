'use strict';

import utilService from './util.service.js'

export default {
    getNotes,
    createNotes,
    deleteNote,
    changeColorNote,
    tackNote,
    editNote,
    cloneNote
}

const STORAGE_KEY = 'gNotes';
var gNextId = 100;

var gNotes = createNotes()
window.gNotes = gNotes;

function createNotes(){
    gNotes = utilService.loadFromStorage(STORAGE_KEY);
    if (!gNotes){
        gNotes = [
            createNote('text','this is a demo note', 'red'),
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
        color,
        id:gNextId++
    }
}

function _findNote(noteId) {
    return Promise.resolve(gNotes.find((note)=>note.id===noteId))
}

function deleteNote(noteId){
    _findNote(noteId)
        .then(note => {
            gNotes.splice(note, 1)
            utilService.saveToStorage(STORAGE_KEY, gNotes)
        }
)}

function cloneNote(noteId){
    _findNote(noteId)
        .then(note => {
            gNotes.push(createNote(note.type, note.content, note.color))
            utilService.saveToStorage(STORAGE_KEY, gNotes)
        }
)}

function editNote(noteId, value){
    _findNote(noteId)
    .then(note => {
        note.content = value;
        utilService.saveToStorage(STORAGE_KEY, gNotes)
    }
)}

function tackNote(noteId){
    // _findNote(noteId)
    //     .then(note => gNotes.splice(note, 1)
// )
}

function changeColorNote(noteId, color){
    _findNote(noteId)
    .then(note => {
        note.color = color;
        utilService.saveToStorage(STORAGE_KEY, gNotes)
    }
)}

// function getBookById(bookId){
//     let currBook = gBooks.find(book=> book.id===bookId)
//     return Promise.resolve(currBook)
// }

// function findBookIdx(bookId){
//     return gBooks.findIndex(book => book.id===bookId)
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