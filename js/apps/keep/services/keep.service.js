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
    addNote,
    todoUnderLine,
    todoDelete,
    addTodo,
    noteChange
}

const STORAGE_KEY = 'gNotes';
var gNotes = createNotes()
window.gNotes = gNotes;

function createNotes() {
    gNotes = utilService.loadFromStorage(STORAGE_KEY);
    if (!gNotes) {
        gNotes = [
            createNote('imgNote', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png', 'yellow'),
            createNote('todo', [{ line: 'Learn Promises', underLine: true },
            { line: 'Learn VueJS', underLine: false },
            { line: 'Learn NodeJS', underLine: false }], 'green'),
            createNote('text-box', 'Im a text box!', 'red'),
            createNote('imgNote', 'https://robbreportedit.files.wordpress.com/2019/09/intercontinental-maldives-full-aerial-view-3-bedroom-overwater-residence.jpg?w=1000', 'red'),
            createNote('youtube', 'https://www.youtube.com/watch?v=U3_uxUSeZV4', 'yellow'),
            createNote('url', 'http://stackoverflow.com/', 'blue'),
            createNote('imgNote', 'https://www.airc.ie/wp-content/uploads/horse-web.jpg', 'blue'),
            createNote('todo', [{ line: 'Finish Sprint 3', underLine: false },
            { line: 'Drink A Beer With Ofer', underLine: false },
            { line: 'Presentation Flow', underLine: true }]),
            createNote('imgNote', 'https://imagevars.gulfnews.com/2019/08/29/Vacation_16cdd5ead2a_large.jpg', 'yellow'),
            createNote('youtube', 'https://www.youtube.com/watch?v=nOFFfiOK1JA', 'blue'),
            createNote('text-box', 'Have a GREAT MORNING!!', 'red'),
            createNote('todo', [{ line: 'Workout', underLine: false },
            { line: 'Pay The Bills!', underLine: false },
            { line: 'Smile Today :)', underLine: true }], 'green'),
        ]
        utilService.saveToStorage(STORAGE_KEY, gNotes)
    }
    return gNotes;
}

function getNotes() {
    return Promise.resolve(gNotes)
}

function createNote(type, content, color = 'red', tack = false) {
    return {
        type,
        content,
        color,
        id: utilService.makeId(),
        tack
    }
}

function _findNote(noteId) {
    return Promise.resolve(gNotes.find((note) => note.id === noteId))
}

function addTodo(noteId, value) {
    _findNote(noteId)
        .then(note => {
            note.content.push({ line: value, underLine: false })
            utilService.saveToStorage(STORAGE_KEY, gNotes)
        }
        )
}

function todoUnderLine(noteId, value) {
    _findNote(noteId)
        .then(note => {
            var todoLine = note.content.find(todo => todo.line === value)
            todoLine.underLine = !todoLine.underLine
            utilService.saveToStorage(STORAGE_KEY, gNotes)
        }
        )
}

function todoDelete(noteId, value) {
    _findNote(noteId)
        .then(note => {
            var line = note.content.findIndex(todo => todo.line === value)
            note.content.splice(line, 1)
            utilService.saveToStorage(STORAGE_KEY, gNotes)
        }
        )
}

function deleteNote(noteId) {
    var noteIdx = gNotes.findIndex(noteIdx => noteId === noteIdx.id)
    gNotes.splice(noteIdx, 1)
    utilService.saveToStorage(STORAGE_KEY, gNotes)
}

function cloneNote(noteId, type) {
    _findNote(noteId, type)
        .then(note => {
            gNotes.push(createNote(note.type, note.content, note.color))
            utilService.saveToStorage(STORAGE_KEY, gNotes)
        }
        )
}

function editNote(noteId, value) {
    _findNote(noteId)
        .then(note => {
            note.content = value;
            utilService.saveToStorage(STORAGE_KEY, gNotes)
        }
        )
}

function tackNote(noteId) {
    _findNote(noteId)
        .then(note => {
            var noteIdx = gNotes.findIndex(noteIdx => noteId === noteIdx.id)
            gNotes.splice(noteIdx, 1)
            gNotes.splice(0, 0, note)
        }
        )
}

function changeColorNote(noteId, color) {
    _findNote(noteId)
        .then(note => {
            note.color = color;
            utilService.saveToStorage(STORAGE_KEY, gNotes)
        }
        )
}

function addNote(type, value) {
    if (type === 'todo') {
        var todos = value.split(',')
        var lines = [];
        todos.forEach(todo => {
            lines.push({ line: todo, underLine: false })
        })
        value = lines;
    }
    gNotes.unshift(createNote(type, value))
    utilService.saveToStorage(STORAGE_KEY, gNotes)
}

function noteChange(noteId, type, action, value){
    switch(action) {
        case 'delete':
            deleteNote(noteId)
          break;
        case 'underLine':
            todoUnderLine(noteId, value)
          break;
        case 'todoDelete':
            todoDelete(noteId, value)
          break;
        case 'addTodo':
            addTodo(noteId, value)
          break;
        case 'editTodo':
            editTodo(noteId, value)
          break;
        case 'clone':
            cloneNote(noteId, type, value)
          break;
        case 'edit':
            editNote(noteId, value)
          break;
        case 'tack':
            tackNote(noteId)
          break;
        default:
            changeColorNote(noteId, value)
      }
}
