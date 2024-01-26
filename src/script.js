function remapArrow() {
  let btn1 = document.querySelector('.btn1');
  let btn2 = document.querySelector('.btn2');
  let btn3 = document.querySelector('.btn3');
  let btn4 = document.querySelector('.btn4');

  btn1.addEventListener('click', (e) => {
    let anchor = e.target.closest('a');
    console.log(anchor);
    anchor.setAttribute('href', '#about');
  });

  btn2.addEventListener('click', (e) => {
    let anchor = e.target.closest('a');
    console.log(anchor);
    anchor.setAttribute('href', '#projects');
  });

  btn3.addEventListener('click', (e) => {
    let anchor = e.target.closest('a');
    console.log(anchor);
    anchor.setAttribute('href', '#contacts');
  });

  btn4.addEventListener('click', (e) => {
    let anchor = e.target.closest('a');
    console.log(anchor);
    anchor.setAttribute('href', '#home');
  });
}

function reloadPage() {
  // Check if the page is being reloaded
  if (performance.navigation.type === 1) {
    // Remove the extra hash from the URL
    history.replaceState({}, document.title, window.location.pathname);
  }
}

function submitButton() {
  let submit = document.getElementById('submit');
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');
  let form = document.querySelector('form');

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (form.reportValidity()) {
      console.log(name.value, email.value, message.value);
      name.value = email.value = message.value = '';
    }
  });

  // connecting to google spreadsheet
}

remapArrow();
reloadPage();
submitButton();
