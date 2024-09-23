/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module "*.svelte" {
  export default class SvelteComponent {
    constructor(options?: { target: Element, props?: Record<string, any> });
  }
}
