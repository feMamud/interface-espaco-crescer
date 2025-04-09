/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    // adicione outras variáveis aqui, se necessário
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  