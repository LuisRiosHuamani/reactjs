<template lang="pug">
	.card(v-if="track && track.album")
	.card-image
	figure.image.is-1by1
	img(:src="track.album.images[0].url" )

	.card-content
	.media
	.media-left
	figure.image.is-48*48
	img(:src="track.album.images[0].url" )
	.media-content
	p.title.is-6
	strong {{ track.name }}
	p.subtitle.is-6 {{ track.artist[0].name }}

	.content
	small {{ track.duration_ms | ms-to-mm }}
	nav.level
	.level-left
	button.level-item.button.is-primary
	span.icon.is-small(@click="selectTrack")
	button.level-item.button.is-warning
	span.icon.is-small(@click="goToTrack(track.id)")
</template>

<script>

import trackService from '@/services/track'

	export default {
		
		mixins: [ trackMixin ],
props: {
	track: { type: Object, required: true }
},
methods: {
	

goToTrack (id) {
	if (!this.track.preview_url) { return }

this.$route.push({ name: 'track', params: { id } })
}
}
}
</script>

<style lang="cas">
</style>