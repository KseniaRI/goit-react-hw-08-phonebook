export const getItems = state => state.phonebook.items.contacts;

export const getIsLoading = state => state.phonebook.items.isLoading;
export const getFilter = state => state.phonebook.filter.value;

export const getVisibleContacts = state => {
  const allContacts = getItems(state);
  const phonebookFilter = getFilter(state);
  return allContacts.filter(contact => {
   return contact.name.toLowerCase().includes(phonebookFilter.toLowerCase())
  });

  };