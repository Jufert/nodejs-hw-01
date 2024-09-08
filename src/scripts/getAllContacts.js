import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const getAllContacts = async () => {
  try {
    const dataBase = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contacts = JSON.parse(dataBase);
    return contacts;
  } catch (error) {
    console.error(`Error while getting contacts: ${error.message}`);
    return [];
  }
};

console.log(await getAllContacts());
