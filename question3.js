// 
//  QUESTION 3
//

// lastNameField.style.display = 'none'; // try removing entire node

const lastNameField = document.getElementById('lastNameField');
lastNameField.removeAttribute('data-validate');

const lastNameInput = lastNameField.children[1];
lastNameInput.removeAttribute('required');
lastNameInput.removeAttribute('value');
lastNameInput.removeAttribute('aria-required');

lastNameField.parentNode.removeChild(lastNameField);

const firstNameField = document.getElementById('firstNameField');
firstNameField.children[0].innerText = 'Name';
firstNameField.children[1].placeholder = 'Name';
firstNameField.children[2].textContent = 'Please enter your full name';