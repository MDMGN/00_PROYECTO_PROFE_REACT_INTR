// Este archivo lo crea la plantilla de Vite con React.
// Su funcion es configurar ESLint, la herramienta que revisa el codigo cuando
// ejecutamos npm run lint. ESLint no ejecuta la aplicacion: solo analiza archivos
// .js y .jsx para detectar errores, malas practicas o configuraciones que no
// encajan con React, como problemas con hooks o con la recarga rapida de Vite.
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
