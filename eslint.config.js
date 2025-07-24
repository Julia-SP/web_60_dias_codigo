import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  {
    // Configuración adicional para React 17+ (nueva JSX Transform)
    settings: {
      react: {
        version: "detect" // Detecta automáticamente la versión de React
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Desactiva la regla que requiere importar React
      "react/jsx-uses-react": "off"       // Desactiva la regla que marca React como usado
    }
  }
]);
