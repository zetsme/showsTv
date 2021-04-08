//
export const removeTags = (text) => {
  if (text === null || text === '') {
    return false;
  } else {
    text = text.toString();
  }
  return text.replace(/(<([^>]+)>)/gi, '');
};
//
export const firstCapitalLetter = (text) => text[0].toUpperCase() + text.slice(1);
//
export const defaultImage =
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80';
