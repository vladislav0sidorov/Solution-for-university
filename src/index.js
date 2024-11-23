// Единое состояние приложения
let state = {
  isEditing: false,
  firstName: '',
  lastName: ''
};

// Функция для обновления DOM на основе состояния
function render() {
  const { isEditing, firstName, lastName } = state;

  const firstNameValue = firstNameInput.value ? firstNameInput.value : firstName
  const lastNameValue = lastNameInput.value ? lastNameInput.value : lastName

  editButton.textContent = isEditing ? 'Save Profile' : 'Edit Profile';
  firstNameInput.style.display = isEditing ? '' : 'none';
  lastNameInput.style.display = isEditing ? '' : 'none';
  firstNameText.style.display = isEditing ? 'none' : '';
  lastNameText.style.display = isEditing ? 'none' : '';

  firstNameText.textContent = firstNameValue;
  lastNameText.textContent = lastNameValue;
  helloText.textContent = `Hello ${firstNameValue} ${lastNameValue}!`;
}

function handleFormSubmit(e) {
  e.preventDefault();
  state.isEditing = !state.isEditing;
  render();
}

function handleNameChange(field, value) {
  state[field] = value;
  render();
}

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');

form.onsubmit = handleFormSubmit;
firstNameInput.oninput = (e) => handleNameChange('firstName', e.target.value);
lastNameInput.oninput = (e) => handleNameChange('lastName', e.target.value);

// Инициализация начального состояния
render();
