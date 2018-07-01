<template>
<div class="row form-group">
    <div class="btn-group btn-group-toggle mt-4" data-toggle="buttons">
        <button class="btn btn-outline-secondary" :class="{ active: isMovie }" v-on:click="toggleMovie" >
           Movies
        </button>
        <button class="btn btn-outline-secondary" :class="{ active: isTVShow }" v-on:click="toggleTVShow" >
            TV Shows
        </button>
    </div>
    </div>
</template>

<script>
export default {
  props: ['showMovie'],
  name: 'Toggle',
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
      this.$store.dispatch('toggleMainContent', true)
    },
    toggleTVShow () {
      if (this.isTVShow) {
        return
      }
      this.isMovie = false
      this.isTVShow = true
      this.$store.dispatch('toggleMainContent', false)
    }
  }
}
</script>

<style lang="sass">

</style>
