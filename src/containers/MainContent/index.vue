<template>
  <div>
    <app-toggle :showMovie="showMovies" @toggle="toggle" />
    <app-movies v-if="showMovies"/>
    <app-tvshow v-if="!showMovies"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import appToggle from '@/components/Toggle'

import appMovies from './components/Movies'
import appTvshow from './components/TVShow'

export default {
  name: 'Content',
  computed: {
    ...mapGetters([
      'showMovies'
    ])
  },
  methods: {
    ...mapActions([
      'toggle'
    ])
  },
  components: {
    appMovies,
    appTvshow,
    appToggle
  }
}
</script>
