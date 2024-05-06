const form = document.getElementById('input-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //   get the user input
  const text = document.getElementById('input-text').value;
  // get the checked radio btn (language)
  let languageBtn = document.querySelector('input:checked');
  if (languageBtn) {
    languageBtn = languageBtn.value;
  }

  console.log(text);
  console.log(languageBtn);
});
