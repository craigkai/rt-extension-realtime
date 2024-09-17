import './app.css';
import App from './App.svelte';

let appInstance;

window.onload = () => {
  const target = document.getElementById('svelte-app');
  if (target) {
    appInstance = new App({ target });
  } else {
    console.error('Target element not found');
  }
};

// Export the app instance
export { appInstance };
