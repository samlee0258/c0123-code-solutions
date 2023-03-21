import { read } from './read-notes.js';
import { create } from './add-note.js';
import { remove } from './delete-note.js';
import { update } from './update-note.js';

const [, , operator] = process.argv;

switch (operator) {
  case 'read':
    read();
    break;
  case 'create':
    create();
    break;
  case 'delete':
    remove();
    break;
  case 'update':
    update();
    break;
  default:
    console.log('invalid operator');
}
