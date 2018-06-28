<template>
    <div>
        <spinner v-bind:isLoading="isLoading" />
        <ul v-if="!isLoading" v-for="tv in tvshow" :key="tv.id">
            <li >
                {{tv}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import spinner from '@/components/spinner'

export default {
  name: 'TVShowPage',
  beforeMount: function () {
    this.fetchTVShow()
  },
  methods: {
    ...mapActions([
      'fetchTVShow'
    ])
  },
  computed: {
    ...mapGetters([
      'tvshow',
      'isLoading',
      'error'
    ])
  },
  components: {
    spinner
  }
}
</script>

<style lang="scss" scoped>

</style>
