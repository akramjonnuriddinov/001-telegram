const elFormCountry = document.querySelector('.js-form-country');
const elToggleIconDown = document.querySelector('.toggle-icon-down');
const elToggleIconUp = document.querySelector('.toggle-icon-up');
const elContainer = document.querySelector('.container');
const elCountryWrapper = document.querySelector('.country-wrapper');

// COUNTRY
if(elFormCountry) {
  elFormCountry.addEventListener('focus', function() {
    elToggleIconDown.classList.add('toggle-icon--none');
    elToggleIconUp.classList.remove('toggle-icon--none');
    elCountryWrapper.classList.add('country-wrapper--open');
  });
}
