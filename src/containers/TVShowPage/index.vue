<template>
    <div>
        <ul v-for="tv in tvshowData.tvshow" :key="tv.id">
            <li >
                {{tv}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
      'tvshowData'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
