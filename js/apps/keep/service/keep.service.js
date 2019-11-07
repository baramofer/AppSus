'use strict';

import utilService from './util.service.js'

export default {
    getNotes,
    createNotes,
    deleteNote,
    changeColorNote,
    tackNote,
    editNote,
    cloneNote,
    addNote
}

const STORAGE_KEY = 'gNotes';
var gNextId = 100;

var gNotes = createNotes()
window.gNotes = gNotes;


function createNotes(){
    gNotes = utilService.loadFromStorage(STORAGE_KEY);
    if (!gNotes){
        gNotes = [
            createNote('text-box','this is a txt', 'red'),
            createNote('youtube','https://www.youtube.com/watch?v=_GXd42_rjME', 'yellow'),
            createNote('url','http://google.co.il', 'red'),
            createNote('imgNote','https://www.airc.ie/wp-content/uploads/horse-web.jpg', 'green'),
        ] 
        utilService.saveToStorage(STORAGE_KEY, gNotes)
    }
    return gNotes;
}

function getNotes(){
    return Promise.resolve(gNotes)
}

function createNote(type, content, color='red'){
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

function deleteNote(noteId, type){
    _findNote(noteId, type)
        .then(note => {
            gNotes.splice(note, 1)
            utilService.saveToStorage(STORAGE_KEY, gNotes)
        }
)}

function cloneNote(noteId, type){
    _findNote(noteId, type)
        .then(note => {
            gNotes.push(createNote(note.type, note.content, note.color))
            utilService.saveToStorage(STORAGE_KEY, gNotes)
        }
)}

function editNote(noteId, type, value){
    _findNote(noteId, type)
    .then(note => {
        note.content = value;
        utilService.saveToStorage(STORAGE_KEY, gNotes)
    }
)}

function tackNote(noteId, type){
    // _findNote(noteId)
    //     .then(note => gNotes.splice(note, 1)
// )
}

function changeColorNote(noteId, type, color){
    _findNote(noteId, type)
    .then(note => {
        note.color = color;
        utilService.saveToStorage(STORAGE_KEY, gNotes)
    }
)}

function addNote(type, value) {
    gNotes.unshift(createNote(type, value))
    utilService.saveToStorage(STORAGE_KEY, gNotes)
}