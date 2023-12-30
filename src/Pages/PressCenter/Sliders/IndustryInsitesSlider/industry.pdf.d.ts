declare module '*.pdf' {
    const content: string;
    export default content;
  }
  
  // Add the following line to ensure it's treated as a module
  export {};