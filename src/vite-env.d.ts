/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    "conversales-convai": {
      "agent-id": string;
    };
  }
}

declare module "*.pdf" {
  const src: string;
  export default src;
}