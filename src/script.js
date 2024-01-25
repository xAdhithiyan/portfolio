function remapArrow() {
  let div = document.querySelector('.down-arrow');
  let arr = ['home', 'about', 'projects', 'blogs', 'contacts'];

  div.addEventListener('click', (e) => {
    let anchor = e.target.closest('a');
    console.log(anchor.href.split('#'));
    for (let i = 0; i < arr.length; i++) {
      if (!anchor.href.split('#')[1]) {
        anchor.setAttribute('href', '#' + arr[1]);
        break;
      } else if (anchor.href.split('#')[1] == 'contacts') {
        anchor.setAttribute('href', '#' + arr[0]);
        break;
      } else if (anchor.href.split('#')[1] == arr[i]) {
        console.log(anchor);
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

remapArrow();
