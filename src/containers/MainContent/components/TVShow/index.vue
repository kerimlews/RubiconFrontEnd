<template>
  <div class="container">
    <div class="">
      <app-search
        :value="search"
        @onChange="onChangeSearch"
      />
    </div>
    <div>
      <app-alert
        v-if="errorTVShow != null"
        :message="errorTVShow"
      />
      <app-spinner
        v-if="isLoadingTVShow"
      />
      <app-list
        :type="type"
        :isLoading="isLoadingTVShow"
        :items="tvshowData"
        :showDetails="showDetailsTVShow"
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
  name: 'TVShowPage',
  data () {
    return {
      type: 'TV Show',
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
      'fetchTVShows',
      'showDetailsTVShow'
    ]),
    onChangeSearch (value) {
      this.search = value
      if (value.length > 3) {
        this.isFetched = true
        this.searchTVShows(value)
      }
      if (this.isFetched && value.length <= 3) {
        this.fetchTVShows()
        this.isFetched = false
      }
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
    appList,
    appAlert
  }
}
</script>
