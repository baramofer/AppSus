import storageService from '../services/storage.service.js';

const MAIL_KEY = 'emailsDB';

export default {
  getMails,
  getById,
  addMail,
  saveEmailDB
};

function getMails() {
  var emails = storageService.load(MAIL_KEY);
  if (!emails) {
    emails = emailsDB;
    storageService.store(MAIL_KEY, emails);
  }
  emailsDB = emails;
  return emailsDB
}

var emailsDB = [
  {
    _id: '1',
    body:
      'Vue amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Hello Vue! how are you?',
    name: 'Ann Levi',
    isRead: false,
    sentAt: '04:23',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '2',
    body:
      'Is amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Nested Routes is SATAN!',
    name: 'Jeff Bezos',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '3',
    body:
      'Very amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Hello Vue, how are you buddy?',
    name: 'Bill Gates',
    isRead: false,
    sentAt: '01:23',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '4',
    body:
      'Fun amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Damn this framework is a badass!',
    name: 'Warren Buffett',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '5',
    body:
      'Guys amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'How Vue changed my life',
    name: 'Lionel Messi',
    isRead: false,
    sentAt: '01:22',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '6',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Cristiano Ronaldo',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '7',
    body:
      'Vue amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Hello Vue! how are you?',
    name: 'Avi Levi',
    isRead: false,
    sentAt: '04:23',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '8',
    body:
      'Is amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Nested Routes is SATAN!',
    name: 'Jhonnie Walker',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '9',
    body:
      'Very amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Hello Vue, how are you buddy?',
    name: 'Assi Azzar',
    isRead: false,
    sentAt: '01:23',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '10',
    body:
      'Fun amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Damn this framework is a badass!',
    name: 'Rotem Sela',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '11',
    body:
      'Guys amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'How Vue changed my life',
    name: 'Danny Welbeck',
    isRead: false,
    sentAt: '01:22',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '12',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Bruce Wayne',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '13',
    body:
      'Vue amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Hello Vue! how are you?',
    name: 'Peter Parker',
    isRead: false,
    sentAt: '04:23',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '14',
    body:
      'Is amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Nested Routes is SATAN!',
    name: 'Jeff Bezos',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '15',
    body:
      'Very amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Hello Vue, how are you buddy?',
    name: 'Bill Gates',
    isRead: false,
    sentAt: '01:23',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '16',
    body:
      'Fun amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Damn this framework is a badass!',
    name: 'Warren Buffett',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '17',
    body:
      'Guys amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'How Vue changed my life',
    name: 'Lionel Messi',
    isRead: false,
    sentAt: '01:22',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '18',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Dan Bilzerian',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '19',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Anne Keith',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '20',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Donald Triger',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '21',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Harry Maguire',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '22',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Bryan Adams',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '23',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'James Spader',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '24',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Dean Tan',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '25',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Joe Ma',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '26',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Garry Blind',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '27',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Hector Bill',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
  {
    _id: '28',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Do you know when will Sprint 4 start?',
    name: 'Jordi Alba',
    isRead: false,
    sentAt: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isDone: false,
    isStarred: false
  },
];

function getById(emailId) {
  const email = emailsDB.find(email => email._id === emailId);
  return email;
}

function addMail(newEmail) {
  emailsDB.unshift(newEmail);
  storageService.store(MAIL_KEY, emailsDB);
}

function saveEmailDB() {
  storageService.store(MAIL_KEY, emailsDB);
}