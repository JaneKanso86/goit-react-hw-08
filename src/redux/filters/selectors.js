import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectNameFilter = (state) => state.filters.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (!filter) return contacts;

    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter((contact) => {
      const name = contact.name.toLowerCase().trim();
      const phone = contact.number;

      const nameMatch = name.includes(normalizedFilter);
      const phoneMatch = phone.includes(filter);

      return nameMatch || phoneMatch;
    });
  },
);
