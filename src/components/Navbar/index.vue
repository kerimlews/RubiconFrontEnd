<template>
    <div class="btn-group btn-group-toggle mt-4" data-toggle="buttons">
        <button class="btn btn-outline-secondary" :class="{ active: isMovie }" v-on:click="toggleMovie" >
           Movies
        </button>
        <button class="btn btn-outline-secondary" :class="{ active: isTVShow }" v-on:click="toggleTVShow" >
            TV Shows
        </button>
    </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'Navbar',
  data () {
    return {
      isMovie: false,
      isTVShow: true
    }
  },
  methods: {
    toggleMovie () {
      if (this.isMovie) {
        return
      }
      this.isTVShow = false
      this.isMovie = true
      router.push({ path: '/movies' })
    },
    toggleTVShow () {
      if (this.isTVShow) {
        return
      }
      this.isMovie = false
      this.isTVShow = true
      router.push({ path: '/tvshows' })
    }
  }
}
</script>

<style lang="sass">

</style>
