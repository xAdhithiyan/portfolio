function remapArrow() {
  let div = document.querySelector('.down-arrow');
  let arr = ['home', 'about', 'projects', 'contacts'];

  div.addEventListener('click', (e) => {
    let anchor = e.target.closest('a');
    for (let i = 0; i < arr.length; i++) {
      if (!anchor.href.split('#')[1]) {
        anchor.setAttribute('href', '#' + arr[1]);
        break;
      } else if (anchor.href.split('#')[1] == 'contacts') {
        anchor.setAttribute('href', '#' + arr[0]);
        break;
      } else if (anchor.href.split('#')[1] == arr[i]) {
        anchor.setAttribute('href', anchor.href.split('#')[0] + '#' + arr[i + 1]);
        break;
      }
    }
  });

  // to map nav buttons to down buttons
  let nav = document.querySelector('nav').children;
  nav = Array.from(nav);
  nav.forEach((element) => {
    element.addEventListener('click', (e) => {
      let div = document.querySelector('.down-arrow');
      let divHref = div.href.split('#')[0];
      div.setAttribute('href', divHref + '#' + e.target.href.split('#')[1]);
    });
  });

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

  console.log(submit);
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
submitButton();
