import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const dataForContacts = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contact = JSON.parse(dataForContacts);
    const createNewContacts = [];
    for (let i = 0; i < number; i++) {
      const newContact = await createFakeContact();
      createNewContacts.push(newContact);
    }
    const updateContacts = [...contact, ...createNewContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(updateContacts, null, 2), {
      encoding: 'utf8',
    });
    console.log(`Successfully created ${number} into db.json`);
  } catch (error) {
    console.error(`Error while generating contacts: ${error.message}`);
  }
};

generateContacts(5);

