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
}

const STORAGE_KEY = 'gNotes';
var gNotes = createNotes()
window.gNotes = gNotes;

function createNotes() {
    gNotes = utilService.loadFromStorage(STORAGE_KEY);
    if (!gNotes) {
        gNotes = [
            createNote('todo', [{ line: 'tomato', underLine: false },
            { line: 'Cucamber', underLine: true },
            { line: 'Melon', underLine: false }], 'green'),
            createNote('text-box', 'Im a txt box!', 'red'),
            createNote('text-box', 'Have a GREAT MORNING!!', 'red'),
            createNote('todo', [{ line: 'run', underLine: false },
            { line: 'pay bills!', underLine: false },
            { line: 'smile today:)', underLine: true }]),
            createNote('youtube', 'https://www.youtube.com/watch?v=_GXd42_rjME', 'yellow'),
            createNote('url', 'http://walla.co.il', 'blue'),
            createNote('imgNote', 'https://www.airc.ie/wp-content/uploads/horse-web.jpg', 'blue'),
            createNote('imgNote', 'data:image/jpeg;base64,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', 'blue'),
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