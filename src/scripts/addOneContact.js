import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const dataContact = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contact = JSON.parse(dataContact);
    const newContact = await createFakeContact();
    contact.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contact, null, 2), {
      encoding: 'utf8',
    });
    console.log(`Successfully add contact one into db.json`);
  } catch (error) {
    console.error(`Error while generating contacts: ${error.message}`);
  }
};

addOneContact();
