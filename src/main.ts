import { mount } from 'svelte';
import './app.css';
import EditBasics from './lib/Ticket/EditBasics.svelte';

window.onload = () => {
  const components = [
    { selector: '#svelte-edit-basics', Component: EditBasics },
  ];

  components.forEach(({ selector, Component }) => {
    const target = document.querySelector(selector);
    console.log(window?.props)

    if (target) {
      mount(Component, { target, props: window?.props || {} });
    }
  });
};
