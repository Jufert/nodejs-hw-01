import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const dataBase = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contacts = JSON.parse(dataBase);
    if (contacts.length === 0) {
      return;
    }
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), {
      encoding: 'utf8',
    });
  } catch (error) {
    console.error(`Error while deleting contacts: ${error.message}`);
  }
};

removeLastContact();
