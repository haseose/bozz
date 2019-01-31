import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import VueMaterial from 'components/App'

export const routes = [
  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'graduation-cap' },
  { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Fetch data', icon: 'list' },
  { name: 'vue-material', path: '/vue-material', component: VueMaterial, display: 'vue-material', icon: 'list' }
]
