<template>
    <div>
        <ul v-for="movie in moviesData.movies" :key="movie.id">
            <li >
                {{movie}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MoviesPage',
  beforeMount: function () {
    this.fetchMovies()
  },
  methods: {
    ...mapActions([
      'fetchMovies'
    ])
  },
  computed: {
    ...mapGetters([
      'moviesData'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
