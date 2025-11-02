export const REACT_JSX_SHIM =  `
declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: string): any;
  export function jsxs(type: any, props: any, key?: string): any;
  export const Fragment: any;
}

declare module 'react/jsx-dev-runtime' {
  export function jsxDEV(type: any, props: any, key?: string, isStaticChildren?: boolean, source?: any, self?: any): any;
  export const Fragment: any;
}

declare namespace React {
  function createElement(...args: any[]): any;
  type ReactNode = any;
  type ComponentType<P = {}> = any;
  interface CSSProperties {
    [key: string]: any;
  }
  namespace Fragment {
    function createElement(...args: any[]): any;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      span: any;
      p: any;
      h1: any;
      h2: any;
      h3: any;
      h4: any;
      h5: any;
      h6: any;
      img: any;
      button: any;
      input: any;
      textarea: any;
      select: any;
      option: any;
      ul: any;
      ol: any;
      li: any;
      table: any;
      tr: any;
      td: any;
      th: any;
      thead: any;
      tbody: any;
      a: any;
      br: any;
      hr: any;
      strong: any;
      em: any;
      code: any;
      pre: any;
      [elemName: string]: any;
    }
  }
}

declare const InlineMath: React.ComponentType<{ math: string }>;
declare const BlockMath: React.ComponentType<{ math: string }>;
`;