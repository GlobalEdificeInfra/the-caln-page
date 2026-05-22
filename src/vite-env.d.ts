/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    "conversales-convai": {
      "agent-id": string;
      "leads-capture"?: "true" | "false";
    };
  }
}

declare module "*.pdf" {
  const src: string;
  export default src;
}
