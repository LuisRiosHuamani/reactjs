import Vue from 'vue'
import Vuex from 'vuex'

import trackService from '@/services/track'

Vue.use(vuex)

const store = new Vuex.Store({
state: {
	track: { }
} ,

getters: {
	trackTitle (state) {
		if (!state.track.name) { return ' ' }
		return `${state.track.name} - ${state.track.artists[0].name}`
	}
},

mutations: {
	setTrack (state, track ) {
		state.track  = track
	}
},

actions: {
	getTrackById (context, payload) {
return trackService.getById(payload.id)
.then(res => {
	context.commit('setTrack', res)
	return res
})
	}
}
})

export default store