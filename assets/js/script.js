// Form validation function
var navList = document.querySelectorAll('.nav-list');
var firstName = document.querySelector('#first-name');
var lastName = document.querySelector('#last-name');
var position = document.querySelector('#position');
var company = document.querySelector('#company');
var email = document.querySelector('#email');
var stringPattern = /^[a-zA-Z]+$/g;
var positionPattern = /^[a-zA-Z\s]+$/g;
var companyPattern = /^[a-zA-Z\s0-9]+$/g;
var emailPattern = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

navList.forEach(function (list) {
  list.addEventListener('click', function () {
    var activeList = document.querySelector('.active-list');
    activeList.classList.remove('active-list');
    list.classList.add('active-list');
  })
});

firstName.addEventListener('blur', function () {
  validateError(firstName, stringPattern, "*whitespace and numbers are not allowed", 3);
})
lastName.addEventListener('blur', function () {
  validateError(lastName, stringPattern, "*whitespace and numbers are not allowed", 3);
})
position.addEventListener('blur', function () {
  validateError(position, positionPattern, "*only characters are allowed");
})
company.addEventListener('blur', function () {
  validateError(company, companyPattern, "*only characters are allowed");
})
email.addEventListener('blur', function () {
  validateError(email, emailPattern,"invalid email");
})

function validateError(input, pattern = '', message, Length='') {
  var inputError = input.parentElement.children;
  for (var i = 0; i < inputError.length; i++) {
    if (inputError[i].classList.contains('inputError')) {
      if (input.value) {
        // firstname, lastname condition
        if (input.value.match(pattern)) {          
          if (input.value.length < Length) {
            input.classList.add('error');
            inputError[i].classList.add('show-error');
            inputError[i].innerText = '*characters must be more than 3 characters';
          } else {
            input.classList.remove('error');
            inputError[i].classList.remove('show-error');
            input.classList.add('success');
          }
        } else {
          input.classList.add('error');
          inputError[i].classList.add('show-error');
          inputError[i].innerText = message;
        }
      } else {
        input.classList.add('error');
        inputError[i].classList.add('show-error');
        inputError[i].innerText = '*field is required';
      }
    }
  }
}























