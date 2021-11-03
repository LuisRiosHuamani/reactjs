import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import TrackDetail from '@components/TrackDetail.ue'

const routes = [
	{ path: '/', component: Search, name: 'search' },
	{ path: './about', component: About, name: 'search' }
	{ path: '/track/:id', component: About, name: 'about' }
]

export default routes