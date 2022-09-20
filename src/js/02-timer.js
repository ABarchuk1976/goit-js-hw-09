import flatpickr from 'flatpickr';

const inputRef = document.querySelector('#datetime-picker');
const btnStartRef = document.querySelector('[data-start]');
const timerRef = document.querySelector('.timer');
const fieldsRef = document.querySelectorAll('.field');
const spanValuesRef = document.querySelectorAll('.value');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-swconds]');
const spanLabelsRef = document.querySelectorAll('.label');

for (const span of spanLabelsRef) {
  span.style.fontSize = '0.65rem';
  span.style.textTransform = 'uppercase';
}

for (const span of spanValuesRef) {
  span.style.fontSize = '2rem';
  span.style.fontWeight = '500';
}

for (const field of fieldsRef) {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.justifyContent = 'center';
  field.style.alignItems = 'center';
  field.style.marginRight = '10px';
}

timerRef.style.display = 'flex';
timerRef.style.marginTop = '20px';
