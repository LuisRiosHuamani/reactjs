<template lang="pug">
  
  #app
  pm-header
 
 router-view 
 555
  pm-footer
  
</template>

<script>
import trackService from '@/services/track.js'
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'

import PmTrack from '@/components/Track.vue'

import PmNotification from '@/components/shared/Notification.vue'
import PmLoader from '@/components/shared/Loader.vue'
export default {
  name: 'app',

components: { PmFooter, PmHeader, PmTrack, PmLoader, PmNotification }

  

  
} 
</script>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
