/* eslint-disable import/extensions */
import { Router } from '@vaadin/router'
import './Pages/Home'
import './Pages/Search'
import './Pages/Series'
import './Pages/Movies'
import './Pages/MyList'
import './Pages/Profile'
// To-Do - Import your components here


const router = new Router(document.querySelector('main'))
router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '/search', component: 'search-page' },
  { path: '/series', component: 'series-page' },
  { path: '/movies', component: 'movies-page' },
  { path: '/my-list', component: 'my-list-page' },
  { path: '/profile', component: 'profile-page' },
  // To-Do - Add your routes here
])
