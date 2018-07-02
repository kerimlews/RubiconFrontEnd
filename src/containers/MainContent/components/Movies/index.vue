<template>
  <div class="container">
    <div>
        <app-search
          :value="search"
          @onChange="onChangeSearch"
        />
    </div>
    <div>
        <app-alert
          v-if="errorMovies != null"
          :message="errorMovies"
          />
        <app-spinner
          v-if="isLoadingMovies"
        />
        <app-list
          :type="type"
          :isLoading="isLoadingMovies"
          :items="moviesData"
          :showDetails="showDetailsMovie"
        />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import appSpinner from '@/components/spinner'
import appSearch from '@/components/search'
import appList from '@/components/list'
import appAlert from '@/components/alert'

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
      'showDetailsMovie'
    ]),
    onChangeSearch (value) {
      this.search = value
      if (value.length > 3) {
        this.isFetched = true
        this.searchMovies(value)
      }
      if (this.isFetched && value.length <= 3) {
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
    appList,
    appAlert
  }
}
</script>
