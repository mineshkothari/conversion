// 
//  QUESTION 2
//

// VARIABLES
const radios = document.querySelectorAll('.radio');

// FUNCTIONS
function handleClick() {
    // console.log(this.innerText);
    window.alert(this.innerText);
}

// EVENT HANDLERS
radios.forEach(radio => radio.addEventListener('click', handleClick));