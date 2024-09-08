import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const countContacts = async () => {
  try {
    const dataBase = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contacts = JSON.parse(dataBase);
    return contacts.length;
  } catch (error) {
    console.error(`Error while reading contacts: ${error.message}`);
  }
};

console.log(await countContacts());
