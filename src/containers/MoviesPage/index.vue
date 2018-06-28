<template>
    <div class="container">
        <div class="row">
            <search
                :value="search"
                @onChange="onChangeSearch"
            />
        </div>
        <div class="row">
            <spinner
                :isLoading="isLoading"
            />
            <ul
                v-if="!isLoading"
                v-for="movie in movies"
                :key="movie.id"
            >
                <li>
                    {{movie}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import spinner from '@/components/spinner'
import search from '@/components/search'

export default {
  name: 'MoviesPage',
  data () {
    return {
      search: ''
    }
  },
  beforeMount: function () {
    this.fetchMovies()
  },
  methods: {
    ...mapActions([
      'fetchMovies',
      'searchMovies'
    ]),
    onChangeSearch (value) {
      this.search = value
      if (value.length > 3) {
        this.searchMovies(value)
      } else {
          this.fetchMovies()
      }
    }
  },
  computed: {
    ...mapGetters([
      'moviesData'
    ])
  },
  components: {
    spinner,
    search
  }
}
</script>

<style lang="scss" scoped>

</style>
