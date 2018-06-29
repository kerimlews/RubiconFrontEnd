<template>
  <div>
    <div class="container">
      <app-search
        :value="search"
        @onChange="onChangeSearch"
      />
    </div>
    <div class="container">
      <app-spinner
        :isLoading="isLoadingTVShow"
      />
      <app-list
        :isLoading="isLoadingTVShow"
        :items="tvshowData"
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
  name: 'TVShowPage',
  data () {
    console.log(this.$store)
    return {
      search: '',
      isFetched: false
    }
  },
  beforeMount: function () {
    this.fetchTVShows()
  },
  methods: {
    ...mapActions([
      'searchTVShows',
      'fetchTVShows'
    ]),
    onChangeSearch (value) {
      this.search = value
      if (value.length > 3) {
        this.isFetched = true
        this.searchTVShows(value)
      }
      if (this.isFetched && value.length === 3) {
        this.fetchTVShows()
        this.isFetched = false
      }
    },
    showDetails (item) {
      this.$store.dispatch('showDetailsTVShow', item)
    }
  },
  computed: {
    ...mapGetters([
      'tvshowData',
      'isLoadingTVShow',
      'errorTVShow'
    ])
  },
  components: {
    appSpinner,
    appSearch,
    appList
  }
}
</script>
