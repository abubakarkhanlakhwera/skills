import { invoke } from '@tauri-apps/api/core';

document.querySelector('#greet-btn').addEventListener('click', async () => {
  const name = document.querySelector('#name-input').value;
  try {
    const message = await invoke('greet', { name });
    document.querySelector('#output').textContent = message;
  } catch (err) {
    document.querySelector('#output').textContent = `Error: ${err}`;
  }
});
