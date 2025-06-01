const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('input', handleOnText);
form.addEventListener('submit', handleSubmit);

populateText();

function handleOnText(event) {
  const { name, value } = event.target;

  if (name === 'email') {
    formData.email = value.trim();
  } else if (name === 'message') {
    formData.message = value.trim();
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateText() {
  const savedStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedStorage) {
    formData.email = savedStorage.email || '';
    formData.message = savedStorage.message || '';
    inputEmail.value = formData.email;
    textarea.value = formData.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
}