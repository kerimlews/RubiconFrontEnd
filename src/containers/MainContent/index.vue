<template>
  <div>
    <app-toggle @toggle="showMovies = $event" />
    <app-movies v-if="showMovies"/>
    <app-tvshow v-if="!showMovies"/>
  </div>
</template>

<script>
import appToggle from '@/components/Toggle'

import appMovies from './Movies'
import appTvshow from './TVShow'

export default {
  name: 'Content',
  data () {
    return {
      showMovies: false
    }
  },
  components: {
    appMovies,
    appTvshow,
    appToggle
  }
}
</script>
