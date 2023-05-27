/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ response }) => {
  return response.redirect().toRoute('test')
})

Route.get('/test', async ({ inertia }) => {
  return inertia.render('test', { name: 'adonis' })
}).as('test')
Route.get('/test2', async ({ inertia }) => {
  return inertia.render('test2', { name: 'adonis2' })
}).as('test2')
