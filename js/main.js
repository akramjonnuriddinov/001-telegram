const elFormCountry = document.querySelector('.js-form-country');
const elToggleIconDown = document.querySelector('.toggle-icon-down');
const elToggleIconUp = document.querySelector('.toggle-icon-up');
const elContainer = document.querySelector('.container');
const elCountryWrapper = document.querySelector('.country-wrapper');

// COUNTRY-LIST
const elsFormCountryItem = document.querySelectorAll('.form__country-item');
const elsFormCountryName = document.querySelectorAll('.form__country-name');

if(elsFormCountryItem) {
  elsFormCountryItem.forEach(function(item, index) {
    item.addEventListener('click', function() {
      elFormCountry.value = elsFormCountryName[index].outerText;
      elCountryWrapper.classList.remove('country-wrapper--open');
      elToggleIconDown.classList.remove('toggle-icon--none');
      elToggleIconUp.classList.add('toggle-icon--none');
    });
  })
}

// COUNTRY
if(elFormCountry) {
  elFormCountry.addEventListener('focus', function() {
    elToggleIconDown.classList.add('toggle-icon--none');
    elToggleIconUp.classList.remove('toggle-icon--none');
    elCountryWrapper.classList.add('country-wrapper--open');
  });
}

// AUTHIFICAITON
const elAuthBtn = document.querySelector('.js-auth-btn');
const elAuthTel = document.querySelector('.js-auth-tel');

elAuthBtn.addEventListener('click', function() {
  localStorage.setItem('value', elAuthTel.value);
})
