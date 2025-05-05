// salesforceAdapter.js

import getValue from '@salesforce/apex/GlobalStoreController.getValue';
import setValue from '@salesforce/apex/GlobalStoreController.setValue';

export const salesforceAdapter = {
  async get(key) {
    try {
      const result = await getValue({ key });
      return result ? JSON.parse(result) : null;
    } catch (e) {
      console.error('SalesforceAdapter get error:', e);
      return null;
    }
  },

  async set(key, value) {
    try {
      const json = JSON.stringify(value);
      await setValue({ key, jsonValue: json });
    } catch (e) {
      console.error('SalesforceAdapter set error:', e);
    }
  }
};
