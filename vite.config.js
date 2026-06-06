
// defineConfig viene de Vite.
// Sirve para escribir la configuracion del proyecto con ayudas del editor.
import { defineConfig } from 'vite'

// react es el plugin oficial de Vite para proyectos React.
// Permite que Vite entienda JSX y actualice la pantalla mientras desarrollamos.
import react from '@vitejs/plugin-react'

// Exportamos la configuracion que Vite usara al ejecutar npm run dev o npm run build.
export default defineConfig({
  plugins: [react()],
})
