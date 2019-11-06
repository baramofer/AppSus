import utilService from '../services/util.service.js';
import storageService from '../services/storage.service.js';

const MAIL_KEY = 'emailsDB';

export default {
  getMails,
//   getById,
};

function getMails() {
  var emails = storageService.load(MAIL_KEY);
  if (!emails) {
    emails = emailsDB;
    storageService.store(MAIL_KEY, emails);
  }
  emailsDB = emails;
  return emailsDB;
}

var emailsDB = [
  {
    number: 'mail number 1',
    body:
      'Vue amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'Hello Vue! how are you?',
    name: 'J. K. Working',
    isRead: false,
    sentAt: '04:23'
  },
  {
    number: 'mail number 2',
    body:
      'Is amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'How to use vue in everyday cooking!',
    name: 'Moses Burger',
    isRead: false,
    sentAt: '04:20'
  },
  {
    number: 'mail number 3',
    body:
      'Very amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'How to use vue in everyday cooking!',
    name: 'Pizza Lila',
    isRead: false,
    sentAt: '01:23'
  },
  {
    number: 'mail number 4',
    body:
      'Fun amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'How to use vue in everyday cooking!',
    name: 'Jocelyn Bleeeeevins',
    isRead: false,
    sentAt: '04:20'
  },
  {
    number: 'mail number 5',
    body:
      'Guys amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'How to use vue in everyday cooking!',
    name: 'Joseph Hadad',
    isRead: false,
    sentAt: '01:22'
  },
  {
    number: 'mail number 6',
    body:
      'Incididunt amet magna ullamco ad voluptate veniam amet deserunt elit elit nostrud. Fugiat sit adipisicing amet quis eu minim non id laborum. Voluptate amet deserunt ea consequat dolore pariatur. Veniam duis veniam duis commodo incididunt consequat tempor. Officia proident et pariatur non ipsum aute mollit fugiat fugiat nisi nulla ullamco adipisicing. Eu est laboris in amet et est quis occaecat.\r\n',
    subject: 'How to use vue in everyday cooking!',
    name: 'Andy Herzog',
    isRead: false,
    sentAt: '04:20'
  },
];

// function getById(emailId) {
//   const email = emailsDB.find(email => email._id === emailId);
//   return email;
// }