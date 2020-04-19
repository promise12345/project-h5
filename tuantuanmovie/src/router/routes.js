import Movie from '@/views/Movie'
import Mine from '@/views/Mine'
import Cinema from '@/views/Cinema'

const routes = [
  {
    path: '/movie',
    component: Movie
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  }
]

export {routes}