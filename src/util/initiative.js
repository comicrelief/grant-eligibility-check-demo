import data from '../data/initiatives.json';

export const loadInitiative = (initiativeName) => {
  for (let index = 0; index < data.initiatives.length; index++) {
    if (initiativeName === data.initiatives[index].name) {
      return (data.initiatives[index]);
    }
  }
}
