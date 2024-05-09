import OpenAI from 'openai';
// import { openai } from './node_modules';

const form = document.getElementById('input-form');
const inputContainer = document.getElementById('content');
const translationContainer = document.getElementById('translation');
const openai = new OpenAI({
  apiKey: 'sk-key',
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //   get the user input
  const text = document.getElementById('input-text').value;
  // get the checked radio btn (language)
  let languageBtn = document.querySelector('input:checked');
  if (languageBtn) {
    languageBtn = languageBtn.value;
  }
  // Hide original screen and display translation screen
  inputContainer.classList.add('d-none');
  translationContainer.classList.remove('d-none');

  // Make the call to OpenAi API
  getTranslation();

  console.log(text);
  console.log(languageBtn);
});

async function getTranslation() {
  const completion = await openai.chat.completitions({
    messages: [
      { role: 'system', content: 'You are experienced translator' },
      { role: 'user', content: `Translate ${text} to ${languageBtn}` },
    ],
    model: 'gpt-3.5-turbo',
  });
  console.log(completion.choices[0].message.content);
}
