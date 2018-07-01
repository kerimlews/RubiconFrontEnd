<template>
  <div class="container">
    <div class="container">
        <app-search
          :value="search"
          @onChange="onChangeSearch"
        />
    </div>
    <div class="container">
        <app-spinner
          :isLoading="isLoadingMovies"
        />
        <app-list
          :type="type"
          :isLoading="isLoadingMovies"
          :items="moviesData"
          :showDetails="showDetails"
        />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import appSpinner from '@/components/spinner'
import appSearch from '@/components/search'
import appList from '@/components/list'

export default {
  name: 'MoviesPage',
  data () {
    return {
      type: 'Movie',
      search: '',
      isFetched: false
    }
  },
  beforeMount: function () {
    this.fetchMovies()
  },
  methods: {
    ...mapActions([
      'fetchMovies',
      'searchMovies',
      'showDetails'
    ]),
    onChangeSearch (value) {
      this.search = value
      if (value.length > 3) {
        this.isFetched = true
        this.searchMovies(value)
      }
      if (this.isFetched && value.length === 3) {
        this.fetchMovies()
        this.isFetched = false
      }
    }
  },
  computed: {
    ...mapGetters([
      'isLoadingMovies',
      'moviesData',
      'errorMovies'
    ])
  },
  components: {
    appSpinner,
    appSearch,
    appList
  }
}
</script>
