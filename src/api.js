

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/raul-muhiddin';

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
  let newItem = JSON.stringify({ name: name });
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem
  });
}

const deleteItem = function (id) {
  return fetch(BASE_URL + '/items/' + id, {
    method: 'DELETE'
  });
};

export default {
  getItems,
  createItem,
  deleteItem
};

