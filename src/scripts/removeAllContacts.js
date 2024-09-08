import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), {
      encoding: 'utf8',
    });
  } catch (error) {
    console.error(`Error while deleting contacts: ${error.message}`);
  }
};

removeAllContacts();
