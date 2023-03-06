import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_FORM = 'feedback-form-state';
const dataObject = {};

dataFormUpdate();

form.addEventListener('input', throttle(dataFormSave, 500));
form.addEventListener('submit', dataSendForm);

function dataFormSave(event) {
  event.preventDefault();
  dataObject.email = form.elements.email.value;
  dataObject.message = form.elements.message.value;
  localStorage.setItem(STORAGE_FORM, JSON.stringify(dataObject));
}

function dataFormUpdate() {
  const formData = localStorage.getItem(STORAGE_FORM);
  try {
    const formDataValue = JSON.parse(formData);
    form.elements.email.value = formDataValue.email || '';
    form.elements.message.value = formDataValue.message || '';
  } catch (error) {
    console.log('Empty localeStorage');
  }
}

function dataSendForm(event) {
  event.preventDefault();
  dataObject.email = form.elements.email.value;
  dataObject.message = form.elements.message.value;
  console.log(dataObject);

  localStorage.removeItem(STORAGE_FORM);
  form.reset();
}
