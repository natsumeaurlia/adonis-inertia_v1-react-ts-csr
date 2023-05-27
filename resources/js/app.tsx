import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'

createInertiaApp({
  id: 'app',
  resolve: (name) => require(`./pages/${name}`),
  setup: ({ el, App, props }) => createRoot(el).render(<App {...props} />),
})
